from pydantic import BaseModel
from typing import Optional
from datetime import date
class JobBase(BaseModel):
    company: str
    role: str
    status: str = "Applied"
    date_applied: date
    notes: Optional[str] = None
class JobResponse(JobBase):
    id: int
    class Config:
        orm_mode = True
