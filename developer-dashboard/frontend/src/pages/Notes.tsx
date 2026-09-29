import React, { useState } from "react"
import { Pin, Pencil, MoreHorizontal, Plus, Search, FileText, Calendar, BarChart2, ChevronDown, LayoutGrid, List, Code2, Database, Globe, Terminal, Cpu } from "lucide-react"
import { LineChart, Line, ResponsiveContainer } from "recharts"

const sparkline1 = [{v:2},{v:3},{v:5},{v:4},{v:6},{v:5},{v:7}]
const sparkline2 = [{v:1},{v:2},{v:2},{v:3},{v:4},{v:3},{v:4}]
const sparkline3 = [{v:3},{v:4},{v:5},{v:4},{v:6},{v:7},{v:6}]

const catTagColors: Record<string, string> = {
  Java:          "bg-orange-100 text-orange-700",
  "System Design":"bg-purple-100 text-purple-700",
  React:         "bg-cyan-100 text-cyan-700",
  Database:      "bg-blue-100 text-blue-700",
  LeetCode:      "bg-green-100 text-green-700",
  DevOps:        "bg-red-100 text-red-700",
  "Web Dev":     "bg-indigo-100 text-indigo-700",
  Programming:   "bg-yellow-100 text-yellow-700",
}

const noteIconMap: Record<string, React.ReactNode> = {
  Java:          <Code2 className="h-8 w-8 text-orange-400" />,
  "System Design": <Cpu className="h-8 w-8 text-purple-400" />,
  React:         <Globe className="h-8 w-8 text-cyan-400" />,
  Database:      <Database className="h-8 w-8 text-blue-400" />,
  LeetCode:      <Terminal className="h-8 w-8 text-green-400" />,
  DevOps:        <Terminal className="h-8 w-8 text-red-400" />,
}

const tabs = ["All (24)", "LeetCode (6)", "System Design (4)", "Web Dev (5)", "Programming (4)", "Interview (3)", "DevOps (2)", "Others (0)"]

const notes = [
  {
    id: 1, pinned: true,
    tag: "Java", title: "Java HashMap",
    body: "HashMap stores key-value pairs and provides average O(1) lookup. It uses a hash table implementation and check complement in O(m) time.",
    updated: "2 days ago",
  },
  {
    id: 2, pinned: true,
    tag: "System Design", title: "Scaling Strategies",
    body: "Techniques to scale applications horizontally and vertically. Load balancing, caching, database...",
    updated: "4 days ago",
  },
  {
    id: 3, pinned: false,
    tag: "React", title: "useEffect Notes",
    body: "useEffect runs after render. Useful for API calls, subscriptions and manual DOM updates...",
    updated: "1 week ago",
  },
  {
    id: 4, pinned: true,
    tag: "Database", title: "SQL Joins Summary",
    body: "Inner Join, Left Join, Right Join, Full Join with examples and use cases.",
    updated: "2 days ago",
  },
  {
    id: 5, pinned: false,
    tag: "LeetCode", title: "Two Sum Approach",
    body: "Use a HashMap to store numbers and check complement in O(m) time.",
    updated: "3 days ago",
  },
  {
    id: 6, pinned: false,
    tag: "DevOps", title: "Docker Commands",
    body: "Commonly used Docker commands for daily usage. Build, run, stop, remove...",
    updated: "5 days ago",
  },
]

export default function Notes() {
  const [activeTab, setActiveTab] = useState("All (24)")
  const [gridView, setGridView] = useState(true)

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-xl"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">Notes</h1>
          <p className="text-gray-500 mt-2 font-medium">Capture ideas, technical concepts and important development notes.</p>
        </div>
        <button className="px-5 py-2.5 bg-[#897127] text-white rounded-lg font-bold text-sm hover:bg-[#6c591e] flex items-center gap-2 shadow-sm">
          <Plus className="h-4 w-4" /> Create Note
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Total Notes</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">24</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ +6</span> <span className="text-gray-400">this month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparkline1}>
                  <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
              <Pin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Pinned Notes</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">4</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ +2</span> <span className="text-gray-400">this month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparkline2}>
                  <Line type="monotone" dataKey="v" stroke="#eab308" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-green flex items-center justify-center text-green-600 shrink-0">
              <BarChart2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Categories</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">6</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold text-gray-400">Across all notes</p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparkline3}>
                  <Line type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Last Updated</h3>
              <div className="text-2xl font-bold text-[#0B1F3A] leading-tight">2 days ago</div>
            </div>
          </div>
          <p className="text-[10px] font-bold text-gray-400">Java HashMap</p>
        </div>
      </div>

      {/* Search + Sort Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
        <div className="relative flex-1 w-full">
          <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search title, content, or tags..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="h-10 px-3 bg-white border border-gray-200 rounded-xl flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            All Categories <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="h-10 px-3 bg-white border border-gray-200 rounded-xl flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            Sort by: Latest <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
            <button onClick={() => setGridView(true)} className={`p-2 rounded-lg ${gridView ? 'bg-[#FDE68A] text-[#92400E]' : 'text-gray-400 hover:text-gray-600'}`}>
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button onClick={() => setGridView(false)} className={`p-2 rounded-lg ${!gridView ? 'bg-[#FDE68A] text-[#92400E]' : 'text-gray-400 hover:text-gray-600'}`}>
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-[#FDE68A] text-[#92400E] shadow-sm'
                : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notes Grid */}
      <div className={`grid gap-5 ${gridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {notes.map(note => (
          <div key={note.id} className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md hover:border-gray-200 transition-all group relative">
            {/* Top row: tag + pin + actions */}
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${catTagColors[note.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                {note.tag}
              </span>
              <div className="flex items-center gap-2">
                <button className={`transition-colors ${note.pinned ? 'text-[#D4AF37]' : 'text-gray-200 hover:text-[#D4AF37]'}`}>
                  <Pin className={`h-4 w-4 ${note.pinned ? 'fill-current' : ''}`} />
                </button>
                <button className="text-gray-200 hover:text-gray-500 transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Title + body + icon */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0B1F3A] text-[15px] leading-snug mb-1">{note.title}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed line-clamp-3">{note.body}</p>
              </div>
              <div className="w-14 h-14 rounded-[14px] bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                {noteIconMap[note.tag] ?? <FileText className="h-8 w-8 text-gray-300" />}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                <Calendar className="h-3.5 w-3.5" />
                Updated {note.updated}
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  <Pencil className="h-4 w-4" />
                </button>
                <button className="text-gray-300 hover:text-gray-500 transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
