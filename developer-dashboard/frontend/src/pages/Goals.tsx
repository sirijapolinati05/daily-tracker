import React from "react"
import { Target, CheckCircle2, Clock, CheckCircle, Plus } from "lucide-react"

export default function Goals() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Goals</h1>
          <p className="text-gray-500 mt-1">Set targets, track progress and stay consistent.</p>
        </div>
        <button className="px-4 py-2 bg-[#0B1F3A] text-white rounded-md font-medium text-sm hover:bg-[#163D63] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Goals</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">4</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#163D63]/10 flex items-center justify-center text-[#163D63]"><Target className="h-6 w-6" /></div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Completed</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">12</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600"><CheckCircle2 className="h-6 w-6" /></div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Overdue</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">1</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600"><Clock className="h-6 w-6" /></div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Overall Progress</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">76%</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"><CheckCircle className="h-6 w-6" /></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { title: "Complete 150 LeetCode Problems", prog: 127, target: 150, pct: 84.6, desc: "23 problems remaining" },
          { title: "Master SQL", prog: 65, target: 100, pct: 65.0, desc: "Advanced queries and indexing" },
          { title: "Complete React Project", prog: 72, target: 100, pct: 72.0, desc: "Build developer dashboard" },
          { title: "Build Portfolio", prog: 80, target: 100, pct: 80.0, desc: "Personal website" }
        ].map(goal => (
          <div key={goal.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-[#0B1F3A] text-lg">{goal.title}</h3>
              <span className="px-2.5 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold rounded-full">In Progress</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{goal.desc}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-[#0B1F3A]">{goal.prog} / {goal.target}</span>
                <span className="text-gray-500">{goal.pct}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-[#0B1F3A] h-2 rounded-full" style={{ width: `${goal.pct}%` }}></div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400 font-medium">
              <span>Medium Priority</span>
              <span>12 days remaining</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
