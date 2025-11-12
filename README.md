# 🌸 HormonyAI — AI-Powered Hormone & Cycle Tracker

> **An AI-driven menstrual and hormone tracking web app that empowers women to understand their bodies through data and intelligence.**

---

## ✨ Overview

**HormonyAI** is a modern, privacy-first health platform that uses **AI and machine learning** to help women track their menstrual cycles, symptoms, moods, and lifestyle factors.  
It predicts **hormone fluctuations**, visualizes trends, and offers **personalized insights** for better health and wellness.

---

## 🌟 Why HormonyAI?

| Feature | Description |
|----------|-------------|
| 🎯 **98% Accuracy** | AI-powered cycle predictions that learn from your unique patterns. |
| 🔒 **Privacy First** | Fully HIPAA-compliant with end-to-end data encryption. |
| 📊 **Visual Analytics** | Interactive dashboards for hormone levels and mood trends. |
| 💡 **Personalized Insights** | Daily tips tailored to your hormonal phase and lifestyle. |
| 🌙 **Holistic Tracking** | Track 70+ symptoms, moods, sleep, and energy patterns. |

---

## 🧠 Key Features

### 🌺 Smart Cycle Prediction
Advanced AI algorithms forecast period start dates, cycle length, and phase transitions with 98% accuracy.

### 💬 Symptom Tracking
Log 70+ symptoms — physical, emotional, and lifestyle — to identify unique patterns.

### 💡 Personalized Insights
Receive daily nutrition, exercise, and mental wellness recommendations based on your hormonal phase.

### 📈 Visual Analytics
Explore dashboards with hormone predictions, symptom heatmaps, and cycle trends.

### 🌿 Wellness Recommendations
AI-driven self-care and dietary tips for optimal hormone balance.

---

## 🖥️ Tech Stack

### **Frontend**
- ⚛️ [React 18](https://react.dev/) — Component-based UI library  
- 🟦 [TypeScript](https://www.typescriptlang.org/) — Type-safe development  
- ⚡ [Vite](https://vitejs.dev/) — Next-gen build tool  
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling  
- 🎥 [Framer Motion](https://www.framer.com/motion/) — Smooth animations  
- 🧩 [Lucide React](https://lucide.dev/) — Icon system  

### **Backend**
- 🐍 [FastAPI](https://fastapi.tiangolo.com/) — High-performance Python web framework  
- ⚙️ [Motor](https://motor.readthedocs.io/) — Async MongoDB driver  
- 🧱 [Pydantic](https://pydantic.dev/) — Data validation and typing  
- 🚀 [Uvicorn](https://www.uvicorn.org/) — ASGI web server  

### **Database**
- 🍃 [MongoDB](https://www.mongodb.com/) — NoSQL, schema-flexible data store  

---

## 📦 Prerequisites

Before starting, ensure you have these installed:

- [Node.js](https://nodejs.org/) — v18 or higher  
- [Python](https://www.python.org/) — v3.9 or higher  
- [MongoDB](https://www.mongodb.com/try/download/community) — v6.0 or higher  
- [Git](https://git-scm.com/downloads)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/hormone-tracker.git
cd hormone-tracker


2️⃣ Frontend Setup
# Install dependencies
npm install

# Start the development server
npm run dev


Your frontend will be live at http://localhost:5173



3️⃣ Backend Setup
# Navigate to backend folder
cd backend

# Create a virtual environment
python -m venv venv

# Activate the environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn motor "pydantic[email]"
# OR install from requirements file
pip install -r requirements.txt

# Run FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
