import React, { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Code2, Clock, Trophy, Target, BookOpen, Flame, ChevronDown, ArrowRight } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar } from 'recharts'
import bgImage from '@/assets/background.png'

const sparklineBlue = [{v: 5}, {v: 10}, {v: 8}, {v: 15}, {v: 12}, {v: 18}, {v: 22}]
const sparklineGreen = [{v: 15}, {v: 12}, {v: 18}, {v: 14}, {v: 20}, {v: 18}, {v: 25}]
const sparklineGold = [{v: 8}, {v: 12}, {v: 15}, {v: 10}, {v: 18}, {v: 22}, {v: 20}]
const sparklinePurple = [{v: 20}, {v: 18}, {v: 22}, {v: 25}, {v: 20}, {v: 28}, {v: 30}]

const monthlyData = [
  { name: 'Jan', val: 10 }, { name: 'Feb', val: 15 }, { name: 'Mar', val: 25 },
  { name: 'Apr', val: 18 }, { name: 'May', val: 22 }, { name: 'Jun', val: 15 },
  { name: 'Jul', val: 20 }, { name: 'Aug', val: 18 }, { name: 'Sep', val: 30 },
  { name: 'Oct', val: 15 }, { name: 'Nov', val: 22 }, { name: 'Dec', val: 25 }
]

const breakdownData = [
  { name: 'Problem Solving', value: 157, color: '#22c55e' },
  { name: 'Learning', value: 72, color: '#eab308' },
  { name: 'Contests', value: 28, color: '#ef4444' },
  { name: 'Others', value: 28, color: '#8b5cf6' }
]

function BarChartIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
}


const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="font-extrabold text-[#0B1F3A] text-[13px] pointer-events-none whitespace-nowrap -translate-x-1/2" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1), 0 0 2px rgba(255,255,255,1)' }}>
        {payload[0].name}: {payload[0].name.includes('LeetCode') || payload[0].name === 'Frontend' ? '' : ''}{payload[0].value.toLocaleString()}
      </div>
    )
  }
  return null
}

export default function CodingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("September 28, 2026")

  // Generate 52 weeks of dummy data blocks (7 days each)
  const weeks = Array.from({ length: 52 }, () => 
    Array.from({ length: 7 }, () => {
      const intensity = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0
      return intensity
    })
  )

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-[#F5F3EA]"
      case 1: return "bg-[#FDE68A]"
      case 2: return "bg-[#F59E0B]"
      case 3: return "bg-[#D97706]"
      case 4: return "bg-[#92400E]" // Darkest gold
      default: return "bg-[#F5F3EA]"
    }
  }

  return (
    <div className="w-full relative min-h-screen">
      
      {/* Background Image Overlay */}
      <div className="absolute top-[-24px] right-[-24px] w-1/2 h-[350px] z-0 pointer-events-none overflow-hidden opacity-80 mix-blend-multiply">
         <img src={bgImage} alt="Decorative background" className="w-full h-full object-cover object-right-top" />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">Coding <span className="text-[#D4AF37]">Calendar</span></h1>
          <p className="text-gray-500 mt-2 text-lg">A visual history of your daily coding activities.</p>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex flex-col items-end transform -rotate-6 text-[#D4AF37] font-serif italic font-bold text-xl opacity-80 mt-[-10px] mr-10">
            <span>Consistency</span>
            <span className="mr-[-20px]">Builds</span>
            <span className="mr-[-40px]">Great Developers</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-gradient-to-br from-[#D4AF37] to-[#9A7D3C] text-white px-6 py-2.5 rounded-[16px] font-bold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),4px_4px_10px_rgba(154,125,60,0.4)] border border-[#E5C76B]/50 hover:brightness-110 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.2)] transition-all text-sm">2026</button>
            <button className="bg-white text-gray-600 px-6 py-2.5 rounded-[16px] font-bold border border-gray-200 hover:bg-gray-50 shadow-sm transition-all text-sm">2025</button>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 relative z-10">
        {/* Total Days Coded */}
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 shadow-sm border border-gray-100 flex flex-col justify-between rounded-[16px] h-32">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">Total Days Coded</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">142</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-bold text-gray-400"><span className="text-green-500">↑ +18%</span> this year</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineBlue}>
                  <Bar dataKey="v" fill="#3b82f6" radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Total Hours */}
        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 shadow-sm border border-gray-100 flex flex-col justify-between rounded-[16px] h-32">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">Total Hours</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">286h</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-bold text-gray-400"><span className="text-green-600">↑ +22%</span> this year</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineGreen}>
                  <Bar dataKey="v" fill="#22c55e" radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 shadow-sm border border-gray-100 flex flex-col justify-between rounded-[16px] h-32">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">Current Streak</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">12 Days</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-bold text-gray-400"><span className="text-green-500">↑ +3</span> from last week</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineGold}>
                  <Bar dataKey="v" fill="#eab308" radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Longest Streak */}
        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 shadow-sm border border-gray-100 flex flex-col justify-between rounded-[16px] h-32">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">Longest Streak</p>
                <h3 className="text-3xl font-bold text-[#0B1F3A]">24 Days</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[11px] font-bold text-gray-400">Keep going! 🔥</p>
            <div className="h-8 w-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklinePurple}>
                  <Bar dataKey="v" fill="#a855f7" radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap - Full Width Row */}
      <div className="mb-6 relative z-10">
        <div className="bg-white p-8 rounded-[16px] shadow-sm border border-gray-100">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <BarChartIcon className="h-6 w-6 text-[#D4AF37]" />
              <h3 className="font-bold text-[#0B1F3A] text-lg">Contribution History</h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-400">1,024 Contributions</span>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-50">
                This Year <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Month labels on top */}
          <div className="flex ml-8 mb-1 text-[10px] font-bold text-gray-400">
            <span className="flex-1 text-center">Jan</span>
            <span className="flex-1 text-center">Feb</span>
            <span className="flex-1 text-center">Mar</span>
            <span className="flex-1 text-center">Apr</span>
            <span className="flex-1 text-center">May</span>
            <span className="flex-1 text-center">Jun</span>
            <span className="flex-1 text-center">Jul</span>
            <span className="flex-1 text-center">Aug</span>
            <span className="flex-1 text-center">Sep</span>
            <span className="flex-1 text-center">Oct</span>
            <span className="flex-1 text-center">Nov</span>
            <span className="flex-1 text-center">Dec</span>
          </div>

          {/* Grid: day labels + heatmap squares */}
          <div className="flex gap-1 overflow-x-auto pb-1">
            {/* Day labels column */}
            <div className="flex flex-col gap-1 text-[10px] text-gray-400 font-bold pr-1 shrink-0 w-7">
              <div className="h-3 flex items-center leading-none">Mon</div>
              <div className="h-3 flex items-center leading-none">Tue</div>
              <div className="h-3 flex items-center leading-none">Wed</div>
              <div className="h-3 flex items-center leading-none">Thu</div>
              <div className="h-3 flex items-center leading-none">Fri</div>
              <div className="h-3 flex items-center leading-none">Sat</div>
              <div className="h-3 flex items-center leading-none">Sun</div>
            </div>
            {/* Week columns */}
            <div className="flex flex-nowrap gap-1">
              {weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1 w-3 shrink-0">
                  {week.map((intensity, dIndex) => (
                    <div 
                      key={dIndex} 
                      className={`w-3 h-3 rounded-[2px] cursor-pointer hover:ring-2 hover:ring-[#D4AF37] hover:ring-offset-1 transition-all ${getColorClass(intensity)}`}
                      onClick={() => setSelectedDate(`September ${Math.floor(Math.random() * 28) + 1}, 2026`)}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer: Less/More + fire badge */}
          <div className="flex items-center justify-between mt-3 text-xs font-bold text-gray-400">
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[2px] bg-[#F5F3EA]"></div>
              <div className="w-3 h-3 rounded-[2px] bg-[#FDE68A]"></div>
              <div className="w-3 h-3 rounded-[2px] bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-[2px] bg-[#D97706]"></div>
              <div className="w-3 h-3 rounded-[2px] bg-[#92400E]"></div>
              <span>More</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FEF3C7]/50 text-[#D97706] px-3 py-1.5 rounded-full font-bold">
              <Flame className="h-3.5 w-3.5" fill="currentColor" /> You've coded on 142 days this year!
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Daily Activity (wider) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 relative z-10">
        {/* Daily Activity Details - timeline style */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-5 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#0B1F3A] text-lg">{selectedDate}</h3>
            </div>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400"><ChevronLeft className="h-5 w-5" /></button>
              <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {/* Task 1 */}
            <div className="flex gap-3 items-start p-3 rounded-[16px] bg-green-50/50 border border-green-100">
              <div className="h-9 w-9 rounded-[16px] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shrink-0">
                <Code2 className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[#0B1F3A] text-sm truncate">LeetCode Practice</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full badge-3d-green shrink-0">Completed</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Two Sum, LRU Cache, Merge Intervals</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="flex items-center gap-1 text-[10px] text-gray-400"><Clock className="h-3 w-3" /> 1h 30m</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-500 rounded-full text-[10px] font-bold">LeetCode</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold">Coding</span>
                </div>
              </div>
            </div>

            {/* Task 2 */}
            <div className="flex gap-3 items-start p-3 rounded-[16px] bg-yellow-50/50 border border-yellow-100">
              <div className="h-9 w-9 rounded-[16px] bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shrink-0">
                <BookOpen className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[#0B1F3A] text-sm truncate">System Design Study</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full badge-3d-yellow shrink-0">In Progress</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Studied System Design fundamentals</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="flex items-center gap-1 text-[10px] text-gray-400"><Clock className="h-3 w-3" /> 2h 00m</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-500 rounded-full text-[10px] font-bold">Learning</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold">Backend</span>
                </div>
              </div>
            </div>

            {/* Task 3 */}
            <div className="flex gap-3 items-start p-3 rounded-[16px] bg-gray-50/50 border border-gray-100">
              <div className="h-9 w-9 rounded-[16px] bg-gradient-to-br from-amber-100 to-yellow-200 flex items-center justify-center shrink-0">
                <Target className="h-4 w-4 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[#0B1F3A] text-sm truncate">Mock Interview Prep</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full badge-3d-gray shrink-0">Not Started</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Practice behavioral & technical questions</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="flex items-center gap-1 text-[10px] text-gray-400"><Clock className="h-3 w-3" /> 45m</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full text-[10px] font-bold">Interview</span>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 py-2.5 bg-gradient-to-r from-[#FDE68A] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-white font-bold rounded-[16px] transition-colors shadow-sm flex justify-center items-center gap-2 text-sm">
            View Full Day Details <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        {/* Best Coding Day by Weekday */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex items-center justify-center text-[#D4AF37] shadow-[inset_2px_2px_4px_white] border border-white">
              <Trophy className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-bold text-[#0B1F3A] text-sm">Best Coding Days</h3>
              <p className="text-[10px] text-gray-400 font-medium">Activity by day of week</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {[
              { day: 'Mon', hours: 2.5, color: 'bg-blue-400' },
              { day: 'Tue', hours: 1.8, color: 'bg-emerald-400' },
              { day: 'Wed', hours: 3.2, color: 'bg-[#D4AF37]' },
              { day: 'Thu', hours: 2.1, color: 'bg-purple-400' },
              { day: 'Fri', hours: 1.5, color: 'bg-red-400' },
              { day: 'Sat', hours: 4.0, color: 'bg-[#D4AF37]' },
              { day: 'Sun', hours: 3.5, color: 'bg-orange-400' },
            ].map(({ day, hours, color }) => (
              <div key={day} className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0">{day}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                  <div className={`h-full rounded-full ${color} transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-white/40`} style={{ width: `${(hours / 4) * 100}%` }}></div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 w-7 text-right">{hours}h</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Monthly Trend */}
        <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <BarChartIcon className="h-5 w-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#0B1F3A]">Monthly Coding Activity</h3>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-bold text-gray-600">
              This Year <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="monthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                <Tooltip />
                <Area type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#monthGradient)" activeDot={{ r: 6, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }} dot={{ r: 3, fill: '#fff', stroke: '#D4AF37', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Breakdown */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[16px] border border-gray-100 flex flex-col"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Activity Breakdown</h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Distribution of your coding time.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 bg-white rounded-md text-xs font-bold text-gray-600 shadow-sm">
              This Year <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex items-center justify-between flex-1">
            {/* 3D Bulged Donut Chart — no platform bg, only chart */}
            <div className="relative shrink-0 flex items-center justify-center" style={{ width: '140px', height: '140px' }}>
              {/* Chart with drop-shadow for 3D bulged slices */}
              <div className="absolute inset-0 z-10" style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.20)) drop-shadow(0 2px 5px rgba(0,0,0,0.14))' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={breakdownData}
                      innerRadius={42}
                      outerRadius={60}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="white"
                      strokeWidth={3}
                      cornerRadius={6}
                    >
                      {breakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                      <Tooltip content={<CustomPieTooltip />} cursor={{ fill: 'transparent' }} position={{ x: 80, y: -10 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Center donut hole — inset shadow gives depth/concave feel */}
              <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{
                width: '70px', height: '70px', borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #f1f5f9 100%)',
                boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.10), inset 0 1px 3px rgba(0,0,0,0.06)',
              }}>
                <span className="text-xl font-bold text-[#0B1F3A] leading-none">286h</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide mt-0.5">Total</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full pl-4">
              {breakdownData.map(d => (
                <div key={d.name} className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full shrink-0" style={{
                      backgroundColor: d.color,
                      boxShadow: `0 2px 6px ${d.color}66, inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.1)`,
                    }}></span>
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.value}h</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-center"
                      style={{
                        backgroundColor: `${d.color}15`,
                        color: d.color,
                        border: `1px solid ${d.color}40`,
                        boxShadow: `0 2px 6px ${d.color}20, inset 0 1px 0 rgba(255,255,255,0.8)`,
                        minWidth: '44px',
                      }}>{Math.round((d.value / 285) * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


