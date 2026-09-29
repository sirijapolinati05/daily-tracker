from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.config.database import get_db
from app.models.leetcode import LeetCodeProblem
from app.models.user import User
from app.schemas.leetcode import LeetCodeProblemCreate, LeetCodeProblemUpdate, LeetCodeProblemResponse
from app.utils.deps import get_current_user

router = APIRouter(prefix="/leetcode", tags=["leetcode"])

@router.get("", response_model=List[LeetCodeProblemResponse])
def get_problems(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    problems = db.query(LeetCodeProblem).filter(LeetCodeProblem.user_id == current_user.id).offset(skip).limit(limit).all()
    return problems

@router.post("", response_model=LeetCodeProblemResponse, status_code=status.HTTP_201_CREATED)
def create_problem(problem: LeetCodeProblemCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_problem = LeetCodeProblem(**problem.model_dump(), user_id=current_user.id)
    db.add(new_problem)
    db.commit()
    db.refresh(new_problem)
    return new_problem

@router.get("/{problem_id}", response_model=LeetCodeProblemResponse)
def get_problem(problem_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    problem = db.query(LeetCodeProblem).filter(LeetCodeProblem.id == problem_id, LeetCodeProblem.user_id == current_user.id).first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    return problem

@router.put("/{problem_id}", response_model=LeetCodeProblemResponse)
def update_problem(problem_id: int, problem_update: LeetCodeProblemUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    problem = db.query(LeetCodeProblem).filter(LeetCodeProblem.id == problem_id, LeetCodeProblem.user_id == current_user.id).first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    
    update_data = problem_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(problem, key, value)
        
    db.commit()
    db.refresh(problem)
    return problem

@router.delete("/{problem_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_problem(problem_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    problem = db.query(LeetCodeProblem).filter(LeetCodeProblem.id == problem_id, LeetCodeProblem.user_id == current_user.id).first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    
    db.delete(problem)
    db.commit()
    return None
