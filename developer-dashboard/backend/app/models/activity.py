from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text, Float, Time
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class DailyActivity(BaseModel):
    __tablename__ = "daily_activities"

    date = Column(Date, nullable=False, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    category = Column(String, nullable=False)
    start_time = Column(Time, nullable=True)
    end_time = Column(Time, nullable=True)
    duration = Column(Float, nullable=True) # duration in hours
    status = Column(String, nullable=False, default="Completed")
    notes = Column(Text, nullable=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="daily_activities")
