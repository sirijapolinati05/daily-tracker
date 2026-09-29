from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class LearningItem(BaseModel):
    __tablename__ = "learning_items"

    topic = Column(String, nullable=False)
    technology = Column(String, nullable=False)
    resource_name = Column(String, nullable=True)
    resource_url = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    date_started = Column(Date, nullable=False)
    date_completed = Column(Date, nullable=True)
    status = Column(String, nullable=False, default="Not Started")
    progress = Column(Integer, default=0) # percentage 0-100

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="learning_items")
