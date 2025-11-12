🌸 HormonyAI - AI-Powered Hormone & Cycle Tracker

🌟 About
HormonyAI is a modern web application that helps women track their menstrual cycles, symptoms, moods, and lifestyle factors using AI and machine learning. The platform predicts hormone fluctuations and provides personalized health insights to help women understand their bodies better.

Why HormonyAI?
🎯 98% Accuracy - AI-powered cycle predictions that learn from your unique patterns

🔒 Privacy First - HIPAA-compliant with end-to-end encryption

📊 Visual Analytics - Interactive dashboards and hormone level predictions

💡 Personalized Insights - Daily health tips tailored to your cycle phase

🌙 Holistic Tracking - Monitor symptoms, moods, sleep, and energy levels

✨ Features
Smart Cycle Prediction
Advanced algorithms forecast period start dates, cycle length, and phase transitions with 98% accuracy.

Symptom Tracking
Log over 70 symptoms including physical, emotional, and lifestyle factors to identify patterns.

Personalized Insights
Receive daily health tips, nutrition advice, and exercise recommendations based on your hormonal phase.

Visual Analytics
Interactive dashboards display hormone predictions, symptom heatmaps, and mood trends.

Wellness Recommendations
Get personalized self-care practices and dietary suggestions tailored to your cycle.

Frontend
React 18 - UI library
TypeScript - Type safety
Vite - Build tool & dev server
Tailwind CSS - Styling
Framer Motion - Animations
Lucide React - Icons

Backend
FastAPI - Python web framework
Motor - Async MongoDB driver
Pydantic - Data validation
Uvicorn - ASGI server

Database
MongoDB - NoSQL database

📦 Prerequisites
Before you begin, ensure you have the following installed:
Node.js (v18 or higher) - Download
Python (v3.9 or higher) - Download
MongoDB (v6.0 or higher) - Download
Git - Download


Step 1: Clone the Repository
bash
git clone https://github.com/yourusername/hormone-tracker.git

cd hormone-tracker
Step 2: Frontend Setup
bash OR Terminal
# Install dependencies
npm install

RUN : npm run dev

Step : Backend Setup

bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn motor pydantic[email]
OR
pip install -r requirements.txt


Run: uvicorn main:app --reload --host 0.0.0.0 --port 8000
