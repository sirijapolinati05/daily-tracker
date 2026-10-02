from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.expense import Expense
from app.schemas.expense import ExpenseBase, ExpenseResponse

router = APIRouter(prefix="/expenses", tags=["expenses"])

@router.get("/", response_model=List[ExpenseResponse])
def get_expenses(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Expense).filter(Expense.user_id == current_user.id).all()

@router.post("/", response_model=ExpenseResponse)
def create_expense(item: ExpenseBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = Expense(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
