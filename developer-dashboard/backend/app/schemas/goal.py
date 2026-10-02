from pydantic import BaseModel
from typing import Optional
from datetime import date
class GoalBase(BaseModel):
    name: str
    description: Optional[str] = None
    goal_type: str
    start_date: date
    end_date: date
    target: int
    current_progress: int = 0
    status: str = "In Progress"
class GoalResponse(GoalBase):
    id: int
    class Config:
        orm_mode = True
