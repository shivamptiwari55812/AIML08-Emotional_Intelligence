from google import genai
import os
from dotenv import load_dotenv

load_dotenv()
import time
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

def generate_response(prompt):
    start = time.time()
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )
    end = time.time()
    print(response.text)
    return response.text