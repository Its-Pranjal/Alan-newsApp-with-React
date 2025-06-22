# 📰 Personalized News & Blog Feed App with Alan AI (MERN Stack)

## 📌 Overview

This project is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Alan AI** for voice interaction. It allows users to:

- Create a profile and input their interests
- Receive personalized news and blog content
- Track search history and activity
- Get niche and relevant content recommendations
- Interact with the app using voice commands via Alan AI

## 🚀 Features

- 🔐 User Authentication (Sign Up / Login)
- 🧠 Interest-based content personalization
- 📚 Blog and news aggregation using external APIs
- 🗂️ Archive and reading list functionality
- 🔍 Search history tracking and analytics
- 🎙️ Voice control with Alan AI
- 📊 AI-powered recommendations and feed optimization

## 🛠️ Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **AI Integration**: Alan AI (Voice Assistant)
- **Deployment**: Netlify (Frontend), Heroku (Backend)
- **External APIs**: News API, Summarization API

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Set Up Environment Variables

Create a `.env` file in both `client` and `server` directories:

#### Server `.env`

```env
MONGO_URI=your_mongodb_connection_string
NEWS_API_KEY=your_news_api_key
SUMMARIZATION_API_KEY=your_summarization_api_key
JWT_SECRET=your_jwt_secret
```

#### Client `.env`

```env
REACT_APP_ALAN_KEY=your_alan_ai_key
```

### 3. Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 4. Run the Application

```bash
# Backend
npm start

# Frontend
npm start
```

## 🧠 Alan AI Integration

Alan AI enables voice control for the app. You can say things like:

- "Show me tech news"
- "Add this article to my reading list"
- "Search for climate blogs"

Refer to [Alan AI documentation](https://alan.app/) for custom voice command setup.

## 📊 Personalization Logic

- User interests are stored in MongoDB
- Search history is tracked and analyzed
- Feed is dynamically generated using:
  - Keyword matching
  - Category filtering
  - AI-based recommendation engine

## 🧪 Testing

Use Postman or built-in test scripts to verify:

- User registration/login
- Interest submission
- Feed generation
- Search tracking

## 📌 Future Enhancements

- 🧠 Machine learning-based feed optimization
- 📈 User analytics dashboard
- 🌐 Multi-language support
- 📱 Mobile app version

## 🙌 Contributors

- Pranjal Chaurasiya, Raj Kushwaha, Sonu Yadav, David Anthony, Prince

