from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.learning import LearningItem
from app.schemas.learning import LearningBase, LearningResponse

router = APIRouter(prefix="/learnings", tags=["learnings"])

@router.get("/", response_model=List[LearningResponse])
def get_learnings(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(LearningItem).filter(LearningItem.user_id == current_user.id).all()

@router.post("/", response_model=LearningResponse)
def create_learning(item: LearningBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = LearningItem(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
