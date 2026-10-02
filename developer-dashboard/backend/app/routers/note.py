from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.note import Note
from app.schemas.note import NoteBase, NoteResponse

router = APIRouter(prefix="/notes", tags=["notes"])

@router.get("/", response_model=List[NoteResponse])
def get_notes(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Note).filter(Note.user_id == current_user.id).all()

@router.post("/", response_model=NoteResponse)
def create_note(item: NoteBase, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = Note(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
