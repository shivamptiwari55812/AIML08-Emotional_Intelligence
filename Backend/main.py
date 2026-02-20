from flask import Flask,render_template,request,jsonify
# from sklearn.feature_extraction.text import TfidfVectorizer
from llm_chain import generate_response
from flask_cors import CORS
from workflow import callLLM
app = Flask(__name__)


CORS(app)

def predict_emotion(message):
    return "happy"



@app.route("/chat",methods=["POST"])
def chat():
    try:
      data = request.json
      print(data)
      message = data["message"]

      emotion = predict_emotion(message)

    #   print("shivam")
      prompt = f"""
You are an AI study assistant helping Indian competitive exam students preparing for GATE, UPSC, JEE, and CAT.

The detected emotional state of the student is: {emotion}

Adapt your response style based on the emotion:

- If Frustrated:
  Be supportive, calm, and break the topic into small simple steps.

- If Confused:
  Give a structured explanation with a simple example.

- If Confident:
  Provide a deeper explanation or a challenge question.

- If Anxious:
  Reassure briefly and simplify the explanation.

- If Happy:
  Maintain positive energy and reinforce learning.

- If Sad:
  Encourage gently and motivate toward progress.

Rules:
- Provide academic guidance only.
- Do NOT provide medical or psychological advice.
- Keep response clear and structured.
- Use bullet points when helpful.
- Be concise but helpful.

Student message:
"{message}"

Now generate the best possible response.
"""
    #   print("Shivam2")
      response = callLLM(prompt)
    #   print("shivam3")
      return jsonify({"status":200,"data":response})
      
      
    except Exception as e:
     print("ERROR OCCURRED:", str(e))
     return jsonify({"status":400,"message":str(e)})

    

if __name__ == "__main__":
    app.run(debug=True)