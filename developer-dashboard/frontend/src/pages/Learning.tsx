import React, { useState } from "react"
import { BookOpen, CheckCircle2, Clock, Plus, ChevronDown, List, LayoutGrid, MoreHorizontal, Calendar, Target, Search, Database, Code2, ArrowRight, FileText, PieChart as PieChartIcon, X } from "lucide-react"
import { AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

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
  { name: 'Frontend', value: 2, color: '#3b82f6', percent: '2 (40%)' },
  { name: 'Database', value: 1, color: '#a855f7', percent: '1 (20%)' },
  { name: 'Backend', value: 1, color: '#f97316', percent: '1 (20%)' },
  { name: 'Tools', value: 1, color: '#22c55e', percent: '1 (20%)' },
  { name: 'Others', value: 0, color: '#eab308', percent: '0 (0%)' },
]

const recentlyLearned = [
  { title: "React Hooks", date: "Sep 28", status: "Completed", icon: <Code2 className="h-4 w-4" />, color: "blue" },
  { title: "JOIN Queries", date: "Sep 26", status: "Completed", icon: <Database className="h-4 w-4" />, color: "purple" },
  { title: "Docker Basics", date: "Sep 24", status: "In Progress", icon: <BookOpen className="h-4 w-4" />, color: "green" },
  { title: "System Design Notes", date: "Sep 20", status: "In Progress", icon: <FileText className="h-4 w-4" />, color: "orange" },
]

const learningItems = [
  {
    title: "Advanced React Patterns",
    desc: "Learn advanced React concepts like hooks, context, performance optimization and anti-patterns.",
    pct: 72,
    color: "blue",
    icon: <Code2 className="h-6 w-6" />,
    time: "8h 30m",
    target: "Oct 31, 2026",
    tags: ["React", "Frontend", "Web Development"],
    status: "In Progress"
  },
  {
    title: "SQL Interview Preparation",
    desc: "Practice advanced SQL queries, indexing, query optimization and solve interview questions.",
    pct: 85,
    color: "purple",
    icon: <Database className="h-6 w-6" />,
    time: "12h",
    target: "Nov 15, 2026",
    tags: ["SQL", "Database", "Interview"],
    status: "In Progress"
  }
]

export default function Learning() {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      {/* Background illustration/gradient area */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-[16px]"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2 text-[#0B1F3A]">
            Learning
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Track what you're learning and build your technical skills.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setShowAddModal(true)} className="px-5 py-2.5 bg-[#897127] text-white rounded-[16px] font-bold text-sm hover:bg-[#6c591e] flex items-center gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> Add Learning
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Active Learning */}
        <div className="bg-gradient-to-br from-blue-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Active Learning</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">5</div>
              </div>
            </div>
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

        {/* Completed */}
        <div className="bg-gradient-to-br from-emerald-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shadow-sm shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Completed</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">12</div>
              </div>
            </div>
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

        {/* Learning Hours */}
        <div className="bg-gradient-to-br from-purple-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shadow-sm shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Learning Hours</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">42h</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 8h</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData3}>
                  <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Average Progress */}
        <div className="bg-gradient-to-br from-orange-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-orange flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Average Progress</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">68%</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 12%</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData4}>
                  <Line type="monotone" dataKey="v" stroke="#f97316" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="mb-4">
        <div className="relative w-full">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search learning topics..." className="pl-9 pr-4 py-2 w-full bg-white border border-gray-200 rounded-[16px] text-sm font-medium focus:outline-none focus:border-[#D4AF37] shadow-sm text-gray-600" />
        </div>
      </div>
      
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-2 bg-[#FDE68A] text-[#92400E] rounded-full font-bold text-sm shadow-sm whitespace-nowrap">All (5)</button>
          <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm whitespace-nowrap">In Progress (3)</button>
          <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm whitespace-nowrap">Completed (12)</button>
          <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm whitespace-nowrap">Not Started (2)</button>
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

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {learningItems.map(item => (
          <div key={item.title} className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 relative">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-[16px] badge-3d-${item.color} flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#0B1F3A] text-[15px] truncate pr-2">{item.title}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1 text-[10px] font-bold rounded-full badge-3d-yellow">In Progress</span>
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-yellow-50 text-[#92400E] border border-yellow-100 rounded-md text-[10px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs text-gray-500 font-medium mb-6 line-clamp-2">{item.desc}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-end text-xs font-bold">
                    <span className="text-[#0B1F3A]">{item.pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                    <div className={`bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 h-full rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-white/40`} style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Time Spent: {item.time}</span>
                    <span className="flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Target: {item.target}</span>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 text-yellow-600 hover:bg-yellow-100 rounded-[16px] transition-colors border border-yellow-100">
                    Continue <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Progress Trend */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[13px]">
              <Target className="h-4 w-4 text-yellow-500" /> Learning Progress Trend
            </h3>
            <button className="flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-md text-[10px] font-bold text-gray-600 hover:bg-gray-50">
              This Year <ChevronDown className="h-3 w-3" />
            </button>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressOverviewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProgLearn" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="value" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorProgLearn)" dot={{ r: 4, fill: "#eab308", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6, fill: "#eab308", strokeWidth: 0 }} />
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
              <p className="text-xs text-gray-500 font-medium mt-1">Distribution of active learning.</p>
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
                <span className="text-2xl font-bold text-[#0B1F3A] leading-none">5</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide mt-1">Active</span>
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

        {/* Recently Learned */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[13px]">
              <BookOpen className="h-4 w-4 text-yellow-500" /> Recently Learned
            </h3>
            <button className="text-[10px] font-bold text-blue-500 hover:text-blue-600 flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          
          <div className="flex flex-col gap-4">
            {recentlyLearned.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-[16px] bg-${item.color}-50 text-${item.color}-500 flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#0B1F3A]">{item.title}</h4>
                    <span className="text-[9px] text-gray-400 font-bold">{item.date}</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${item.status === 'Completed' ? 'badge-3d-green' : 'badge-3d-blue'}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add Learning Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Add Learning</h2>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Topic / Course Name</label>
                <input type="text" placeholder="e.g. System Design Patterns" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Platform</label>
                  <input type="text" placeholder="e.g. Udemy, YouTube" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Duration (mins)</label>
                  <input type="number" placeholder="e.g. 45" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>DevOps</option>
                  <option>System Design</option>
                  <option>Data Structures</option>
                  <option>Other</option>
                </select>
              </div>

              <button type="submit" className="w-full py-3 bg-[#0B1F3A] text-white rounded-[16px] font-bold hover:bg-[#1a365d] transition-colors mt-4">
                Save Learning
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


