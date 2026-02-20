# 📘 Emotion-Aware Adaptive Study Assistant

An AI-powered study assistant designed for competitive exams like **GATE, UPSC, JEE, and CAT**.  

It detects the **student’s emotion** and adapts responses to improve learning efficiency.

---

## 🚀 Features

- 🧠 Emotion Detection  
  Detects:
  - Frustrated
  - Confused
  - Anxious
  - Overwhelmed
  - Demotivated
  - Confident
  - Curious
  - Neutral

- 🎯 Adaptive Responses  
  - Step-by-step explanations  
  - Encouragement when needed  
  - Simplified learning for difficult topics  

- 🔄 Context-Aware Chat  
  - Maintains conversation history  
  - Handles follow-up queries  

- 🧾 Structured Output (JSON)

```json
{
  "emotion": "Confused",
  "response": "Let’s break this down step-by-step..."
}
```
---

🛠️ Tech Stack
- Python
- Flask
- LangChain
- Google Gemini (gemini-2.5-flash)
- Pydantic
- react

---

## 📂 Project Structure
```
project/
│── Backend
│── frontend
│── ML
```
- `Backend`: contains the python code for backend server
- `Frontend`: contains the react code for frontend server
- `ML`: Code of model training

---
## ⚙️ Setup Instructions
### Prerequisite
make sure you have uv installed in your pc

to install uv
```
pip install uv
```

Another prerequisite
- Python
- node

### Clone Repository

```bash
git clone https://github.com/shivamptiwari55812/AIML08-Emotional_Intelligence.git
cd AIML08-Emotional_Intelligence
```
### Backend Set up
1. go into Backend folder

    ```bash
    cd Backend
    ```
2. Install Dependencies

    ```bash
    uv sync
    ```

3. Setup Environment Variables

    Create a .env file:
    ```.env
    GOOGLE_API_KEY=your_api_key_here
    ```
4. Run the Server
    ```bash
    uv run src/main.py
    ```
### Frontend Set up
1. go into Frontend folder

    ```bash
    cd Frontend
    ```
2. Install Dependencies

    ```bash
    npm i
    ```

3. Run the Server
    ```bash
    npm run dev
    ```
---

## 📡 API Usage
Endpoint
```
POST /chat
```

Request Body
```json 
{
  "message": "what is stack?"
}
```

Response
```json
{
  "emotion": "Curious",
  "response": "A stack is a data structure that follows LIFO..."
}
```