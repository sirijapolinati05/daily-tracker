from pydantic import BaseModel, HttpUrl
from typing import Optional
from datetime import date

class LeetCodeProblemBase(BaseModel):
    name: str
    url: Optional[str] = None
    difficulty: str
    topic: str
    language: str
    solved_date: date
    solved_status: bool = True
    reference_used: Optional[str] = None
    notes: Optional[str] = None
    time_complexity: Optional[str] = None
    space_complexity: Optional[str] = None
    needs_revisit: bool = False
    confidence: Optional[int] = None

class LeetCodeProblemCreate(LeetCodeProblemBase):
    pass

class LeetCodeProblemUpdate(BaseModel):
    name: Optional[str] = None
    url: Optional[str] = None
    difficulty: Optional[str] = None
    topic: Optional[str] = None
    language: Optional[str] = None
    solved_date: Optional[date] = None
    solved_status: Optional[bool] = None
    reference_used: Optional[str] = None
    notes: Optional[str] = None
    time_complexity: Optional[str] = None
    space_complexity: Optional[str] = None
    needs_revisit: Optional[bool] = None
    confidence: Optional[int] = None

class LeetCodeProblemResponse(LeetCodeProblemBase):
    id: int
    user_id: int

    model_config = {"from_attributes": True}
