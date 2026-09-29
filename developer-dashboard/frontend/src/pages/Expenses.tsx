import React, { useState } from "react"
import { Wallet, Target, PieChart as PieChartIcon, BarChart2, Plus, ChevronDown, ChevronLeft, ChevronRight, Search, List, LayoutGrid, Download, MoreHorizontal, Calendar, Utensils, GraduationCap, ShoppingBag, Car, Monitor, Coffee, X } from "lucide-react"
import { AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const sparklineData1 = [{v: 5}, {v: 4}, {v: 5}, {v: 3}, {v: 4}, {v: 2}, {v: 3}] 
const sparklineData4 = [{v: 2}, {v: 3}, {v: 2}, {v: 4}, {v: 5}, {v: 6}, {v: 8}]

const categoryData = [
  { name: 'Food', value: 2120, color: '#f87171', percent: '25%' },
  { name: 'Education', value: 1899, color: '#60a5fa', percent: '22%' },
  { name: 'Shopping', value: 1750, color: '#22c55e', percent: '21%' },
  { name: 'Travel', value: 1300, color: '#eab308', percent: '15%' },
  { name: 'Tools', value: 899, color: '#a855f7', percent: '11%' },
  { name: 'Others', value: 482, color: '#f97316', percent: '6%' },
]

const spendingTrendData = [
  { name: 'Week 1', value: 3000 },
  { name: 'Week 2', value: 2000 },
  { name: 'Week 3', value: 4500 },
  { name: 'Week 4', value: 1500 },
]

const expensesList = [
  { date: "Oct 01, 2026", desc: "Lunch", cat: "Food", method: "UPI", amt: "250", color: "red", icon: <Utensils className="h-3 w-3" /> },
  { date: "Sep 30, 2026", desc: "Udemy Course", cat: "Education", method: "Credit Card", amt: "899", color: "blue", icon: <GraduationCap className="h-3 w-3" /> },
  { date: "Sep 29, 2026", desc: "Amazon Groceries", cat: "Shopping", method: "UPI", amt: "1,250", color: "green", icon: <ShoppingBag className="h-3 w-3" /> },
  { date: "Sep 28, 2026", desc: "Uber", cat: "Travel", method: "Debit Card", amt: "300", color: "yellow", icon: <Car className="h-3 w-3" /> },
  { date: "Sep 27, 2026", desc: "VS Code Extensions", cat: "Tools", method: "Credit Card", amt: "499", color: "purple", icon: <Monitor className="h-3 w-3" /> },
  { date: "Sep 26, 2026", desc: "Coffee", cat: "Food", method: "UPI", amt: "120", color: "red", icon: <Coffee className="h-3 w-3" /> },
]

export default function Expenses() {
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      {/* Background illustration/gradient area */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-[16px]"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2 text-[#0B1F3A]">
            Expenses
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Track your spending and understand where your money goes.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setShowAddExpenseModal(true)} className="px-5 py-2.5 bg-[#897127] text-white rounded-[16px] font-bold text-sm hover:bg-[#6c591e] flex items-center gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> Add Expense
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* This Month */}
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
                <Wallet className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">This Month</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹8,450</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold whitespace-nowrap"><span className="text-green-500">↓ 12%</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData1}>
                  <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Monthly Budget */}
        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Monthly Budget</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹20,000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col z-10 gap-1">
            <div className="w-full bg-green-100 rounded-full h-1.5 mt-2">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">42% used</p>
          </div>
        </div>

        {/* Remaining */}
        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
                <PieChartIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Remaining</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹11,550</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col z-10 gap-1">
            <div className="w-full bg-green-100 rounded-full h-1.5 mt-2">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '58%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">58% left</p>
          </div>
        </div>

        {/* Average Daily */}
        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
                <BarChart2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500">Average Daily</h3>
                <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹282</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end z-10">
            <p className="text-[10px] font-bold whitespace-nowrap"><span className="text-red-500">↑ 8%</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData4}>
                  <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-row items-center justify-between gap-4 mb-6 bg-white p-3 rounded-[16px] shadow-sm border border-gray-100 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center border border-gray-200 rounded-[16px] overflow-hidden h-9">
            <button className="px-3 h-full flex items-center gap-2 text-xs font-bold text-[#0B1F3A] border-r border-gray-200 hover:bg-gray-50">
              <Calendar className="h-3.5 w-3.5" /> Sep 2026 <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="px-2 h-full flex items-center hover:bg-gray-50 border-r border-gray-200 text-gray-400"><ChevronLeft className="h-4 w-4" /></button>
            <button className="px-2 h-full flex items-center hover:bg-gray-50 text-gray-400"><ChevronRight className="h-4 w-4" /></button>
          </div>
          <button className="h-9 px-3 border border-gray-200 rounded-[16px] flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shrink-0">
            All Categories <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="h-9 px-3 border border-gray-200 rounded-[16px] flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shrink-0">
            All Payment Methods <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <div className="relative w-64">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search expenses..." className="pl-9 pr-4 h-9 w-full bg-white border border-gray-200 rounded-[16px] text-xs font-medium focus:outline-none focus:border-[#D4AF37] shadow-sm text-gray-600" />
          </div>
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-[16px] p-1 h-9 shadow-sm">
            <button className="p-1.5 bg-[#FDE68A] rounded-md text-[#92400E] h-full flex items-center"><List className="h-4 w-4" /></button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 h-full flex items-center"><LayoutGrid className="h-4 w-4" /></button>
          </div>
          <button className="h-9 px-3 bg-white border border-gray-200 rounded-[16px] flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            <Download className="h-3.5 w-3.5" /> Export
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Full Width Row: Recent Expenses Table */}
        <div className="w-full bg-gradient-to-br from-slate-50 to-white rounded-[16px] border border-gray-100 flex flex-col h-[420px]"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
          <div className="p-6 pb-2 border-b border-gray-100">
            <h3 className="font-bold text-[#0B1F3A] text-lg">Recent Expenses</h3>
          </div>
          <div className="flex-1 overflow-auto rounded-b-[24px]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B1F3A] sticky top-0 border-b border-gray-200 text-[#D4AF37] font-bold">
                <tr>
                  <th className="px-4 py-3 font-bold text-[10px] uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 font-bold text-[10px] uppercase tracking-wider">Description</th>
                  <th className="px-4 py-3 font-bold text-[10px] uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3 font-bold text-[10px] uppercase tracking-wider">Payment Method</th>
                  <th className="px-4 py-3 font-bold text-[10px] uppercase tracking-wider text-right">Amount</th>
                  <th className="px-4 py-3 font-bold text-[10px] uppercase tracking-wider text-center w-[80px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {expensesList.map((exp, i) => (
                  <tr key={i} className="hover:bg-[#F8FAFC] transition-colors group">
                    <td className="px-4 py-4 text-gray-500 font-medium flex items-center gap-3">
                      <div className={`w-6 h-6 rounded bg-${exp.color}-50 text-${exp.color}-500 flex items-center justify-center shrink-0`}>
                        {exp.icon}
                      </div>
                      {exp.date}
                    </td>
                    <td className="px-4 py-4 font-bold text-[#0B1F3A] text-[13px]">{exp.desc}</td>
                    <td className="px-4 py-4">
                      <span className={`badge-3d-${exp.color} px-2.5 py-1 rounded-full text-[9px] font-bold`}>
                        {exp.cat}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-500 font-medium">{exp.method}</td>
                    <td className="px-4 py-4 text-right font-bold text-[#0B1F3A] text-[13px]">₹{exp.amt}</td>
                    <td className="px-4 py-4 text-center">
                      <button className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                        <MoreHorizontal className="h-4 w-4 mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Row: Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Breakdown */}
          {/* Category Breakdown */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[16px] border border-gray-100 flex flex-col min-h-[300px]"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
            <div className="flex items-center gap-3 mb-8">
              <PieChartIcon className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Category Breakdown</h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Distribution of your expenses.</p>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-between">
              <div className="relative shrink-0 flex items-center justify-center" style={{ width: '160px', height: '160px' }}>
                <div className="absolute inset-0" style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.20)) drop-shadow(0 2px 5px rgba(0,0,0,0.14))' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        innerRadius={50}
                        outerRadius={75}
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
                  width: '84px', height: '84px', borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #f1f5f9 100%)',
                  boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.10), inset 0 1px 3px rgba(0,0,0,0.06)',
                }}>
                  <span className="text-xl font-bold text-[#0B1F3A] leading-none">₹8,450</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">This Month</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 shrink-0 pl-6 w-1/2">
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
                      <span className="text-sm font-bold text-[#0B1F3A]">₹{d.value}</span>
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

          {/* Spending Trend */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[16px] border border-gray-100 flex flex-col min-h-[300px]"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[13px]">
                <Calendar className="h-4 w-4 text-yellow-500" /> Spending Trend
              </h3>
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50">
                This Month <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0" style={{ filter: 'drop-shadow(0 6px 12px rgba(245,158,11,0.35)) drop-shadow(0 3px 6px rgba(0,0,0,0.15))' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={spendingTrendData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBarExp" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#d97706" />
                        <stop offset="25%" stopColor="#fcd34d" />
                        <stop offset="50%" stopColor="#fef3c7" />
                        <stop offset="75%" stopColor="#fcd34d" />
                        <stop offset="100%" stopColor="#b45309" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} tickFormatter={(val) => val >= 1000 ? `₹${val/1000}K` : `₹${val}`} />
                    <Tooltip 
                      cursor={false}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '13px' }}
                      itemStyle={{ color: '#0B1F3A', fontWeight: 'bold' }}
                      formatter={(value: number) => [`₹${value}`, "Amount"]}
                    />
                    <Bar dataKey="value" fill="url(#colorBarExp)" radius={[8, 8, 0, 0]} maxBarSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Expense Modal */}
      {showAddExpenseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowAddExpenseModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Add New Expense</h2>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddExpenseModal(false); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Description</label>
                <input type="text" placeholder="e.g. Lunch" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Amount (₹)</label>
                  <input type="number" placeholder="e.g. 250" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Date</label>
                  <input type="date" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                    <option>Food</option>
                    <option>Education</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Tools</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Payment Method</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                    <option>UPI</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Cash</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-[#0B1F3A] text-white rounded-[16px] font-bold hover:bg-[#1a365d] transition-colors mt-4">
                Save Expense
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


