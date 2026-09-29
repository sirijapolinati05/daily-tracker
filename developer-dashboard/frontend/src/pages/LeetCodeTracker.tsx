import React, { useState } from "react"
import { Code2, Target, BarChart2, Trophy, MoreHorizontal, Search, List, Grid, ChevronRight, CheckCircle2, Clock, Calendar, Eye, Edit2, Trash2, X } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area } from 'recharts'

const sparklineData1 = [{ value: 10 }, { value: 15 }, { value: 8 }, { value: 12 }, { value: 20 }, { value: 18 }, { value: 25 }]
const sparklineData2 = [{ value: 4 }, { value: 3 }, { value: 5 }, { value: 7 }, { value: 6 }, { value: 8 }, { value: 9 }]
const sparklineData3 = [{ value: 10 }, { value: 5 }, { value: 15 }, { value: 8 }, { value: 12 }, { value: 25 }, { value: 18 }]
const sparklineData4 = [{ value: 2 }, { value: 1 }, { value: 3 }, { value: 1 }, { value: 4 }, { value: 2 }, { value: 5 }]

export default function LeetCodeTracker() {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="w-full relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 relative z-10">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">LeetCode Tracker</h1>
          <p className="text-gray-500 mt-2">Track your problem solving progress and notes.</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-gradient-to-br from-[#D4AF37] to-[#9A7D3C] text-white px-6 py-2.5 rounded-[16px] font-bold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2),4px_4px_10px_rgba(154,125,60,0.4)] border border-[#E5C76B]/50 hover:brightness-110 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2">
          <span className="text-lg leading-none mt-[-2px]">+</span> Add Problem
        </button>
      </div>
      
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10">
        {/* Total Solved */}
        <div className="bg-gradient-to-br from-[#EBF5FF]/60 to-white p-5 shadow-sm border border-blue-100/50 flex items-center justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex gap-4 items-center">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#EBF5FF] to-[#D6E8F9] flex items-center justify-center text-blue-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(59,130,246,0.25)] border border-white">
              <Code2 className="h-4 w-4 drop-shadow-sm" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0B1F3A]">124</h3>
              <p className="text-xs text-gray-500">Total Solved</p>
              <p className="text-[10px] text-green-500 font-medium mt-1 whitespace-nowrap">↑ +12 from last month</p>
            </div>
          </div>
          <div className="h-12 w-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklineData1}>
                <defs>
                  <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorBlue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Easy */}
        <div className="bg-gradient-to-br from-[#DCFCE7]/60 to-white p-5 shadow-sm border border-green-100/50 flex items-center justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex gap-4 items-center">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0] flex items-center justify-center text-green-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(34,197,94,0.25)] border border-white">
              <Target className="h-4 w-4 drop-shadow-sm" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0B1F3A]">68</h3>
              <p className="text-xs text-gray-500">Easy</p>
              <p className="text-[10px] text-green-500 font-medium mt-1 whitespace-nowrap">↑ +6 from last month</p>
            </div>
          </div>
          <div className="h-12 w-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklineData2}>
                <defs>
                  <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorGreen)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Medium */}
        <div className="bg-gradient-to-br from-[#FEF3C7]/60 to-white p-5 shadow-sm border border-yellow-100/50 flex items-center justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex gap-4 items-center">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex items-center justify-center text-yellow-600 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(234,179,8,0.25)] border border-white">
              <BarChart2 className="h-4 w-4 drop-shadow-sm" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0B1F3A]">42</h3>
              <p className="text-xs text-gray-500">Medium</p>
              <p className="text-[10px] text-green-500 font-medium mt-1 whitespace-nowrap">↑ +4 from last month</p>
            </div>
          </div>
          <div className="h-12 w-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklineData3}>
                <defs>
                  <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorYellow)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hard */}
        <div className="bg-gradient-to-br from-[#FEE2E2]/60 to-white p-5 shadow-sm border border-red-100/50 flex items-center justify-between" style={{ borderRadius: '16px' }}>
          <div className="flex gap-4 items-center">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#FEE2E2] to-[#FECACA] flex items-center justify-center text-red-500 shadow-[inset_2px_2px_4px_white,inset_-2px_-2px_4px_rgba(0,0,0,0.08),4px_4px_10px_rgba(239,68,68,0.25)] border border-white">
              <Trophy className="h-4 w-4 drop-shadow-sm" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0B1F3A]">14</h3>
              <p className="text-xs text-gray-500">Hard</p>
              <p className="text-[10px] text-green-500 font-medium mt-1 whitespace-nowrap">↑ +2 from last month</p>
            </div>
          </div>
          <div className="h-12 w-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklineData4}>
                <defs>
                  <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorRed)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search problems..." className="w-full pl-11 pr-5 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm" />
        </div>
        <select className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 outline-none shadow-sm cursor-pointer appearance-none">
          <option>All Difficulty</option>
        </select>
        <select className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 outline-none shadow-sm cursor-pointer appearance-none">
          <option>All Topics</option>
        </select>
        <select className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 outline-none shadow-sm cursor-pointer appearance-none">
          <option>All Languages</option>
        </select>
        <select className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 outline-none shadow-sm cursor-pointer appearance-none">
          <option>Sort by</option>
        </select>
        <div className="ml-auto flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
          <button className="p-1.5 bg-[#FDE68A] text-[#92400E] rounded-full shadow-sm">
            <List className="h-4 w-4" />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full">
            <Grid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-[16px] shadow-sm border border-gray-100 overflow-x-auto mb-6 relative z-10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="border-b border-gray-100 text-slate-600 bg-slate-50/50 font-medium">
            <tr>
              <th className="px-6 py-2.5 font-medium">S.No</th>
              <th className="px-6 py-2.5 font-medium">Problem</th>
              <th className="px-6 py-2.5 font-medium">Difficulty</th>
              <th className="px-6 py-2.5 font-medium">Topic</th>
              <th className="px-6 py-2.5 font-medium">Language</th>
              <th className="px-6 py-2.5 font-medium">Solved Date</th>
              <th className="px-6 py-2.5 font-medium">Status</th>
              <th className="px-6 py-2.5 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr className="hover:bg-gray-50/50">
              <td className="px-6 py-2.5 font-bold text-[#0B1F3A]">1</td>
              <td className="px-6 py-2.5">
                <div className="font-bold text-[#0B1F3A]">Two Sum</div>
                <div className="text-xs text-gray-400 mt-0.5">#1 • Array • Hash Table</div>
              </td>
              <td className="px-6 py-2.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold badge-3d-green">Easy</span>
              </td>
              <td className="px-6 py-2.5 text-gray-600">Array, HashMap</td>
              <td className="px-6 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white font-bold">TS</div>
                  <span className="text-gray-600">TypeScript</span>
                </div>
              </td>
              <td className="px-6 py-2.5 text-gray-600">
                <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Oct 01, 2026</div>
              </td>
              <td className="px-6 py-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold badge-3d-green">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Solved
                </span>
              </td>
              <td className="px-6 py-2.5">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors" title="View">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 text-yellow-600 bg-yellow-50 hover:bg-yellow-100 rounded-md transition-colors" title="Edit">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/50">
              <td className="px-6 py-2.5 font-bold text-[#0B1F3A]">2</td>
              <td className="px-6 py-2.5">
                <div className="font-bold text-[#0B1F3A]">LRU Cache</div>
                <div className="text-xs text-gray-400 mt-0.5">#146 • Design • Linked List</div>
              </td>
              <td className="px-6 py-2.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold badge-3d-orange">Medium</span>
              </td>
              <td className="px-6 py-2.5 text-gray-600">Design, Linked List</td>
              <td className="px-6 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-yellow-400/20 rounded flex items-center justify-center text-[10px] font-bold">🐍</div>
                  <span className="text-gray-600">Python</span>
                </div>
              </td>
              <td className="px-6 py-2.5 text-gray-600">
                <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Sep 28, 2026</div>
              </td>
              <td className="px-6 py-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold badge-3d-green">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Solved
                </span>
              </td>
              <td className="px-6 py-2.5">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors" title="View">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 text-yellow-600 bg-yellow-50 hover:bg-yellow-100 rounded-md transition-colors" title="Edit">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50/50">
              <td className="px-6 py-2.5 font-bold text-[#0B1F3A]">3</td>
              <td className="px-6 py-2.5">
                <div className="font-bold text-[#0B1F3A]">Merge K Sorted Lists</div>
                <div className="text-xs text-gray-400 mt-0.5">#23 • Heap • Linked List</div>
              </td>
              <td className="px-6 py-2.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold badge-3d-red">Hard</span>
              </td>
              <td className="px-6 py-2.5 text-gray-600">Heap, Linked List</td>
              <td className="px-6 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-red-50 rounded flex items-center justify-center text-[10px] text-red-500 font-bold">☕</div>
                  <span className="text-gray-600">Java</span>
                </div>
              </td>
              <td className="px-6 py-2.5 text-gray-600">
                <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Sep 25, 2026</div>
              </td>
              <td className="px-6 py-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold badge-3d-green">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Solved
                </span>
              </td>
              <td className="px-6 py-2.5">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors" title="View">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 text-yellow-600 bg-yellow-50 hover:bg-yellow-100 rounded-md transition-colors" title="Edit">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Difficulty Progress */}
        <div className="bg-gradient-to-br from-[#F3E8FF]/40 to-white p-6 shadow-sm border border-purple-100/50 rounded-[16px]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#0B1F3A] text-[15px]">Difficulty Progress</h3>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="w-14 text-sm font-bold text-green-500">Easy</span>
              <div className="flex-1 bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full shadow-[0_1px_2px_rgba(34,197,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-green-300" style={{width: '55%'}}></div>
              </div>
              <span className="text-xs font-bold text-green-600">68 / <span className="text-gray-400 font-medium">124</span></span>
              <span className="text-xs text-green-500 font-bold w-8 text-right">55%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-14 text-sm font-bold text-yellow-500">Medium</span>
              <div className="flex-1 bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full shadow-[0_1px_2px_rgba(234,179,8,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-yellow-300" style={{width: '34%'}}></div>
              </div>
              <span className="text-xs font-bold text-yellow-600">42 / <span className="text-gray-400 font-medium">124</span></span>
              <span className="text-xs text-yellow-500 font-bold w-8 text-right">34%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-14 text-sm font-bold text-red-500">Hard</span>
              <div className="flex-1 bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                <div className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-full shadow-[0_1px_2px_rgba(239,68,68,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-red-300" style={{width: '11%'}}></div>
              </div>
              <span className="text-xs font-bold text-red-500">14 / <span className="text-gray-400 font-medium">124</span></span>
              <span className="text-xs text-red-500 font-bold w-8 text-right">11%</span>
            </div>
          </div>
        </div>

        {/* Recently Practiced */}
        <div className="bg-gradient-to-br from-[#EBF5FF]/40 to-white p-6 shadow-sm border border-blue-100/50 rounded-[16px]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#0B1F3A] text-[15px]">Recently Practiced</h3>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
            <button className="text-blue-500 hover:text-blue-600 text-xs font-bold">View All</button>
          </div>
          
          <div className="space-y-4 overflow-x-auto pb-2">
            
            <div className="grid grid-cols-[200px_140px_180px_80px] items-center gap-4 min-w-max">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span className="font-bold text-[#0B1F3A] text-sm truncate">Two Sum</span>
              </div>
              <span className="text-[11px] text-gray-400">Today, 10:24 AM</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full badge-3d-gray text-[10px] font-medium">Array</span>
                <span className="px-3 py-1 rounded-full badge-3d-gray text-[10px] font-medium">Hash Table</span>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-green">Easy</span>
              </div>
            </div>

            <div className="grid grid-cols-[200px_140px_180px_80px] items-center gap-4 min-w-max">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="font-bold text-[#0B1F3A] text-sm truncate">LRU Cache</span>
              </div>
              <span className="text-[11px] text-gray-400">Yesterday, 08:17 PM</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full badge-3d-gray text-[10px] font-medium">Design</span>
                <span className="px-3 py-1 rounded-full badge-3d-gray text-[10px] font-medium">Linked List</span>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-orange">Medium</span>
              </div>
            </div>

            <div className="grid grid-cols-[200px_140px_180px_80px] items-center gap-4 min-w-max">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" />
                <span className="font-bold text-[#0B1F3A] text-sm truncate">Merge K Sorted Lists</span>
              </div>
              <span className="text-[11px] text-gray-400">Sep 25, 2026</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full badge-3d-gray text-[10px] font-medium">Heap</span>
                <span className="px-3 py-1 rounded-full badge-3d-gray text-[10px] font-medium">Linked List</span>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold badge-3d-red">Hard</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Add Problem Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Add Problem</h2>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Problem Title</label>
                <input type="text" placeholder="e.g. Two Sum" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Difficulty</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Status</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                    <option>Solved</option>
                    <option>Attempted</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Topic Tags (comma separated)</label>
                <input type="text" placeholder="e.g. Array, Hash Table" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>

              <button type="submit" className="w-full py-3 bg-[#0B1F3A] text-white rounded-[16px] font-bold hover:bg-[#1a365d] transition-colors mt-4">
                Save Problem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}




