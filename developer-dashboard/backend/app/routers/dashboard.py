from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.schemas.dashboard import DashboardStats
from app.dependencies.auth import get_current_user
from app.models.user import User

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

@router.get("/stats", response_model=DashboardStats)
def get_dashboard_stats(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # In a real app, query the database models (LeetCodeProblem, DailyActivity, Goal, Expense)
    # For now, returning mock data that matches the frontend's hardcoded data structure
    
    return {
        "leetcode_solved": 124,
        "leetcode_diff": 4,
        "productivity_hours": 6.5,
        "productivity_diff": 1.2,
        "goals_completed": 3,
        "goals_total": 5,
        "monthly_expenses": 1245.0,
        "budget_remaining": 255.0,
        "activity_data": [
            {"name": "Wed", "solved": 7},
            {"name": "Thu", "solved": 11},
            {"name": "Fri", "solved": 4},
            {"name": "Sat", "solved": 9},
            {"name": "Sun", "solved": 8},
            {"name": "Mon", "solved": 13},
            {"name": "Tue", "solved": 18}
        ],
        "sparkline_leetcode": [
            {"value": 10}, {"value": 15}, {"value": 8}, {"value": 12}, {"value": 20}, {"value": 15}, {"value": 25}
        ],
        "sparkline_productivity": [
            {"value": 5}, {"value": 10}, {"value": 15}, {"value": 12}, {"value": 18}, {"value": 25}, {"value": 20}
        ],
        "recent_leetcode": [
            {
                "id": 1,
                "name": "Two Sum",
                "difficulty": "Easy",
                "topic": "Array, Hash Table",
                "solved_date": "Today, 10:24 AM",
                "status": "Solved"
            },
            {
                "id": 2,
                "name": "LRU Cache",
                "difficulty": "Medium",
                "topic": "Linked List, Hash Table",
                "solved_date": "Yesterday, 08:17 PM",
                "status": "Solved"
            },
            {
                "id": 3,
                "name": "Group Anagrams",
                "difficulty": "Medium",
                "topic": "String, Hash Table",
                "solved_date": "Sep 28, 2026",
                "status": "Not Solved"
            }
        ]
    }
