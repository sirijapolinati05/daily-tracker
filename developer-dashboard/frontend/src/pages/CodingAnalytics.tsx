import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, LineChart, Line, LabelList } from 'recharts'
import { Flame, Code2, Target, Calendar, Crown, ChevronDown, Clock, ArrowRight } from "lucide-react"

const weeklyData = [
  { name: 'Aug 4-10', problems: 6 },
  { name: 'Aug 11-17', problems: 10 },
  { name: 'Aug 18-24', problems: 8 },
  { name: 'Aug 25-31', problems: 15 },
  { name: 'Sep 1-7', problems: 12 },
  { name: 'Sep 8-14', problems: 18 },
  { name: 'Sep 15-21', problems: 14 },
  { name: 'Sep 22-28', problems: 11 },
]

const difficultyData = [
  { name: 'Easy', value: 68, color: '#22c55e', percent: '54%' },
  { name: 'Medium', value: 42, color: '#f59e0b', percent: '33%' },
  { name: 'Hard', value: 17, color: '#ef4444', percent: '13%' },
]

const trendData = [
  { day: 'Sep 1', val: 2 }, { day: '', val: 3 }, { day: 'Sep 5', val: 5 }, { day: '', val: 4 }, { day: '', val: 8 }, 
  { day: '', val: 5 }, { day: 'Sep 10', val: 3 }, { day: '', val: 5 }, { day: '', val: 6 }, { day: '', val: 4 },
  { day: 'Sep 15', val: 5 }, { day: '', val: 4 }, { day: '', val: 3 }, { day: '', val: 6 }, { day: 'Sep 20', val: 8 },
  { day: '', val: 5 }, { day: '', val: 2 }, { day: '', val: 5 }, { day: 'Sep 25', val: 7 }, { day: '', val: 8 },
  { day: '', val: 9 }, { day: 'Sep 30', val: 12 },
]

const sparklineBlue = [{v: 5}, {v: 7}, {v: 6}, {v: 8}, {v: 5}, {v: 12}, {v: 18}]
const sparklineGreen = [{v: 1}, {v: 2}, {v: 1}, {v: 3}, {v: 4}, {v: 7}, {v: 9}]
const sparklinePurple = [{v: 3}, {v: 5}, {v: 4}, {v: 6}, {v: 7}, {v: 12}, {v: 15}]
const sparklineGold = [{v: 2}, {v: 4}, {v: 3}, {v: 7}, {v: 5}, {v: 10}, {v: 12}]

export default function CodingAnalytics() {
  return (
    <div className="w-full relative min-h-screen">
      <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">Coding <span className="text-[#D4AF37]">Analytics</span></h1>
          <p className="text-gray-500 mt-2 text-lg">Detailed statistics and insights on your coding journey.</p>
        </div>
        
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Calendar className="h-4 w-4" />
            Last 7 Days
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* 4 Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 relative z-10">
        
        {/* Total Solved */}
        <div className="bg-gradient-to-br from-blue-50/50 to-white p-4 shadow-sm border border-blue-100/50 flex flex-col justify-between rounded-[24px]">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#EBF5FF] to-[#D6E8F9] flex items-center justify-center text-blue-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(59,130,246,0.25)] border border-white">
                <Code2 className="h-6 w-6 drop-shadow-sm" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B1F3A]">Total Solved</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">127</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-medium text-gray-400"><span className="text-green-500 font-bold">↑ +18</span> from last month</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineBlue}>
                  <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-gradient-to-br from-green-50/50 to-white p-4 shadow-sm border border-green-100/50 flex flex-col justify-between rounded-[24px]">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0] flex items-center justify-center text-green-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(34,197,94,0.25)] border border-white">
                <Flame className="h-6 w-6 drop-shadow-sm" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B1F3A]">Current Streak</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">12 Days</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-medium text-gray-400"><span className="text-green-500 font-bold">↑ +3</span> from last week</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineGreen}>
                  <Line type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Longest Streak */}
        <div className="bg-gradient-to-br from-purple-50/50 to-white p-4 shadow-sm border border-purple-100/50 flex flex-col justify-between rounded-[24px]">
          <div className="flex justify-between items-start w-full relative">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] flex items-center justify-center text-purple-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(168,85,247,0.25)] border border-white">
                <Target className="h-6 w-6 drop-shadow-sm" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B1F3A]">Longest Streak</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">24 Days</h3>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-[#FDE68A] p-1.5 rounded-full text-[#D4AF37] shadow-sm">
              <Crown className="h-4 w-4" fill="currentColor" />
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-medium text-gray-400">Personal best!</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklinePurple}>
                  <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* This Month */}
        <div className="bg-gradient-to-br from-yellow-50/50 to-white p-4 shadow-sm border border-yellow-100/50 flex flex-col justify-between rounded-[24px]">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex items-center justify-center text-[#D4AF37] shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(212,175,55,0.25)] border border-white">
                <Calendar className="h-6 w-6 drop-shadow-sm" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B1F3A]">This Month</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">35</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-medium text-gray-400"><span className="text-green-500 font-bold">↑ +42%</span> vs last month</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineGold}>
                  <Line type="monotone" dataKey="v" stroke="#D4AF37" strokeWidth={2} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 relative z-10">
        {/* Problems Solved Per Week (Bar Chart) */}
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <BarChart2 className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Problems Solved Per Week</h3>
                <p className="text-xs text-gray-500 font-medium">Weekly count of problems you solved.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm text-xs font-bold text-gray-700 hover:bg-gray-50">
              Last 8 Weeks <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </div>
          
          <div className="flex-1 w-full h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="problems" fill="url(#goldGradient)" radius={[6, 6, 0, 0]} barSize={36}>
                  <LabelList dataKey="problems" position="top" fill="#0B1F3A" fontWeight="bold" fontSize={11} offset={8} />
                </Bar>
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E5C76B" />
                    <stop offset="100%" stopColor="#FDE68A" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Difficulty Distribution (Donut) */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <PieChartIcon className="h-6 w-6 text-[#D4AF37]" />
            <div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">Difficulty Distribution</h3>
              <p className="text-xs text-gray-500 font-medium">Distribution of problems solved by difficulty.</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between flex-1">
            <div className="h-32 w-32 relative shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={difficultyData}
                    innerRadius={45}
                    outerRadius={60}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={4}
                  >
                    {difficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-[#0B1F3A]">127</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Solved</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full pl-6">
              {difficultyData.map(d => (
                <div key={d.name} className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full shadow-sm" style={{ backgroundColor: d.color }}></span>
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.value}</span>
                    <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 w-10 text-center">{d.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        
        {/* Problem Solving Trend */}
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <LineChartIcon className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Problem Solving Trend</h3>
                <p className="text-xs text-gray-500 font-medium">Your daily problem solving activity.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm text-xs font-bold text-gray-700 hover:bg-gray-50">
              Last 30 Days <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </div>
          
          <div className="flex-1 w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                <Tooltip cursor={{ stroke: '#D4AF37', strokeWidth: 1, strokeDasharray: '4 4' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#trendGradient)" activeDot={{ r: 6, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }} dot={{ r: 3, fill: '#fff', stroke: '#D4AF37', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recently Solved Problems */}
        <div className="bg-gradient-to-br from-[#FDFBF2]/60 to-white p-6 rounded-[24px] shadow-sm border border-[#E5C76B]/30 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#0B1F3A]" />
              <h3 className="text-lg font-bold text-[#0B1F3A]">Recently Solved Problems</h3>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          
          <div className="flex flex-col gap-4">
            
            <div className="grid grid-cols-3 items-center">
              <span className="font-bold text-[#0B1F3A] text-sm truncate pr-2">Two Sum</span>
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-green w-16 text-center">Easy</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium text-right">Today, 10:24 AM</span>
            </div>

            <div className="grid grid-cols-3 items-center">
              <span className="font-bold text-[#0B1F3A] text-sm truncate pr-2">LRU Cache</span>
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-orange w-16 text-center">Medium</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium text-right">Yesterday, 08:17 PM</span>
            </div>

            <div className="grid grid-cols-3 items-center">
              <span className="font-bold text-[#0B1F3A] text-sm truncate pr-2">Merge K Sorted Lists</span>
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-red w-16 text-center">Hard</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium text-right">Sep 25, 06:42 PM</span>
            </div>

            <div className="grid grid-cols-3 items-center">
              <span className="font-bold text-[#0B1F3A] text-sm truncate pr-2">Valid Parentheses</span>
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-green w-16 text-center">Easy</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium text-right">Sep 24, 04:15 PM</span>
            </div>

            <div className="grid grid-cols-3 items-center">
              <span className="font-bold text-[#0B1F3A] text-sm truncate pr-2">Best Time to Buy...</span>
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-orange w-16 text-center">Medium</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium text-right">Sep 22, 09:03 PM</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

function BarChart2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
}

function PieChartIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
}

function LineChartIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
}
