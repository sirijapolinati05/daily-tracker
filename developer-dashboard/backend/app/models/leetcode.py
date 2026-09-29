from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class LeetCodeProblem(BaseModel):
    __tablename__ = "leetcode_problems"

    name = Column(String, nullable=False)
    url = Column(String, nullable=True)
    difficulty = Column(String, nullable=False) # Easy, Medium, Hard
    topic = Column(String, nullable=False)
    language = Column(String, nullable=False)
    solved_date = Column(Date, nullable=False)
    solved_status = Column(Boolean, default=True) # Did I solve it myself?
    reference_used = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    time_complexity = Column(String, nullable=True)
    space_complexity = Column(String, nullable=True)
    needs_revisit = Column(Boolean, default=False)
    confidence = Column(Integer, nullable=True) # e.g. 1-5

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="leetcode_problems")
