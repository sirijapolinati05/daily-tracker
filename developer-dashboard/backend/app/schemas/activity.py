from pydantic import BaseModel
from typing import Optional
from datetime import date, time
class ActivityBase(BaseModel):
    title: str
    description: Optional[str] = None
    category: str
    start_time: Optional[time] = None
    end_time: Optional[time] = None
    duration: Optional[float] = None
    status: str = "Completed"
    notes: Optional[str] = None
    date: date
class ActivityResponse(ActivityBase):
    id: int
    class Config:
        orm_mode = True
