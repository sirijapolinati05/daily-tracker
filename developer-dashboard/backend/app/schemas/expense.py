from pydantic import BaseModel
from typing import Optional
from datetime import date
class ExpenseBase(BaseModel):
    amount: float
    date: date
    category: str
    payment_method: str
    description: Optional[str] = None
class ExpenseResponse(ExpenseBase):
    id: int
    class Config:
        orm_mode = True
