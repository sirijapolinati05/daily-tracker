from pydantic import BaseModel
from typing import List

class ActivityDataPoint(BaseModel):
    name: str
    solved: int

class SparklineDataPoint(BaseModel):
    value: float

class RecentLeetCode(BaseModel):
    id: int
    name: str
    difficulty: str
    topic: str
    solved_date: str
    status: str

class DashboardStats(BaseModel):
    leetcode_solved: int
    leetcode_diff: int
    productivity_hours: float
    productivity_diff: float
    goals_completed: int
    goals_total: int
    monthly_expenses: float
    budget_remaining: float
    activity_data: List[ActivityDataPoint]
    sparkline_leetcode: List[SparklineDataPoint]
    sparkline_productivity: List[SparklineDataPoint]
    recent_leetcode: List[RecentLeetCode]
