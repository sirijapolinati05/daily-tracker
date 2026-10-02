from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.goal import Goal
from app.schemas.goal import GoalBase, GoalResponse

router = APIRouter(prefix="/goals", tags=["goals"])

@router.get("/", response_model=List[GoalResponse])
def get_goals(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Goal).filter(Goal.user_id == current_user.id).all()

@router.post("/", response_model=GoalResponse)
def create_goal(item: GoalBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = Goal(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
