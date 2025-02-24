from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# CORS設定（Next.js との通信許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # Next.js のURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DJANGO_API_URL = "http://127.0.0.1:8000/api/django"

@app.get("/api/transactions/")  # ✅ FastAPI のエンドポイントを定義
async def get_transactions():
    response = requests.get(f"{DJANGO_API_URL}/transactions/")
    return response.json()
