import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Bell, Search } from "lucide-react"
import CodingAnalytics from "./pages/CodingAnalytics"
import CodingCalendar from "./pages/CodingCalendar"
import DailyWork from "./pages/DailyWork"
import Settings from "./pages/Settings"
import Goals from "./pages/Goals"
import Learning from "./pages/Learning"
import Expenses from "./pages/Expenses"
import ExpenseAnalytics from "./pages/ExpenseAnalytics"
import Notes from "./pages/Notes"
import bgImage from "@/assets/background.png"

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Future integration: Global search filter
    }
  }

  return (
    <SidebarProvider>
      <div 
        className="flex min-h-screen w-full bg-cover bg-fixed bg-right relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#FDFBF2]/85 backdrop-blur-[2px] z-0"></div>
        <div className="relative z-10 flex w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 z-50 flex h-16 items-center gap-4 bg-[#FDFBF2]/80 backdrop-blur-md px-6 shadow-sm border-b border-[#E5C76B]/20">
            <SidebarTrigger />
            <form onSubmit={handleSearch} className="flex items-center gap-3 text-sm text-gray-500 bg-[#F5F3EA] px-5 py-2 rounded-full flex-1 max-w-md shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] border border-transparent">
              <Search className="h-4 w-4 opacity-70 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-gray-700 placeholder-gray-400 w-full"
              />
            </form>
            <div className="ml-auto flex items-center gap-4">
              <button className="relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute 1 top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="h-8 w-8 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white font-medium text-xs">
                SP
              </div>
              <button className="text-sm font-medium text-gray-600 flex items-center gap-2 hover:text-[#0B1F3A]">
                Logout
              </button>
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

import Dashboard from "./pages/Dashboard"
import LeetCodeTracker from "./pages/LeetCodeTracker"

function Login() {
  return (
    <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">DevTrack</h1>
        <p className="text-gray-400 mb-8">Track your code. Build your skills. Improve every day.</p>
        <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-md font-medium">
          Sign In
        </button>
      </div>
    </div>
  )
}


function PlaceholderPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[60vh] text-center">
      <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 max-w-lg">
        <h2 className="text-2xl font-bold text-[#0B1F3A] mb-3">{title}</h2>
        <p className="text-gray-500 mb-6">{description}</p>
        <div className="animate-pulse flex space-x-4 justify-center">
          <div className="h-2 w-2 bg-[#D4AF37] rounded-full"></div>
          <div className="h-2 w-2 bg-[#D4AF37] rounded-full"></div>
          <div className="h-2 w-2 bg-[#D4AF37] rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  // Simple auth mock
  const isAuthenticated = true

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        
        <Route path="/dashboard" element={
          isAuthenticated ? (
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          ) : <Navigate to="/login" />
        } />

        <Route path="/leetcode" element={
          isAuthenticated ? <DashboardLayout><LeetCodeTracker /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/coding-analytics" element={
          isAuthenticated ? <DashboardLayout><CodingAnalytics /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/coding-calendar" element={
          isAuthenticated ? <DashboardLayout><CodingCalendar /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/daily-work" element={
          isAuthenticated ? <DashboardLayout><DailyWork /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/goals" element={
          isAuthenticated ? <DashboardLayout><Goals /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/learning" element={
          isAuthenticated ? <DashboardLayout><Learning /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/expenses" element={
          isAuthenticated ? <DashboardLayout><Expenses /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/expense-analytics" element={
          isAuthenticated ? <DashboardLayout><ExpenseAnalytics /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/notes" element={
          isAuthenticated ? <DashboardLayout><Notes /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        <Route path="/settings" element={
          isAuthenticated ? <DashboardLayout><Settings /></DashboardLayout> : <Navigate to="/login" />
        } />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  )
}
