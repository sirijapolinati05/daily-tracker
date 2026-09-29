"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated")
    if (isAuth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/login")
    }
  }, [router])

  // Don't render children until we've confirmed authentication to prevent flashing protected content
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground animate-pulse">Loading dashboard...</div>
      </div>
    )
  }

  return <>{children}</>
}
