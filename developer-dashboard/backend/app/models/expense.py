from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text, Float
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Expense(BaseModel):
    __tablename__ = "expenses"

    amount = Column(Float, nullable=False)
    date = Column(Date, nullable=False, index=True)
    category = Column(String, nullable=False)
    payment_method = Column(String, nullable=False)
    description = Column(String, nullable=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="expenses")
