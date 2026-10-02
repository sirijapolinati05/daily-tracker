import os

routers_dir = "app/routers"
schemas_dir = "app/schemas"

models = ["activity", "goal", "learning", "expense", "job", "note"]

for model in models:
    # Create schema
    schema_path = os.path.join(schemas_dir, f"{model}.py")
    if not os.path.exists(schema_path):
        with open(schema_path, "w") as f:
            f.write(f"from pydantic import BaseModel\nfrom typing import List, Optional\n\nclass {model.capitalize()}Base(BaseModel):\n    name: str = 'mock'\n\nclass {model.capitalize()}Response({model.capitalize()}Base):\n    id: int\n")

    # Create router
    router_path = os.path.join(routers_dir, f"{model}.py")
    if not os.path.exists(router_path):
        with open(router_path, "w") as f:
            f.write(f'''from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User

router = APIRouter(prefix="/{model}s", tags=["{model}s"])

@router.get("/")
def get_{model}s(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return []
''')

# Update main.py
main_path = "app/main.py"
with open(main_path, "r") as f:
    content = f.read()

for model in models:
    if f"app.routers import" in content and f"{model}" not in content:
        content = content.replace("from app.routers import auth, dashboard", f"from app.routers import auth, dashboard, {model}")
        content = content.replace(f"app.include_router(dashboard.router, prefix=settings.API_V1_STR)", f"app.include_router(dashboard.router, prefix=settings.API_V1_STR)\napp.include_router({model}.router, prefix=settings.API_V1_STR)")

with open(main_path, "w") as f:
    f.write(content)

print("Scaffolded!")
