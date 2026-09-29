import React from "react"
import { BookOpen, CheckCircle2, Clock, FileText, Plus } from "lucide-react"

export default function Learning() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Learning</h1>
          <p className="text-gray-500 mt-1">Track what you're learning and build your technical skills.</p>
        </div>
        <button className="px-4 py-2 bg-[#0B1F3A] text-white rounded-md font-medium text-sm hover:bg-[#163D63] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Learning
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Learning</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">5</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#163D63]/10 flex items-center justify-center text-[#163D63]"><BookOpen className="h-6 w-6" /></div>
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
            <p className="text-sm text-gray-500 font-medium">Learning Hours</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">42h</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"><Clock className="h-6 w-6" /></div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Average Progress</p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">68%</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-[#102A43]/10 flex items-center justify-center text-[#102A43]"><FileText className="h-6 w-6" /></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { title: "Advanced React Patterns", tech: "React", pct: 72, time: "8h 30m", status: "Learning" },
          { title: "SQL Interview Preparation", tech: "SQL", pct: 85, time: "12h", status: "Learning" },
          { title: "Python FastAPI", tech: "FastAPI", pct: 45, time: "6h", status: "Learning" },
          { title: "Git & GitHub", tech: "Git", pct: 100, time: "4h", status: "Completed" }
        ].map(item => (
          <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-[#0B1F3A] text-lg">{item.title}</h3>
                <p className="text-sm text-[#D4AF37] font-bold mt-0.5">{item.tech}</p>
              </div>
              <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{item.status}</span>
            </div>
            
            <div className="space-y-2 mt-6">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Progress</span>
                <span className="text-[#0B1F3A]">{item.pct}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className={`h-2 rounded-full ${item.status === 'Completed' ? 'bg-green-500' : 'bg-[#0B1F3A]'}`} style={{ width: `${item.pct}%` }}></div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Time Spent: {item.time}</span>
              <button className="text-[#0B1F3A] font-bold hover:text-[#D4AF37]">Update Progress</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
