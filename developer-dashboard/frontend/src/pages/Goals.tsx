import React, { useState } from "react"
import { Target, CheckCircle2, Clock, BarChart2, Plus, ChevronDown, List, LayoutGrid, MoreHorizontal, Calendar, Tag, Flag, Code2, Database, BookOpen, GraduationCap, ArrowRight, PieChart as PieChartIcon, X } from "lucide-react"
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const sparklineData1 = [{v: 2}, {v: 3}, {v: 2}, {v: 5}, {v: 4}, {v: 6}, {v: 8}]
const sparklineData2 = [{v: 2}, {v: 4}, {v: 3}, {v: 5}, {v: 5}, {v: 7}]
const sparklineData3 = [{v: 4}, {v: 2}, {v: 4}, {v: 3}, {v: 2}, {v: 1}]
const sparklineData4 = [{v: 4}, {v: 3}, {v: 5}, {v: 4}, {v: 6}, {v: 5}, {v: 7}]

const progressOverviewData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 35 },
  { name: 'Jun', value: 60 },
  { name: 'Jul', value: 55 },
  { name: 'Aug', value: 70 },
  { name: 'Sep', value: 65 },
  { name: 'Oct', value: 90 },
  { name: 'Nov', value: 85 },
  { name: 'Dec', value: 100 },
]

const categoryData = [
  { name: 'LeetCode', value: 1, color: '#3b82f6', percent: '1 (25%)' },
  { name: 'Data/DB', value: 1, color: '#a855f7', percent: '1 (25%)' },
  { name: 'Projects', value: 1, color: '#22c55e', percent: '1 (25%)' },
  { name: 'Learning', value: 1, color: '#f97316', percent: '1 (25%)' },
]

const goals = [
  {
    title: "Complete 150 LeetCode Problems",
    subtitle: "Improve problem solving and DSA skills",
    prog: 127,
    target: 150,
    pct: 84.6,
    unit: "",
    color: "blue",
    icon: <Code2 className="h-6 w-6" />,
    dueDate: "Dec 31, 2026",
    category: "LeetCode",
    priority: "Medium Priority",
    priorityColor: "text-[#D4AF37]"
  },
  {
    title: "Master SQL",
    subtitle: "Advanced queries and indexing",
    prog: 65,
    target: 100,
    pct: 65,
    unit: "",
    color: "purple",
    icon: <Database className="h-6 w-6" />,
    dueDate: "Nov 30, 2026",
    category: "SQL",
    priority: "Medium Priority",
    priorityColor: "text-[#D4AF37]"
  },
  {
    title: "Build Full Stack Project",
    subtitle: "React + FastAPI + PostgreSQL",
    prog: 3,
    target: 5,
    pct: 60,
    unit: "milestones",
    color: "green",
    icon: <BookOpen className="h-6 w-6" />,
    dueDate: "Oct 31, 2026",
    category: "Projects",
    priority: "High Priority",
    priorityColor: "text-red-500"
  },
  {
    title: "Complete 3 Courses",
    subtitle: "System Design, Docker, DevOps",
    prog: 1,
    target: 3,
    pct: 33,
    unit: "",
    color: "orange",
    icon: <GraduationCap className="h-6 w-6" />,
    dueDate: "Dec 15, 2026",
    category: "Learning",
    priority: "Medium Priority",
    priorityColor: "text-[#D4AF37]"
  }
]

export default function Goals() {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      {/* Background illustration/gradient area */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-[16px]"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2 text-[#D4AF37]">
            G<span className="text-[#0B1F3A] -ml-1">oals</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Set targets, track progress and stay consistent.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setShowAddModal(true)} className="px-5 py-2.5 bg-[#897127] text-white rounded-[16px] font-bold text-sm hover:bg-[#6c591e] flex items-center gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> Create Goal
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Active Goals */}
        <div className="bg-gradient-to-br from-blue-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Active Goals</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">4</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 rotate-[-45deg]" />
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 2</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData1}>
                  <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Completed Goals */}
        <div className="bg-gradient-to-br from-emerald-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shadow-sm shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Completed Goals</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">12</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 rotate-[-45deg]" />
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 5</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData2}>
                  <Line type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Overdue Goals */}
        <div className="bg-gradient-to-br from-red-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-red flex items-center justify-center text-red-600 shadow-sm shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Overdue Goals</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">1</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 rotate-[-45deg]" />
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-red-500">↓ 2</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData3}>
                  <Line type="monotone" dataKey="v" stroke="#ef4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-gradient-to-br from-orange-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-yellow flex items-center justify-center text-yellow-600 shadow-sm shrink-0">
                <BarChart2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Overall Progress</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">76%</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 rotate-[-45deg]" />
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 12%</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData4}>
                  <Line type="monotone" dataKey="v" stroke="#eab308" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-2 bg-[#FDE68A] text-[#92400E] rounded-full font-bold text-sm shadow-sm whitespace-nowrap">All Goals (4)</button>
          <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm whitespace-nowrap">In Progress (3)</button>
          <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm whitespace-nowrap">Completed (12)</button>
          <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm whitespace-nowrap">Overdue (1)</button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-[16px] text-xs font-bold text-gray-600 shadow-sm">
            All Categories <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-[16px] text-xs font-bold text-gray-600 shadow-sm">
            Sort by: Progress <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-[16px] p-1 shadow-sm">
            <button className="p-1.5 bg-[#FDE68A] rounded-md text-[#92400E]"><List className="h-4 w-4" /></button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600"><LayoutGrid className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {goals.map(goal => (
          <div key={goal.title} className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 relative">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-[16px] badge-3d-${goal.color} flex items-center justify-center shrink-0`}>
                {goal.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-[#0B1F3A] text-[15px] truncate pr-2">{goal.title}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1 text-[10px] font-bold rounded-full badge-3d-yellow">In Progress</span>
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium mb-5">{goal.subtitle}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-[#0B1F3A]">{goal.prog} / {goal.target} {goal.unit}</span>
                    <span className="text-gray-500">{goal.pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                    <div className={`bg-gradient-to-r from-${goal.color}-400 to-${goal.color}-500 h-full rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-white/40`} style={{ width: `${goal.pct}%` }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 pt-5 border-t border-gray-100">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Due {goal.dueDate}</span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 rounded-md"><Tag className="h-3 w-3" /> {goal.category}</span>
                  <span className={`flex items-center gap-1.5 ${goal.priorityColor}`}><Flag className="h-3 w-3" /> {goal.priority}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goals Progress Overview */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0B1F3A]">Goals Progress Overview</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-50">
              This Year <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressOverviewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FDE68A" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FDE68A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} tickFormatter={(val) => `${val}%`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#0B1F3A', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="value" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorProg)" dot={{ r: 4, fill: "#eab308", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6, fill: "#eab308", strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[16px] border border-gray-100 flex flex-col"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
          <div className="flex items-center gap-3 mb-8">
            <PieChartIcon className="h-6 w-6 text-[#D4AF37]" />
            <div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">Category Breakdown</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Distribution of your goals.</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between flex-1">
            <div className="relative shrink-0 flex items-center justify-center" style={{ width: '140px', height: '140px' }}>
              <div className="absolute inset-0" style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.20)) drop-shadow(0 2px 5px rgba(0,0,0,0.14))' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={42}
                      outerRadius={60}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="white"
                      strokeWidth={3}
                      cornerRadius={6}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{
                width: '70px', height: '70px', borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #f1f5f9 100%)',
                boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.10), inset 0 1px 3px rgba(0,0,0,0.06)',
              }}>
                <span className="text-2xl font-bold text-[#0B1F3A] leading-none">4</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide mt-1">Goals</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full pl-6">
              {categoryData.map(d => (
                <div key={d.name} className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full shrink-0" style={{
                      backgroundColor: d.color,
                      boxShadow: `0 2px 6px ${d.color}66, inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.1)`,
                    }}></span>
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-center"
                      style={{
                        backgroundColor: `${d.color}15`,
                        color: d.color,
                        border: `1px solid ${d.color}40`,
                        boxShadow: `0 2px 6px ${d.color}20, inset 0 1px 0 rgba(255,255,255,0.8)`,
                        minWidth: '44px',
                      }}>{d.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Create Goal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Create New Goal</h2>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Goal Title</label>
                <input type="text" placeholder="e.g. Master React Hooks" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Target Date</label>
                  <input type="date" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Priority</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Career</option>
                  <option>Fitness</option>
                  <option>Other</option>
                </select>
              </div>

              <button type="submit" className="w-full py-3 bg-[#0B1F3A] text-white rounded-[16px] font-bold hover:bg-[#1a365d] transition-colors mt-4">
                Save Goal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}



