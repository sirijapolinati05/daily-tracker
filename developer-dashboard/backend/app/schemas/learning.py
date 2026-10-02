from pydantic import BaseModel
from typing import Optional
from datetime import date
class LearningBase(BaseModel):
    topic: str
    technology: str
    resource_name: Optional[str] = None
    resource_url: Optional[str] = None
    notes: Optional[str] = None
    date_started: date
    date_completed: Optional[date] = None
    status: str = "Not Started"
    progress: int = 0
class LearningResponse(LearningBase):
    id: int
    class Config:
        orm_mode = True
