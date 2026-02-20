from flask import Flask,render_template,request,jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from llm_chain import generate_response
app = Flask(__name__)


@app.route("/")
def login():
    return "Hey there"   


def predict_emotion(message):
    vector = vectorizer.transform([message])
    prediction = model.predict(vector)[0]
    return prediction

     

@app.route("/chat",methods=["POST"])
def chat():
    try:
      data = request.json
      message = data["message"]

      emotion = predict_emotion(message)

      response = generate_response(emotion, message)

      return jsonify({"status":200,"data":response})
      
      
    except Exception as e:
        return jsonify({"status":400,"message":"something went wrong"})
    
def response(response):
    return jsonify({"status":200,"data":response})

    

if __name__ == "__main__":
    app.run(debug=True)