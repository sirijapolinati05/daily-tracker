import os

# 1. Create Job Model
with open("app/models/job.py", "w") as f:
    f.write('''from sqlalchemy import Column, String, Integer, Date, ForeignKey, Text
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
''')

# Update User Model
with open("app/models/user.py", "r") as f:
    user_code = f.read()

if "jobs = relationship" not in user_code:
    user_code = user_code.replace('notes = relationship("Note", back_populates="user")', 'notes = relationship("Note", back_populates="user")\n    jobs = relationship("Job", back_populates="user")')
    with open("app/models/user.py", "w") as f:
        f.write(user_code)

# 2. Update Schemas
schemas = {
    "activity": '''from pydantic import BaseModel\nfrom typing import Optional\nfrom datetime import date, time\nclass ActivityBase(BaseModel):\n    title: str\n    description: Optional[str] = None\n    category: str\n    start_time: Optional[time] = None\n    end_time: Optional[time] = None\n    duration: Optional[float] = None\n    status: str = "Completed"\n    notes: Optional[str] = None\n    date: date\nclass ActivityResponse(ActivityBase):\n    id: int\n    class Config:\n        orm_mode = True\n''',
    "goal": '''from pydantic import BaseModel\nfrom typing import Optional\nfrom datetime import date\nclass GoalBase(BaseModel):\n    name: str\n    description: Optional[str] = None\n    goal_type: str\n    start_date: date\n    end_date: date\n    target: int\n    current_progress: int = 0\n    status: str = "In Progress"\nclass GoalResponse(GoalBase):\n    id: int\n    class Config:\n        orm_mode = True\n''',
    "learning": '''from pydantic import BaseModel\nfrom typing import Optional\nfrom datetime import date\nclass LearningBase(BaseModel):\n    topic: str\n    technology: str\n    resource_name: Optional[str] = None\n    resource_url: Optional[str] = None\n    notes: Optional[str] = None\n    date_started: date\n    date_completed: Optional[date] = None\n    status: str = "Not Started"\n    progress: int = 0\nclass LearningResponse(LearningBase):\n    id: int\n    class Config:\n        orm_mode = True\n''',
    "expense": '''from pydantic import BaseModel\nfrom typing import Optional\nfrom datetime import date\nclass ExpenseBase(BaseModel):\n    amount: float\n    date: date\n    category: str\n    payment_method: str\n    description: Optional[str] = None\nclass ExpenseResponse(ExpenseBase):\n    id: int\n    class Config:\n        orm_mode = True\n''',
    "job": '''from pydantic import BaseModel\nfrom typing import Optional\nfrom datetime import date\nclass JobBase(BaseModel):\n    company: str\n    role: str\n    status: str = "Applied"\n    date_applied: date\n    notes: Optional[str] = None\nclass JobResponse(JobBase):\n    id: int\n    class Config:\n        orm_mode = True\n''',
    "note": '''from pydantic import BaseModel\nfrom typing import Optional\nclass NoteBase(BaseModel):\n    title: str\n    content: str\n    tags: Optional[str] = None\nclass NoteResponse(NoteBase):\n    id: int\n    class Config:\n        orm_mode = True\n'''
}

for name, content in schemas.items():
    with open(f"app/schemas/{name}.py", "w") as f:
        f.write(content)

# 3. Update Routers
models_map = {
    "activity": ("DailyActivity", "Activity"),
    "goal": ("Goal", "Goal"),
    "learning": ("LearningItem", "Learning"),
    "expense": ("Expense", "Expense"),
    "job": ("Job", "Job"),
    "note": ("Note", "Note")
}

for name, (model_name, schema_prefix) in models_map.items():
    router_code = f'''from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.{name if name != "learning" else "learning"} import {model_name}
from app.schemas.{name} import {schema_prefix}Base, {schema_prefix}Response

router = APIRouter(prefix="/{name}s", tags=["{name}s"])

@router.get("/", response_model=List[{schema_prefix}Response])
def get_{name}s(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query({model_name}).filter({model_name}.user_id == current_user.id).all()

@router.post("/", response_model={schema_prefix}Response)
def create_{name}(item: {schema_prefix}Base, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    db_item = {model_name}(**item.dict(), user_id=current_user.id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
'''
    with open(f"app/routers/{name}.py", "w") as f:
        f.write(router_code)

print("Backend APIs and schemas have been updated to use real database models!")
