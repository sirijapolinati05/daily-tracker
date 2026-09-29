import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function CodingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("September 28, 2026")

  // Generate 52 weeks of dummy data blocks (7 days each)
  const weeks = Array.from({ length: 52 }, () => 
    Array.from({ length: 7 }, () => {
      // Randomly assign intensity 0-4
      const intensity = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0
      return intensity
    })
  )

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-gray-100"
      case 1: return "bg-[#163D63]/30"
      case 2: return "bg-[#163D63]/60"
      case 3: return "bg-[#163D63]/90"
      case 4: return "bg-[#0B1F3A]" // Darkest blue
      default: return "bg-gray-100"
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Coding Calendar</h1>
          <p className="text-gray-500 mt-1">A visual history of your daily coding activities.</p>
        </div>
        <div className="flex bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
          <button className="px-3 py-1.5 border-r border-gray-200 hover:bg-gray-50 text-gray-600 font-medium text-sm">2026</button>
          <button className="px-3 py-1.5 hover:bg-gray-50 text-gray-400 font-medium text-sm">2025</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#0B1F3A] text-lg">Contribution History</h3>
              <div className="flex items-center text-sm font-medium text-gray-500 gap-4">
                <span>1,024 Contributions</span>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-1 min-w-max">
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1">
                    {week.map((intensity, dIndex) => (
                      <div 
                        key={dIndex} 
                        className={`w-3.5 h-3.5 rounded-[2px] cursor-pointer hover:ring-2 hover:ring-[#D4AF37] hover:ring-offset-1 transition-all ${getColorClass(intensity)}`}
                        onClick={() => setSelectedDate(`September ${Math.floor(Math.random() * 28) + 1}, 2026`)}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4 text-xs font-medium text-gray-400">
              <div className="flex gap-8">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-3 h-3 rounded-[2px] bg-gray-100"></div>
                <div className="w-3 h-3 rounded-[2px] bg-[#163D63]/30"></div>
                <div className="w-3 h-3 rounded-[2px] bg-[#163D63]/60"></div>
                <div className="w-3 h-3 rounded-[2px] bg-[#163D63]/90"></div>
                <div className="w-3 h-3 rounded-[2px] bg-[#0B1F3A]"></div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D4AF37] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
            <div className="flex items-center justify-between mb-4 text-[#0B1F3A]">
              <h3 className="font-bold text-lg">{selectedDate}</h3>
              <Calendar className="h-5 w-5 text-[#D4AF37]" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#163D63]/10 flex items-center justify-center shrink-0 text-[#163D63] mt-0.5">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-[#0B1F3A] text-sm">Problems Solved</p>
                  <p className="text-xs text-gray-500 mt-0.5">Two Sum, LRU Cache, Merge Intervals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-orange-500 mt-0.5">
                  <span className="font-bold text-sm">2h</span>
                </div>
                <div>
                  <p className="font-medium text-[#0B1F3A] text-sm">Coding Duration</p>
                  <p className="text-xs text-gray-500 mt-0.5">Active focused practice sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-500 mt-0.5">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-[#0B1F3A] text-sm">Learning Session</p>
                  <p className="text-xs text-gray-500 mt-0.5">Studied System Design fundamentals</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-2 bg-gray-50 hover:bg-gray-100 text-[#0B1F3A] font-medium text-sm rounded-md transition-colors">
              View Full Day Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
