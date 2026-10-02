from pydantic import BaseModel
from typing import Optional
from datetime import date

class IncomeBase(BaseModel):
    amount: float
    date: date
    source: str
    description: Optional[str] = None

class IncomeResponse(IncomeBase):
    id: int

    class Config:
        orm_mode = True
