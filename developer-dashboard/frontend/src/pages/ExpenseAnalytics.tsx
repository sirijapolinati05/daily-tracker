import React from "react"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const monthlyData = [
  { name: '1st', amount: 450 },
  { name: '5th', amount: 800 },
  { name: '10th', amount: 1200 },
  { name: '15th', amount: 300 },
  { name: '20th', amount: 2500 },
  { name: '25th', amount: 850 },
  { name: '30th', amount: 600 },
]

const categoryData = [
  { name: 'Food', value: 3250, color: '#0B1F3A' },
  { name: 'Shopping', value: 2100, color: '#163D63' },
  { name: 'Education', value: 1500, color: '#D4AF37' },
  { name: 'Travel', value: 900, color: '#E5C76B' },
  { name: 'Other', value: 700, color: '#E2E8F0' },
]

export default function ExpenseAnalytics() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Expense Analytics</h1>
          <p className="text-gray-500 mt-1">Understand your spending patterns and manage your budget.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">Daily Spending</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} tickFormatter={(val) => `₹${val}`} />
                <Tooltip cursor={{ stroke: '#D4AF37', strokeWidth: 1, strokeDasharray: '4 4' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="amount" stroke="#0B1F3A" strokeWidth={3} dot={{ r: 4, fill: '#0B1F3A' }} activeDot={{ r: 6, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">Category Distribution</h3>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value}`} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex flex-col gap-2 text-sm font-medium">
            {categoryData.map(d => (
              <div key={d.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }}></span>
                  <span className="text-gray-600">{d.name}</span>
                </div>
                <span className="text-[#0B1F3A] font-bold">₹{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
