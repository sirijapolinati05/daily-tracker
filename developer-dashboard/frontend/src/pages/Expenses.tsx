import React from "react"
import { Wallet, Target, PieChart as PieChartIcon, BarChart2, Plus, ChevronDown, ChevronLeft, ChevronRight, Search, List, LayoutGrid, Download, MoreHorizontal, Calendar, Utensils, GraduationCap, ShoppingBag, Car, Monitor, Coffee } from "lucide-react"
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
  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      {/* Background illustration/gradient area */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-xl"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2 text-[#0B1F3A]">
            Expenses
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Track your spending and understand where your money goes.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-[#897127] text-white rounded-lg font-bold text-sm hover:bg-[#6c591e] flex items-center gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> Add Expense
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* This Month */}
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[16px] badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
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
        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[16px] badge-3d-green flex items-center justify-center text-green-600 shrink-0">
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
        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[16px] badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
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
        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[16px] badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
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
      <div className="flex flex-row items-center justify-between gap-4 mb-6 bg-white p-3 rounded-[20px] shadow-sm border border-gray-100 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-9">
            <button className="px-3 h-full flex items-center gap-2 text-xs font-bold text-[#0B1F3A] border-r border-gray-200 hover:bg-gray-50">
              <Calendar className="h-3.5 w-3.5" /> Sep 2026 <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button className="px-2 h-full flex items-center hover:bg-gray-50 border-r border-gray-200 text-gray-400"><ChevronLeft className="h-4 w-4" /></button>
            <button className="px-2 h-full flex items-center hover:bg-gray-50 text-gray-400"><ChevronRight className="h-4 w-4" /></button>
          </div>
          <button className="h-9 px-3 border border-gray-200 rounded-lg flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shrink-0">
            All Categories <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="h-9 px-3 border border-gray-200 rounded-lg flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shrink-0">
            All Payment Methods <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <div className="relative w-64">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search expenses..." className="pl-9 pr-4 h-9 w-full bg-white border border-gray-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#D4AF37] shadow-sm text-gray-600" />
          </div>
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 h-9 shadow-sm">
            <button className="p-1.5 bg-[#FDE68A] rounded-md text-[#92400E] h-full flex items-center"><List className="h-4 w-4" /></button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 h-full flex items-center"><LayoutGrid className="h-4 w-4" /></button>
          </div>
          <button className="h-9 px-3 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            <Download className="h-3.5 w-3.5" /> Export
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Full Width Row: Recent Expenses Table */}
        <div className="w-full bg-white rounded-[24px] shadow-sm border border-gray-100 flex flex-col h-[420px]">
          <div className="p-6 pb-2 border-b border-gray-100">
            <h3 className="font-bold text-[#0B1F3A] text-lg">Recent Expenses</h3>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-white sticky top-0 border-b border-gray-100 text-gray-400 font-medium">
                <tr>
                  <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-wider">Payment Method</th>
                  <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-wider text-right">Amount</th>
                  <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {expensesList.map((exp, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4 text-gray-500 font-medium flex items-center gap-3">
                      <div className={`w-6 h-6 rounded bg-${exp.color}-50 text-${exp.color}-500 flex items-center justify-center shrink-0`}>
                        {exp.icon}
                      </div>
                      {exp.date}
                    </td>
                    <td className="px-6 py-4 font-bold text-[#0B1F3A] text-[13px]">{exp.desc}</td>
                    <td className="px-6 py-4">
                      <span className={`badge-3d-${exp.color} px-2.5 py-1 rounded-full text-[9px] font-bold`}>
                        {exp.cat}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 font-medium">{exp.method}</td>
                    <td className="px-6 py-4 text-right font-bold text-[#0B1F3A] text-[13px]">₹{exp.amt}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-gray-300 hover:text-gray-600 transition-colors">
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
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col min-h-[300px]">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 mb-4 text-[13px]">
              <PieChartIcon className="h-4 w-4 text-yellow-500" /> Category Breakdown
            </h3>
            <div className="flex-1 flex flex-row items-center justify-center gap-8 relative mt-2">
              <div className="w-48 h-48 relative shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
                  <span className="text-2xl font-bold text-[#0B1F3A] leading-none">₹8,450</span>
                  <span className="text-[11px] font-bold text-gray-400 mt-1">This Month</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 shrink-0">
                {categoryData.map(cat => (
                  <div key={cat.name} className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2 w-[85px]">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }}></div>
                      <span className="font-bold text-gray-500">{cat.name}</span>
                    </div>
                    <span className="font-bold text-[#0B1F3A] w-[50px] text-right">₹{cat.value}</span>
                    <span className="font-bold text-gray-400 w-[30px] text-right">{cat.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spending Trend */}
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col min-h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[13px]">
                <Calendar className="h-4 w-4 text-yellow-500" /> Spending Trend
              </h3>
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50">
                This Month <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendingTrendData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBarExp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#fcd34d" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} tickFormatter={(val) => val >= 1000 ? `₹${val/1000}K` : `₹${val}`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '13px' }}
                    itemStyle={{ color: '#0B1F3A', fontWeight: 'bold' }}
                    formatter={(value: number) => [`₹${value}`, "Amount"]}
                  />
                  <Bar dataKey="value" fill="url(#colorBarExp)" radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
