# 🌱 Plant Disease Recognition using Deep Learning, Flask & React

An end-to-end AI/ML web application that detects plant diseases from leaf images using **EfficientNet (Transfer Learning)**, optimized with **TensorFlow Lite (FLOAT32)** and deployed using a modern full-stack architecture.

---

## 🔗 Live Application

🌐 **Frontend (React - Vercel)**  
https://plant-disease-web-application.vercel.app/

🔙 **Backend Repository (Flask API)**  
https://github.com/Ashish094562/Plant-Disease-Flask.git  

🎨 **Frontend Repository (React App)**  
https://github.com/Ashish094562/Plant-Disease-WebApplication.git  

🤗 **Model Hosted on Hugging Face Hub**

---

## 🚀 Project Highlights

- 🌿 CNN-based image classification for **39 plant disease & healthy classes**
- 🎯 Achieved **~99.1% validation accuracy**
- ⚡ Low-latency inference (~43 ms mean, ~78 ms P95) on CPU
- 🧠 Transfer Learning with EfficientNet
- 📦 Optimized using TensorFlow Lite (FLOAT32)
- 🔗 REST API built using Flask
- 🎨 Modern responsive UI built with React
- ☁ Production deployment using Render (Backend) & Vercel (Frontend)
- 🚜 Designed for CPU-based & edge-ready deployment
- 🔄 INT8 quantization planned for further optimization

---

## 🏗️ System Architecture

```
User (Browser)
↓
React Frontend (Vercel)
↓ POST Image
Flask Backend API (Render)
↓
TFLite Model (Hugging Face Hub)
↓
Prediction JSON Response
↓
Frontend Displays Result

```


---

## 🛠️ Tech Stack

### 👨‍💻 Programming
- Python
- JavaScript

### 🤖 Machine Learning
- TensorFlow
- Keras
- TensorFlow Lite (FLOAT32)
- Transfer Learning (EfficientNet)

### 🌐 Backend
- Flask
- Flask-CORS
- Gunicorn

### 🎨 Frontend
- React.js
- CSS3

### ☁ Deployment
- Backend: Render  
- Frontend: Vercel  
- Model Hosting: Hugging Face Hub  
- Version Control: GitHub  

---

## 🧠 Model Details

- **Model Type:** Convolutional Neural Network (CNN)
- **Backbone:** EfficientNet (Transfer Learning)
- **Number of Classes:** 39
- **Input Size:** 160 × 160 × 3
- **Model Format:** TFLite FLOAT32

### 📈 Performance Metrics

| Metric | Value |
|--------|-------|
| Accuracy | ~99.1% |
| Precision (macro) | ~0.989 |
| Recall (macro) | ~0.989 |
| F1-score (macro) | ~0.991 |
| Mean Latency | ~43 ms (CPU) |
| P95 Latency | ~78 ms (CPU) |

---

## 📂 Project Structure

### 🔙 Backend (Flask API)

```
Plant-Disease-Flask/
├── app.py
├── model_loader.py
├── inference.py
├── requirements.txt
├── Procfile
└── README.md
```


---

### 🎨 Frontend (React App)

```
Plant-Disease-WebApplication/
├── public/
├── src/
├── package.json
├── package-lock.json
└── README.md
```


---

## ▶️ How to Run Locally

### 🔹 Backend (Flask)

```bash
git clone https://github.com/Ashish094562/Plant-Disease-Flask.git
cd Plant-Disease-Flask

python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt
python app.py
```

---
## Runs on:

```
http://localhost:5000
```

----

## 🔹 Frontend (React)

```
git clone https://github.com/Ashish094562/Plant-Disease-WebApplication.git
cd Plant-Disease-WebApplication

npm install
npm start
```

---

## Runs on:

```
http://localhost:3000
```

----
## 🌐 Deployment
----
🔙 Backend Deployment

Hosted on Render

Start Command:
```
gunicorn app:app
```
---

## 🎨 Frontend Deployment

Hosted on Vercel

Automatic CI/CD from GitHub
---

## 🤗 Model Hosting
---
Stored and served from Hugging Face Hub

Downloaded dynamically by backend

---

## 📌 Use Cases

Smart Agriculture Systems

Automated Crop Disease Detection

Farmer-Friendly Diagnostic Tool

AI-powered Agritech Applications

Edge & Low-resource ML Deployment

---
## Future Improvements

INT8 Quantization for smaller model size

Mobile App Integration

Batch image prediction

---

## 👨‍💻 Author

Ashish Singh
Final Year B.Tech
Artificial Intelligence & Machine Learning

----
