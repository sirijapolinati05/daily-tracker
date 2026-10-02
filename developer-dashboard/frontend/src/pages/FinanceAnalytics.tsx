import React, { useState } from "react"
import { Wallet, Target, PieChart as PieChartIcon, BarChart2, ChevronDown, Calendar } from "lucide-react"
import { AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const expenseSparkline = [{v: 5}, {v: 4}, {v: 5}, {v: 3}, {v: 4}, {v: 2}, {v: 3}]
const expenseDailySparkline = [{v: 2}, {v: 3}, {v: 2}, {v: 4}, {v: 5}, {v: 6}, {v: 8}]
const incomeSparkline = [{v: 5}, {v: 6}, {v: 5}, {v: 7}, {v: 8}, {v: 6}, {v: 9}]
const incomeDailySparkline = [{v: 4}, {v: 3}, {v: 5}, {v: 4}, {v: 6}, {v: 7}, {v: 9}]

const dailySpendingData = [
  { name: '1st',  amount: 450 }, { name: '5th',  amount: 800 }, { name: '10th', amount: 1200 },
  { name: '15th', amount: 300 }, { name: '20th', amount: 2450 }, { name: '25th', amount: 850 },
  { name: '30th', amount: 650 },
]

const dailyIncomeData = [
  { name: '1st',  amount: 85000 }, { name: '5th',  amount: 2000 }, { name: '10th', amount: 0 },
  { name: '15th', amount: 5000 }, { name: '20th', amount: 1500 }, { name: '25th', amount: 3500 },
  { name: '30th', amount: 3000 },
]

const expenseCategoryData = [
  { name: 'Food',          value: 3250, color: '#1e3a5f', percent: '38%' },
  { name: 'Shopping',      value: 2100, color: '#60a5fa', percent: '25%' },
  { name: 'Education',     value: 1200, color: '#a5b4fc', percent: '14%' },
  { name: 'Travel',        value: 750,  color: '#34d399', percent: '9%'  },
  { name: 'Subscriptions', value: 600,  color: '#c4b5fd', percent: '7%'  },
  { name: 'Others',        value: 550,  color: '#d1d5db', percent: '7%'  },
]

const incomeCategoryData = [
  { name: 'Salary',      value: 85000, color: '#166534', percent: '85%' },
  { name: 'Freelance',   value: 10000, color: '#22c55e', percent: '10%' },
  { name: 'Investments', value: 3000,  color: '#86efac', percent: '3%'  },
  { name: 'Side Hustle', value: 1500,  color: '#34d399', percent: '1.5%'  },
  { name: 'Other',       value: 500,   color: '#d1d5db', percent: '0.5%'  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 shadow-lg rounded-[16px] px-4 py-3">
        <p className="text-[11px] font-bold text-gray-400 mb-1">{label}</p>
        <p className="text-[15px] font-extrabold text-[#0B1F3A]">₹{payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="font-extrabold text-[#0B1F3A] text-[13px] pointer-events-none whitespace-nowrap -translate-x-1/2" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,1), 0 0 2px rgba(255,255,255,1)' }}>
        {payload[0].name}: ₹{payload[0].value.toLocaleString()}
      </div>
    )
  }
  return null
}

export default function FinanceAnalytics() {
  const [tab, setTab] = useState<'income' | 'expense'>('income')

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      <div className={`absolute top-0 left-0 right-0 h-64 -z-10 rounded-[16px] transition-colors duration-500 bg-gradient-to-br ${tab === 'income' ? 'from-[#dcfce7]/30 to-[#bbf7d0]/10' : 'from-[#FEF3C7]/30 to-[#FDE68A]/10'}`}></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-[#0B1F3A]">Finance </span>
            <span className="text-[#D4AF37]">Analytics</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Analyze your cash flow, earnings, and spending in one place.</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1 border border-gray-200 shadow-sm flex">
                <button onClick={() => setTab('income')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${tab === 'income' ? 'bg-[#22c55e] text-white shadow-md' : 'text-gray-500 hover:text-[#0B1F3A]'}`}>Income</button>
                <button onClick={() => setTab('expense')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${tab === 'expense' ? 'bg-[#3b82f6] text-white shadow-md' : 'text-gray-500 hover:text-[#0B1F3A]'}`}>Expenses</button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-[16px] text-sm font-bold text-[#0B1F3A] shadow-sm hover:bg-gray-50 whitespace-nowrap h-10">
            <Calendar className="h-4 w-4 text-gray-400" />
            Sep 2026
            <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className={`transition-opacity duration-300 ${tab === 'income' ? 'block' : 'hidden'}`}>
        <IncomeView />
      </div>
      <div className={`transition-opacity duration-300 ${tab === 'expense' ? 'block' : 'hidden'}`}>
        <ExpenseView />
      </div>
    </div>
  )
}

function IncomeView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shrink-0">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Total Income</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹1,00,000</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 15%</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incomeSparkline}>
                  <Line type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Monthly Goal</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹1,20,000</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full shadow-[0_1px_2px_rgba(34,197,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-green-300" style={{ width: '83%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">83% achieved</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
              <PieChartIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Non-Salary</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹15,000</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full shadow-[0_1px_2px_rgba(234,179,8,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-yellow-300" style={{ width: '15%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-yellow-600">15% of total</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
              <BarChart2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Average Daily Earning</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹3,333</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 5%</span> <span className="text-gray-400">from last month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incomeDailySparkline}>
                  <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[15px]">
              <Calendar className="h-4 w-4 text-green-500" /> Income Trend
            </h3>
          </div>
          <div className="flex-1 min-h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyIncomeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 600 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }} tickFormatter={(v) => `₹${v >= 1000 ? v/1000 + 'K' : v}`} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#22c55e', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area type="monotone" dataKey="amount" stroke="#22c55e" strokeWidth={3} fill="url(#colorIncome)" dot={{ r: 5, fill: '#22c55e', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 7, fill: '#22c55e', stroke: '#fff', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-[16px] border border-gray-100 p-6 flex flex-col" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
          <div className="flex items-center gap-3 mb-6">
            <PieChartIcon className="h-6 w-6 text-[#22c55e]" />
            <div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">Source Distribution</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Breakdown of income.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-center relative flex-1 min-h-[160px]">
              <div className="relative shrink-0 flex items-center justify-center" style={{ width: '160px', height: '160px' }}>
                <div className="absolute inset-0 z-10" style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.20)) drop-shadow(0 2px 5px rgba(0,0,0,0.14))' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={incomeCategoryData} innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value" stroke="white" strokeWidth={3} cornerRadius={6}>
                        {incomeCategoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip content={<CustomPieTooltip />} cursor={{ fill: 'transparent' }} position={{ x: 80, y: -10 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #f1f5f9 100%)', boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.10), inset 0 1px 3px rgba(0,0,0,0.06)' }}>
                  <span className="text-xl font-bold text-[#0B1F3A] leading-none">₹1L</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Earned</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              {incomeCategoryData.map(d => (
                <div key={d.name} className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: d.color }}></span>
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#0B1F3A]">₹{d.value.toLocaleString()}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${d.color}15`, color: d.color }}>{d.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ExpenseView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
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
                <LineChart data={expenseSparkline}>
                  <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Monthly Budget</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹20,000</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full shadow-[0_1px_2px_rgba(34,197,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-green-300" style={{ width: '42%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">42% used</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-yellow flex items-center justify-center text-yellow-600 shrink-0">
              <PieChartIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Remaining</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">₹11,550</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-full bg-gray-100 rounded-full h-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full shadow-[0_1px_2px_rgba(34,197,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-green-300" style={{ width: '58%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-green-600">58% left</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
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
                <LineChart data={expenseDailySparkline}>
                  <Line type="monotone" dataKey="v" stroke="#a855f7" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 flex flex-col">
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
                <Area type="monotone" dataKey="amount" stroke="#D4AF37" strokeWidth={3} fill="url(#colorSpend)" dot={{ r: 5, fill: '#D4AF37', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 7, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-[16px] border border-gray-100 p-6 flex flex-col" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
          <div className="flex items-center gap-3 mb-6">
            <PieChartIcon className="h-6 w-6 text-[#D4AF37]" />
            <div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">Category Distribution</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Breakdown of expenses.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-center relative flex-1 min-h-[160px]">
              <div className="relative shrink-0 flex items-center justify-center" style={{ width: '160px', height: '160px' }}>
                <div className="absolute inset-0 z-10" style={{ filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.20)) drop-shadow(0 2px 5px rgba(0,0,0,0.14))' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={expenseCategoryData} innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value" stroke="white" strokeWidth={3} cornerRadius={6}>
                        {expenseCategoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip content={<CustomPieTooltip />} cursor={{ fill: 'transparent' }} position={{ x: 80, y: -10 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #f1f5f9 100%)', boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.10), inset 0 1px 3px rgba(0,0,0,0.06)' }}>
                  <span className="text-xl font-bold text-[#0B1F3A] leading-none">₹8,450</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Total Spent</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              {expenseCategoryData.map(d => (
                <div key={d.name} className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: d.color }}></span>
                    <span className="text-sm font-bold text-[#0B1F3A]">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#0B1F3A]">₹{d.value.toLocaleString()}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${d.color}15`, color: d.color }}>{d.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
