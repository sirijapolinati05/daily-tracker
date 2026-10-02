import React, { useState } from "react"
import { Target, Plus, CheckCircle2, Clock, CheckCircle, Calendar, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal, Code2, Monitor, FileText, BookOpen, ListTodo, X } from "lucide-react"
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Tooltip } from "recharts"

const sparklineData1 = [{v: 2}, {v: 3}, {v: 2}, {v: 5}, {v: 4}, {v: 6}, {v: 8}]
const sparklineData2 = [{v: 2}, {v: 4}, {v: 3}, {v: 5}, {v: 5}]
const sparklineData3 = [{v: 3}, {v: 2}, {v: 4}, {v: 3}, {v: 6}]
const sparklineData4 = [{v: 4}, {v: 3}, {v: 5}, {v: 4}, {v: 6}, {v: 5}, {v: 7}]

const progressData = [
  { name: 'Completed', value: 5, color: '#22c55e' },
  { name: 'In Progress', value: 2, color: '#3b82f6' },
  { name: 'Not Started', value: 1, color: '#9ca3af' },
  { name: 'Overdue', value: 0, color: '#ef4444' },
]


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

export default function DailyWork() {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      {/* Background illustration/gradient area */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-[16px]"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A] flex items-center gap-2">
            Daily <span className="text-[#D4AF37]">Work</span>
          </h1>
          <p className="text-gray-500 mt-2">Plan, track and review everything you work on each day.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-[16px] font-bold text-sm hover:bg-gray-50 flex items-center gap-2 shadow-sm">
            <Calendar className="h-4 w-4" /> Today
          </button>
          <button onClick={() => setShowAddModal(true)} className="bg-gradient-to-br from-[#D4AF37] to-[#9A7D3C] text-white px-6 py-2.5 rounded-[16px] font-bold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),4px_4px_10px_rgba(154,125,60,0.4)] border border-[#E5C76B]/50 hover:brightness-110 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2">
            <span className="text-lg leading-none mt-[-2px]">+</span> Add Work
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Today's Tasks */}
        <div className="bg-gradient-to-br from-blue-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shadow-sm">
                <ListTodo className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Today's Tasks</h3>
                <div className="text-2xl font-bold text-[#0B1F3A]">8</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">+2 from</span> <span className="text-gray-400">yesterday</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklineData1}>
                  <Area type="monotone" dataKey="v" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-gradient-to-br from-emerald-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shadow-sm">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Completed</h3>
                <div className="text-2xl font-bold text-[#0B1F3A]">5</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-gray-400">62.5% completion</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineData2}>
                  <Bar dataKey="v" fill="#22c55e" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Productive Hours */}
        <div className="bg-gradient-to-br from-purple-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shadow-sm">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Productive Hours</h3>
                <div className="text-2xl font-bold text-[#0B1F3A]">6h 25m</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">+1h from</span> <span className="text-gray-400">yesterday</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineData3}>
                  <Bar dataKey="v" fill="#a855f7" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="bg-gradient-to-br from-orange-50/50 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-orange flex items-center justify-center text-orange-600 shadow-sm">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Completion Rate</h3>
                <div className="text-2xl font-bold text-[#0B1F3A]">62.5%</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 12%</span> <span className="text-gray-400">from last week</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklineData4}>
                  <Area type="monotone" dataKey="v" stroke="#f97316" fill="#f97316" fillOpacity={0.1} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200">
        <div className="flex gap-2">
          <button className="px-5 py-3 bg-[#FFF8E7] text-[#0B1F3A] rounded-t-lg border-b-2 border-[#D4AF37] font-bold text-sm shadow-sm relative top-[1px]">Today</button>
          <button className="px-5 py-3 text-gray-400 font-bold text-sm hover:text-[#0B1F3A]">Timeline</button>
          <button className="px-5 py-3 text-[#0B1F3A] font-bold text-sm hover:text-[#0B1F3A]">All Work</button>
          <button className="px-5 py-3 text-[#0B1F3A] font-bold text-sm hover:text-[#0B1F3A]">Calendar View</button>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-600 shadow-sm">
            All Categories <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-600 shadow-sm">
            All Status <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center bg-white border border-gray-200 rounded-md shadow-sm">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-gray-600 border-r border-gray-200">
              <Calendar className="h-3.5 w-3.5" /> Sep 28, 2026
            </button>
            <button className="p-1.5 hover:bg-gray-50 border-r border-gray-200 text-gray-400"><ChevronLeft className="h-3.5 w-3.5" /></button>
            <button className="p-1.5 hover:bg-gray-50 text-gray-400"><ChevronRight className="h-3.5 w-3.5" /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Timeline */}
        <div className="lg:col-span-2 relative">
          <div className="absolute left-[78px] top-6 bottom-6 w-px bg-gray-200 z-0"></div>

          <div className="space-y-6 relative z-10">
            {/* Task 1 */}
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 text-xs font-bold text-gray-400 pt-3">09:00 AM</div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-4 shrink-0 ring-4 ring-[#fafafa]"></div>
              <div className="flex-1 bg-white border border-gray-100 rounded-[16px] p-5 shadow-sm flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Code2 className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">LeetCode Practice</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Solved Two Sum and LRU Cache</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full badge-3d-green">Completed</span>
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4 text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 1h 30m</span>
                    <span className="flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> LeetCode</span>
                    <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5" /> Coding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 2 */}
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 text-xs font-bold text-gray-400 pt-3">11:00 AM</div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] mt-4 shrink-0 ring-4 ring-[#fafafa]"></div>
              <div className="flex-1 bg-white border border-gray-100 rounded-[16px] p-5 shadow-sm flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <Monitor className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">React Project</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Worked on Menu Valley UI improvements</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full badge-3d-blue">In Progress</span>
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4 text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 2h 15m</span>
                    <span className="flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Frontend</span>
                    <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5" /> Web Dev</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Task 3 */}
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 text-xs font-bold text-gray-400 pt-3">02:30 PM</div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-4 shrink-0 ring-4 ring-[#fafafa]"></div>
              <div className="flex-1 bg-white border border-gray-100 rounded-[16px] p-5 shadow-sm flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">Learn FastAPI</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Watched tutorial and practiced endpoints</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full badge-3d-yellow">In Progress</span>
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4 text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 1h 00m</span>
                    <span className="flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Learning</span>
                    <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5" /> Backend</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 4 */}
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 text-xs font-bold text-gray-400 pt-3">04:00 PM</div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] mt-4 shrink-0 ring-4 ring-[#fafafa]"></div>
              <div className="flex-1 bg-white border border-gray-100 rounded-[16px] p-5 shadow-sm flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[#0B1F3A]">Write Notes</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Added notes for system design concepts</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full badge-3d-gray">Not Started</span>
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4 text-[10px] font-bold text-gray-500">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 45m</span>
                    <span className="flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Notes</span>
                    <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> Study</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Sidebar Widgets */}
        <div className="space-y-6">
          {/* Today's Progress */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[16px] border border-gray-100 flex flex-col"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
            <div className="flex items-center gap-3 mb-8">
              <ListTodo className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Today's Progress</h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Completion status for today.</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between flex-1">
              <div className="relative shrink-0 flex items-center justify-center" style={{ width: '140px', height: '140px' }}>
                <div className="absolute inset-0 z-10" style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.20)) drop-shadow(0 2px 5px rgba(0,0,0,0.14))' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={progressData}
                        innerRadius={42}
                        outerRadius={60}
                        paddingAngle={3}
                        dataKey="value"
                        stroke="white"
                        strokeWidth={3}
                        cornerRadius={6}
                      >
                        {progressData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomPieTooltip />} cursor={{ fill: 'transparent' }} position={{ x: 80, y: -10 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{
                  width: '70px', height: '70px', borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #f1f5f9 100%)',
                  boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.10), inset 0 1px 3px rgba(0,0,0,0.06)',
                }}>
                  <span className="text-xl font-bold text-[#0B1F3A] leading-none">62%</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide mt-1">5 of 8 tasks</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full pl-6">
                {progressData.map(d => (
                  <div key={d.name} className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full shrink-0" style={{
                        backgroundColor: d.color,
                        boxShadow: `0 2px 6px ${d.color}66, inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.1)`,
                      }}></span>
                      <span className="text-sm font-bold text-[#0B1F3A]">{d.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#0B1F3A]">{d.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Categories Breakdown */}
          <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#D4AF37]" />
                <h3 className="font-bold text-[#0B1F3A]">Categories Breakdown</h3>
              </div>
              <button className="text-xs font-bold text-blue-500 hover:text-blue-700">View All</button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center shrink-0">
                  <Code2 className="h-3.5 w-3.5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[#0B1F3A]">LeetCode</span>
                    <span className="text-gray-400">2/3</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full shadow-[0_1px_2px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-blue-300" style={{ width: '66%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded bg-purple-50 flex items-center justify-center shrink-0">
                  <Monitor className="h-3.5 w-3.5 text-purple-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[#0B1F3A]">Projects</span>
                    <span className="text-gray-400">2/2</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-full rounded-full shadow-[0_1px_2px_rgba(168,85,247,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-purple-300" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded bg-yellow-50 flex items-center justify-center shrink-0">
                  <FileText className="h-3.5 w-3.5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[#0B1F3A]">Learning</span>
                    <span className="text-gray-400">1/1</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full shadow-[0_1px_2px_rgba(234,179,8,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-yellow-300" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded bg-green-50 flex items-center justify-center shrink-0">
                  <BookOpen className="h-3.5 w-3.5 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-[#0B1F3A]">Notes</span>
                    <span className="text-gray-400">0/1</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full shadow-[0_1px_2px_rgba(34,197,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-green-300" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Work Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Log Daily Work</h2>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Task Name</label>
                <input type="text" placeholder="e.g. Implement Login API" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                    <option>LeetCode</option>
                    <option>Projects</option>
                    <option>Learning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Time Spent (hrs)</label>
                  <input type="number" step="0.5" placeholder="e.g. 2" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Status</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Blocked</option>
                </select>
              </div>

              <button type="submit" className="w-full py-3 bg-[#0B1F3A] text-white rounded-[16px] font-bold hover:bg-[#1a365d] transition-colors mt-4">
                Save Work
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}







