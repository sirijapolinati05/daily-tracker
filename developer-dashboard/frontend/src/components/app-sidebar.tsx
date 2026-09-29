"use client"

import * as React from "react"
import {
  BookOpen,
  Calendar,
  Code2,
  LayoutDashboard,
  LineChart,
  Settings,
  Target,
  Wallet,
  Pencil,
  Briefcase
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      ],
    },
    {
      title: "Coding",
      items: [
        { title: "LeetCode Tracker", url: "/leetcode", icon: Code2 },
        { title: "Coding Analytics", url: "/coding-analytics", icon: LineChart },
        { title: "Coding Calendar", url: "/coding-calendar", icon: Calendar },
      ],
    },
    {
      title: "Productivity",
      items: [
        { title: "Daily Work", url: "/daily-work", icon: Target },
        { title: "Goals", url: "/goals", icon: Target },
        { title: "Learning", url: "/learning", icon: BookOpen },
      ],
    },
    {
      title: "Finance",
      items: [
        { title: "Expenses", url: "/expenses", icon: Wallet },
        { title: "Expense Analytics", url: "/expense-analytics", icon: LineChart },
      ],
    },
    {
      title: "Career",
      items: [
        { title: "Jobs", url: "/jobs", icon: Briefcase },
      ],
    },
    {
      title: "Other",
      items: [
        { title: "Notes", url: "/notes", icon: Pencil },
        { title: "Settings", url: "/settings", icon: Settings },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-20 flex items-center justify-start px-6 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#E5C76B] p-2 rounded-[16px] shadow-lg shadow-[#D4AF37]/20">
            <Code2 className="h-6 w-6 text-[#0B1F3A] stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-white leading-tight font-sans">Dev<span className="text-[#D4AF37]">Dash</span></span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5">Code • Learn • Grow</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 pt-6">
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title} className="pt-0 pb-4">
            <SidebarGroupLabel className="text-gray-500 text-[10px] font-bold tracking-wider uppercase px-2 mb-2">{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url || (item.url !== "/" && pathname?.startsWith(item.url))
                  const activeClass = isActive 
                    ? "bg-gradient-to-r from-[#D4AF37]/15 to-transparent text-white font-bold relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:bg-[#D4AF37] before:rounded-r-full"
                    : "text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium"
                  
                  const iconClass = isActive
                    ? "text-[#0B1F3A]"
                    : "text-gray-400 group-hover:text-[#D4AF37] transition-colors"
                    
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={isActive} className={`h-11 w-full px-3 mb-1 rounded-[16px] overflow-hidden group ${activeClass}`} render={<Link to={item.url} />}>
                        <div className={isActive ? "bg-gradient-to-br from-[#D4AF37] to-[#f9df8a] p-1.5 rounded-[16px] mr-3 shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all" : "mr-3 p-1.5 rounded-[16px] bg-gray-800/40 group-hover:bg-gray-800 transition-all"}>
                          <item.icon className={`h-[18px] w-[18px] ${iconClass}`} />
                        </div>
                        <span className="text-[13.5px] tracking-wide">{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <div className="mt-auto p-5">
        <div className="bg-gradient-to-b from-[#163D63]/50 to-[#0B1F3A] border border-[#2a4a7f]/40 p-4 rounded-[16px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37]/10 blur-xl rounded-full"></div>
          <div className="bg-[#D4AF37]/10 p-2 rounded-full text-[#D4AF37] mb-2 border border-[#D4AF37]/20 shadow-inner">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
          </div>
          <div className="text-white font-bold text-[13px]">Stay Consistent</div>
          <div className="text-gray-400 text-[11px] mt-1 font-medium leading-relaxed">Small steps create big results 💛</div>
        </div>
      </div>
    </Sidebar>
  )
}
