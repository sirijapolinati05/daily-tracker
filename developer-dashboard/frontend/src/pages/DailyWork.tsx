import React from "react"
import { Target, Plus, CheckCircle2, Clock, CheckCircle } from "lucide-react"

export default function DailyWork() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Daily Work</h1>
          <p className="text-gray-500 mt-1">Plan, track and review everything you work on each day.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-200 bg-white text-gray-700 rounded-md font-medium text-sm hover:bg-gray-50">
            Today
          </button>
          <button className="px-4 py-2 bg-[#0B1F3A] text-white rounded-md font-medium text-sm hover:bg-[#163D63] flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add Work
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Today's Tasks</h3>
            <Target className="h-5 w-5 text-[#0B1F3A]" />
          </div>
          <div className="text-3xl font-bold text-[#0B1F3A]">8</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Completed</h3>
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-[#0B1F3A]">5</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Productive Hours</h3>
            <Clock className="h-5 w-5 text-[#D4AF37]" />
          </div>
          <div className="text-3xl font-bold text-[#0B1F3A]">6h 25m</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
            <CheckCircle className="h-5 w-5 text-[#102A43]" />
          </div>
          <div className="text-3xl font-bold text-[#0B1F3A]">62.5%</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex gap-6">
          <button className="text-[#0B1F3A] font-medium text-sm border-b-2 border-[#D4AF37] pb-4 -mb-4">Today</button>
          <button className="text-gray-500 font-medium text-sm pb-4 -mb-4 hover:text-[#0B1F3A]">Timeline</button>
          <button className="text-gray-500 font-medium text-sm pb-4 -mb-4 hover:text-[#0B1F3A]">All Work</button>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 text-sm font-medium text-gray-500 pt-1">09:00 AM</div>
              <div className="w-3 h-3 rounded-full bg-[#D4AF37] mt-1.5 shrink-0 relative z-10"></div>
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#0B1F3A]">LeetCode Practice</h4>
                    <p className="text-sm text-gray-500 mt-1">Solved Two Sum and LRU Cache</p>
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Completed</span>
                </div>
                <div className="mt-4 flex gap-4 text-xs font-medium text-gray-500">
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 1h 30m</span>
                  <span className="flex items-center gap-1.5">Category: LeetCode</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="absolute left-[78px] top-[-20px] bottom-[-20px] w-0.5 bg-gray-100"></div>
              <div className="w-16 shrink-0 text-sm font-medium text-gray-500 pt-1">11:00 AM</div>
              <div className="w-3 h-3 rounded-full bg-[#0B1F3A] mt-1.5 shrink-0 relative z-10"></div>
              <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[#0B1F3A]">React Project</h4>
                    <p className="text-sm text-gray-500 mt-1">Building the new DevTrack dashboard UI</p>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">In Progress</span>
                </div>
                <div className="mt-4 flex gap-4 text-xs font-medium text-gray-500">
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 2h</span>
                  <span className="flex items-center gap-1.5">Category: Project</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 text-sm font-medium text-gray-500 pt-1">03:00 PM</div>
              <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5 shrink-0 relative z-10"></div>
              <div className="flex-1 bg-gray-50/50 border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-400">SQL Learning</h4>
                    <p className="text-sm text-gray-400 mt-1">Advanced Joins and Window Functions</p>
                  </div>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Planned</span>
                </div>
                <div className="mt-4 flex gap-4 text-xs font-medium text-gray-400">
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 1h</span>
                  <span className="flex items-center gap-1.5">Category: Learning</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
