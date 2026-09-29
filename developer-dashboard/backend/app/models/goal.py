from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Goal(BaseModel):
    __tablename__ = "goals"

    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    goal_type = Column(String, nullable=False) # Daily, Weekly, Monthly, Custom
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    target = Column(Integer, nullable=False)
    current_progress = Column(Integer, default=0)
    status = Column(String, nullable=False, default="In Progress")

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="goals")
