from pydantic import BaseModel
from typing import Optional
class NoteBase(BaseModel):
    title: str
    content: str
    tags: Optional[str] = None
class NoteResponse(NoteBase):
    id: int
    class Config:
        orm_mode = True
