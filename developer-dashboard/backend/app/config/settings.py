from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Developer Productivity Dashboard API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Postgres
    DATABASE_URL: str = "postgresql://postgres:sirija@localhost:5432/daily-tracker"
    
    # JWT
    JWT_SECRET_KEY: str = "supersecretkey_please_change_in_production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30 * 24 * 60 # 30 days
    
    # Optional CORS origins
    BACKEND_CORS_ORIGINS: list[str] = ["http://localhost:3000"]
    
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()
