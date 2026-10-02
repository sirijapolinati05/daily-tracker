from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Job(BaseModel):
    __tablename__ = "jobs"
    company = Column(String, nullable=False)
    role = Column(String, nullable=False)
    status = Column(String, nullable=False, default="Applied")
    date_applied = Column(Date, nullable=False)
    notes = Column(Text, nullable=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="jobs")
