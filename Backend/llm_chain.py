import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain.chains import ConversationChain

load_dotenv()

# Gemini LLM

llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    temperature=0.7
)

# Memory buffer
memory = ConversationBufferMemory()

# Custom prompt template
template = """
You are an AI study assistant helping competitive exam students (GATE, UPSC, JEE, CAT).

Detected emotional state: {emotion}

Adapt your tone accordingly:
- If Frustrated → Be supportive and simplify.
- If Confused → Provide structured explanation with example.
- If Confident → Provide deeper insight or challenge.
- If Anxious → Reassure and simplify.
- If Happy -> Provide motivation and support.
- If Sad -> Encourage and cheer up.
- If Relaxed -> Encourage and cheer up.

Conversation history:
{history}

Student: {input}
Assistant:
"""

prompt = PromptTemplate(
    input_variables=["history", "input", "emotion"],
    template=template
)

conversation = ConversationChain(
    llm=llm,
    memory=memory,
    prompt=prompt,
    verbose=False
)

def generate_response(emotion, message):
   return conversation.predict(input=message, emotion=emotion)
