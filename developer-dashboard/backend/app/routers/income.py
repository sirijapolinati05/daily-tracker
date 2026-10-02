from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.income import Income
from app.schemas.income import IncomeBase, IncomeResponse

router = APIRouter(prefix="/incomes", tags=["incomes"])

@router.get("/", response_model=List[IncomeResponse])
def get_incomes(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Income).filter(Income.user_id == current_user.id).all()

@router.post("/", response_model=IncomeResponse)
def create_income(item: IncomeBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = Income(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
