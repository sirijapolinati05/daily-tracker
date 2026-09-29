import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Flame, Code2, Target, Calendar } from "lucide-react"

const weeklyData = [
  { name: 'Mon', problems: 4 },
  { name: 'Tue', problems: 3 },
  { name: 'Wed', problems: 7 },
  { name: 'Thu', problems: 2 },
  { name: 'Fri', problems: 5 },
  { name: 'Sat', problems: 8 },
  { name: 'Sun', problems: 6 },
]

const difficultyData = [
  { name: 'Easy', value: 54, color: '#22c55e' },
  { name: 'Medium', value: 58, color: '#f59e0b' },
  { name: 'Hard', value: 15, color: '#ef4444' },
]

export default function CodingAnalytics() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Coding Analytics</h1>
          <p className="text-gray-500 mt-1">Detailed statistics and insights on your coding journey.</p>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Solved</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">127</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#163D63]/10 flex items-center justify-center text-[#163D63]">
            <Code2 className="h-6 w-6" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Current Streak</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">12 Days</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Flame className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Longest Streak</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">24 Days</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            <Target className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">This Month</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">35</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#102A43]/10 flex items-center justify-center text-[#102A43]">
            <Calendar className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">Weekly Problems Solved</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="problems" fill="#0B1F3A" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">Difficulty Distribution</h3>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyData}
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-[#0B1F3A]">127</span>
              <span className="text-sm text-gray-500 font-medium">Solved</span>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-sm font-medium">
            {difficultyData.map(d => (
              <div key={d.name} className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }}></span>
                <span className="text-gray-600">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
