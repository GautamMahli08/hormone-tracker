from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional
import os

app = FastAPI(title="HormonyAI API", version="1.0.0")

# CORS Configuration - Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev server
        "http://localhost:3000",  # Alternative port
        "https://your-domain.com"  # Your production domain
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# MongoDB Connection
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGODB_URL)
db = client.hormone_tracker

# Data Models
class WaitlistEntry(BaseModel):
    name: Optional[str] = None
    email: EmailStr

class WaitlistResponse(BaseModel):
    message: str
    email: str
    joined_at: datetime

# API Routes
@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "running",
        "message": "HormonyAI API is live!",
        "version": "1.0.0"
    }

@app.post("/api/waitlist", response_model=WaitlistResponse)
async def add_to_waitlist(entry: WaitlistEntry):
    """
    Add a user to the waitlist
    - Accepts: name (optional) and email (required)
    - Stores in MongoDB
    - Returns: confirmation message
    """
    # Check if email already exists
    existing = await db.waitlist.find_one({"email": entry.email})
    if existing:
        raise HTTPException(
            status_code=400, 
            detail="This email is already on the waitlist"
        )
    
    # Create waitlist entry
    waitlist_data = {
        "name": entry.name,
        "email": entry.email,
        "joined_at": datetime.utcnow(),
        "status": "pending"
    }
    
    # Insert into database
    result = await db.waitlist.insert_one(waitlist_data)
    
    return {
        "message": "Successfully added to waitlist!",
        "email": entry.email,
        "joined_at": waitlist_data["joined_at"]
    }

@app.get("/api/waitlist/count")
async def get_waitlist_count():
    """Get total number of waitlist signups"""
    count = await db.waitlist.count_documents({})
    return {"count": count}

@app.get("/api/waitlist/all")
async def get_all_waitlist():
    """Get all waitlist entries (for admin use)"""
    entries = []
    async for entry in db.waitlist.find():
        entry["_id"] = str(entry["_id"])  # Convert ObjectId to string
        entries.append(entry)
    return {"total": len(entries), "entries": entries}

# Startup event
@app.on_event("startup")
async def startup_db_client():
    """Connect to MongoDB on startup"""
    try:
        await client.admin.command('ping')
        print("✅ Successfully connected to MongoDB!")
    except Exception as e:
        print(f"❌ Error connecting to MongoDB: {e}")

# Shutdown event
@app.on_event("shutdown")
async def shutdown_db_client():
    """Close MongoDB connection on shutdown"""
    client.close()
    print("🔌 Disconnected from MongoDB")
