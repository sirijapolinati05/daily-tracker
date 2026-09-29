import React from "react"
import { Wallet, Target, PieChart as PieChartIcon, BarChart2, ChevronDown, Calendar, ArrowRight } from "lucide-react"
import { AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const sparklineData1 = [{v: 5}, {v: 4}, {v: 5}, {v: 3}, {v: 4}, {v: 2}, {v: 3}]
const sparklineData4 = [{v: 2}, {v: 3}, {v: 2}, {v: 4}, {v: 5}, {v: 6}, {v: 8}]

const dailySpendingData = [
  { name: '1st',  amount: 450 },
  { name: '5th',  amount: 800 },
  { name: '10th', amount: 1200 },
  { name: '15th', amount: 300 },
  { name: '20th', amount: 2450 },
  { name: '25th', amount: 850 },
  { name: '30th', amount: 650 },
]

const categoryData = [
  { name: 'Food',          value: 3250, color: '#1e3a5f', percent: '38%' },
  { name: 'Shopping',      value: 2100, color: '#60a5fa', percent: '25%' },
  { name: 'Education',     value: 1200, color: '#a5b4fc', percent: '14%' },
  { name: 'Travel',        value: 750,  color: '#34d399', percent: '9%'  },
  { name: 'Subscriptions', value: 600,  color: '#c4b5fd', percent: '7%'  },
  { name: 'Others',        value: 550,  color: '#d1d5db', percent: '7%'  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-3">
        <p className="text-[11px] font-bold text-gray-400 mb-1">{label}</p>
        <p className="text-[15px] font-extrabold text-[#0B1F3A]">₹{payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export default function ExpenseAnalytics() {
  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-xl"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-[#0B1F3A]">Expense </span>
            <span className="text-[#D4AF37]">Analytics</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Understand your spending patterns and manage your budget.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[#0B1F3A] shadow-sm hover:bg-gray-50 whitespace-nowrap">
          <Calendar className="h-4 w-4 text-gray-400" />
          Sep 01, 2026 – Sep 30, 2026
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Total Spending */}
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Total Spending</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹8,450</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold"><span className="text-green-500">↓ 12%</span> <span className="text-gray-400">from last month</span></p>
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
        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-green flex items-center justify-center text-green-600 shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Monthly Budget</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹20,000</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-green-100 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">42% used</p>
          </div>
        </div>

        {/* Remaining */}
        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
              <PieChartIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Remaining</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹11,550</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-green-100 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '58%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">58% left</p>
          </div>
        </div>

        {/* Average Daily */}
        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[16px] badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
              <BarChart2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Average Daily</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹282</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold"><span className="text-red-500">↑ 8%</span> <span className="text-gray-400">from last month</span></p>
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

      {/* Tab Row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="px-5 py-2 bg-[#FDE68A] text-[#92400E] rounded-full font-bold text-sm shadow-sm">Overview</button>
        <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm">Trends</button>
        <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm">Category Analysis</button>
        <button className="px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-full font-bold text-sm hover:bg-gray-50 shadow-sm">Payment Methods</button>
        <div className="ml-auto flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 shadow-sm hover:bg-gray-50">
            Daily <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 shadow-sm hover:bg-gray-50">
            All Categories <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending Trend - Area Chart */}
        <div className="lg:col-span-2 bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[15px]">
              <Calendar className="h-4 w-4 text-yellow-500" /> Spending Trend
            </h3>
          </div>
          <div className="flex-1 min-h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailySpendingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#FDE68A" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FDE68A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 600 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} tickFormatter={(v) => `₹${v >= 1000 ? v/1000 + 'K' : v}`} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#D4AF37', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#D4AF37"
                  strokeWidth={3}
                  fill="url(#colorSpend)"
                  dot={{ r: 5, fill: '#D4AF37', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 7, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[15px]">
              <PieChartIcon className="h-4 w-4 text-yellow-500" /> Category Distribution
            </h3>
            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg p-1">
              <button className="px-2.5 py-1 bg-[#FDE68A] rounded-md text-[#92400E] text-[10px] font-bold">Amount</button>
              <button className="px-2.5 py-1 text-gray-400 text-[10px] font-bold hover:text-gray-600">Percentage</button>
            </div>
          </div>

          {/* Donut */}
          <div className="flex items-center justify-center relative my-2">
            <div className="w-44 h-44 relative shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} innerRadius={52} outerRadius={78} paddingAngle={3} dataKey="value" stroke="none">
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-extrabold text-[#0B1F3A] leading-none">₹8,450</span>
                <span className="text-[10px] font-bold text-gray-400 mt-1">Total Spent</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2.5 mt-3">
            {categoryData.map(cat => (
              <div key={cat.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }}></div>
                  <span className="font-bold text-gray-600">{cat.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-[#0B1F3A]">₹{cat.value.toLocaleString()}</span>
                  <span className="font-bold text-gray-400 w-8 text-right">{cat.percent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
