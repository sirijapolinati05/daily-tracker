from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.activity import DailyActivity
from app.schemas.activity import ActivityBase, ActivityResponse

router = APIRouter(prefix="/activitys", tags=["activitys"])

@router.get("/", response_model=List[ActivityResponse])
def get_activitys(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(DailyActivity).filter(DailyActivity.user_id == current_user.id).all()

@router.post("/", response_model=ActivityResponse)
def create_activity(item: ActivityBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = DailyActivity(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
