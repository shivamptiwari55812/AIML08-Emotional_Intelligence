from flask import Flask,request,jsonify
from flask_cors import CORS
import pickle
import pandas as pd
from workflow import callLLM

app = Flask(__name__)

CORS(app)

model = pickle.load(open("../ML/pkl/emotion_model.pkl", "rb"))
vectorizer = pickle.load(open("../ML/pkl/vectorizer.pkl", "rb"))


@app.route("/chat",methods=["POST"])
def chat():
    try:
        data = request.json
        print(data)
        message = data["message"]

        emotion = model.predict(vectorizer.transform([message]))

        response = callLLM(message)

        return jsonify({"status":200,"data":response})
      
      
    except Exception as e:
     print("ERROR OCCURRED:", str(e))
     return jsonify({"status":400,"message":str(e)})

    

if __name__ == "__main__":
    app.run(debug=True)