from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.job import Job
from app.schemas.job import JobBase, JobResponse

router = APIRouter(prefix="/jobs", tags=["jobs"])

@router.get("/", response_model=List[JobResponse])
def get_jobs(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Job).filter(Job.user_id == current_user.id).all()

@router.post("/", response_model=JobResponse)
def create_job(item: JobBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = Job(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
