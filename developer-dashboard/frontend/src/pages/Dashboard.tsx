import React from "react"
import { Code2, Clock, Target, DollarSign, Calendar, ChevronRight, CheckCircle2, Circle, Trophy } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import bgImage from '@/assets/background.png'

const activityData = [
  { name: 'Wed', solved: 7 },
  { name: 'Thu', solved: 11 },
  { name: 'Fri', solved: 4 },
  { name: 'Sat', solved: 9 },
  { name: 'Sun', solved: 8 },
  { name: 'Mon', solved: 13 },
  { name: 'Tue', solved: 18 },
]

const sparklineData1 = [
  { value: 10 }, { value: 15 }, { value: 8 }, { value: 12 }, { value: 20 }, { value: 15 }, { value: 25 }
]

const sparklineData2 = [
  { value: 5 }, { value: 10 }, { value: 15 }, { value: 12 }, { value: 18 }, { value: 25 }, { value: 20 }
]

export default function Dashboard() {
  return (
    <div className="w-full space-y-6">
      
      {/* Banner */}
      <div className="w-full bg-[#0B1F3A] overflow-hidden relative shadow-md" style={{ borderRadius: '24px' }}>
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Banner Background" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-10 flex justify-between items-center h-48">
          <div>
            <p className="text-gray-300 font-medium mb-1">Good Evening,</p>
            <h1 className="text-white text-4xl md:text-5xl font-serif font-bold mb-3 tracking-tight">Welcome back! 👋</h1>
            <p className="text-gray-300 text-sm mb-5">Here's an overview of your productivity today.</p>
            
            <div className="inline-flex items-center gap-2 bg-[#163D63] text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium border border-[#102A43]">
              <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Tue, Sep 30, 2026</span>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col items-end opacity-80">
            <span className="font-serif text-[#D4AF37] text-xl italic tracking-wide">Better</span>
            <span className="font-serif text-[#D4AF37] text-xl italic tracking-wide">Than Yesterday</span>
            <div className="w-16 h-px bg-[#D4AF37]/50 mt-2"></div>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-gradient-to-br from-blue-50/80 to-white p-4 shadow-sm border border-blue-100/50 flex flex-col justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#EBF5FF] to-[#D6E8F9] flex items-center justify-center text-blue-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),3px_3px_8px_rgba(59,130,246,0.2)] border border-white">
                <Code2 className="h-4 w-4 drop-shadow-sm" />
              </div>
              <span className="font-bold text-[#0B1F3A] text-sm">LeetCode Solved</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="flex items-end justify-between mt-1">
            <div>
              <h3 className="text-3xl font-bold text-[#0B1F3A]">124</h3>
              <p className="text-[11px] text-gray-500 mt-0.5"><span className="text-green-500 font-medium">↑ +4</span> from yesterday</p>
            </div>
            <div className="h-8 w-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklineData1}>
                  <defs>
                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorBlue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F3E8FF]/40 to-white p-4 shadow-sm border border-purple-100/60 flex flex-col justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] flex items-center justify-center text-purple-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),3px_3px_8px_rgba(147,51,234,0.2)] border border-white">
                <Clock className="h-4 w-4 drop-shadow-sm" />
              </div>
              <span className="font-bold text-[#0B1F3A] text-sm">Productivity Hours</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="flex items-end justify-between mt-1">
            <div>
              <h3 className="text-3xl font-bold text-[#0B1F3A]">6.5h</h3>
              <p className="text-[11px] text-gray-500 mt-0.5"><span className="text-green-500 font-medium">↑ +1.2h</span> from yesterday</p>
            </div>
            <div className="h-8 w-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklineData2}>
                  <defs>
                    <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#9333ea" fillOpacity={1} fill="url(#colorPurple)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#DCFCE7]/40 to-white p-4 shadow-sm border border-green-100/60 flex flex-col justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0] flex items-center justify-center text-green-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),3px_3px_8px_rgba(34,197,94,0.2)] border border-white">
                <Target className="h-4 w-4 drop-shadow-sm" />
              </div>
              <span className="font-bold text-[#0B1F3A] text-sm">Goals Completed</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-1">
            <h3 className="text-3xl font-bold text-[#0B1F3A]">3/5</h3>
            <p className="text-[11px] text-gray-500 mt-0.5">60% daily completion</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFEDD5]/40 to-white p-4 shadow-sm border border-orange-100/60 flex flex-col justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#FFEDD5] to-[#FED7AA] flex items-center justify-center text-orange-500 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),3px_3px_8px_rgba(249,115,22,0.2)] border border-white">
                <DollarSign className="h-4 w-4 drop-shadow-sm" />
              </div>
              <span className="font-bold text-[#0B1F3A] text-sm">Monthly Expenses</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-1">
            <h3 className="text-3xl font-bold text-[#0B1F3A]">₹1,245</h3>
            <p className="text-[11px] text-gray-500 mt-0.5">₹255 remaining budget</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 flex">
              <div className="bg-orange-400 h-1.5 rounded-l-full" style={{ width: '80%' }}></div>
              <div className="bg-gray-200 h-1.5 rounded-r-full flex-1"></div>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coding Activity Chart */}
        <div className="bg-gradient-to-br from-[#EBF5FF]/60 to-white p-6 shadow-sm border border-blue-100/50 lg:col-span-2" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#EBF5FF] to-[#D6E8F9] flex items-center justify-center text-blue-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(59,130,246,0.25)] border border-white">
                <Code2 className="h-5 w-5 drop-shadow-sm" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1F3A] text-md">Coding Activity</h3>
                <p className="text-xs text-gray-500">Your coding progress and activity trend</p>
              </div>
            </div>
            <select className="text-sm bg-white border border-gray-200 text-gray-600 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dx={-10} />
                <Tooltip />
                <Area type="monotone" dataKey="solved" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorActivity)" 
                  activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent LeetCode List */}
        <div className="bg-gradient-to-br from-[#FFFDF2] to-white p-6 shadow-sm border border-[#E5C76B]/30 flex flex-col" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#EBF5FF] to-[#D6E8F9] flex items-center justify-center text-blue-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(59,130,246,0.25)] border border-white">
                <Trophy className="h-5 w-5 drop-shadow-sm" />
              </div>
              <h3 className="font-bold text-[#0B1F3A] text-md">Recent LeetCode</h3>
            </div>
            <button className="text-blue-500 hover:text-blue-600 text-xs font-semibold flex items-center gap-1">
              View All <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-5 flex-1">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Two Sum</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Easy • Array, Hash Table</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-2">
                <div>
                  <p className="text-xs font-bold text-green-600">Solved</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Today, 10:24 AM</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </div>
            </div>
            
            <div className="h-px bg-gray-100 w-full"></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">LRU Cache</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Medium • Linked List, Hash Table</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-2">
                <div>
                  <p className="text-xs font-bold text-green-600">Solved</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Yesterday, 08:17 PM</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </div>
            </div>

            <div className="h-px bg-gray-100 w-full"></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Circle className="h-5 w-5 text-gray-300 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Group Anagrams</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Medium • String, Hash Table</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-2">
                <div>
                  <p className="text-xs font-medium text-gray-500">Not Solved</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Sep 28, 2026</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
