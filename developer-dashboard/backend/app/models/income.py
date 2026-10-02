from sqlalchemy import Column, String, Integer, Date, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Income(BaseModel):
    __tablename__ = "incomes"

    amount = Column(Float, nullable=False)
    date = Column(Date, nullable=False, index=True)
    source = Column(String, nullable=False)
    description = Column(String, nullable=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="incomes")
