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
  Pencil
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
          <Code2 className="h-8 w-8 text-[#D4AF37]" />
          <div className="flex flex-col">
            <span className="font-bold text-2xl tracking-tight text-white leading-tight">DevDash</span>
            <span className="text-[10px] tracking-wider text-gray-400 uppercase">Code • Learn • Grow</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 pt-4">
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title} className="pt-0 pb-2">
            <SidebarGroupLabel className="text-gray-400 text-[11px] font-semibold px-2 mb-1">{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url || (item.url !== "/" && pathname?.startsWith(item.url))
                  const activeClass = isActive 
                    ? "bg-gradient-to-r from-[#163D63]/40 to-transparent text-white shadow-[inset_2px_0_0_#D4AF37] border border-[#163D63] rounded-xl"
                    : "text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors border border-transparent"
                  
                  const iconClass = isActive
                    ? "text-black"
                    : "text-gray-400"
                    
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={isActive} className={`h-10 w-full px-3 mb-0.5 ${activeClass}`} render={<Link to={item.url} />}>
                        <div className={isActive ? "bg-gradient-to-br from-[#D4AF37] to-[#E5C76B] p-1.5 rounded-lg mr-2.5 shadow-sm border border-[#E5C76B]/50" : "mr-2.5"}>
                          <item.icon className={`h-[18px] w-[18px] ${iconClass}`} />
                        </div>
                        <span className={`text-[14px] ${isActive ? "font-bold text-white" : "font-medium"}`}>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <div className="mt-auto p-6 flex flex-col gap-1">
        <div className="text-[#D4AF37] mb-1">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
        </div>
        <div className="text-white font-semibold text-sm">Stay Consistent</div>
        <div className="text-gray-400 text-xs">Small steps create big results 💛</div>
      </div>
    </Sidebar>
  )
}
