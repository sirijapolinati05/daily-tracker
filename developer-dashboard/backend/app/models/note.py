from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Note(BaseModel):
    __tablename__ = "notes"

    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    tags = Column(String, nullable=True) # Comma separated tags

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="notes")
