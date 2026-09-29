import React, { useState } from "react"
import { Briefcase, Send, Clock, Trophy, Plus, Search, ChevronDown, MoreHorizontal, MapPin, Calendar, LayoutGrid, List, ArrowRight, Phone, FileText, Check, X } from "lucide-react"
import { BarChart, Bar, ResponsiveContainer } from "recharts"

const sparklineBlue = [{v:2},{v:3},{v:4},{v:3},{v:5},{v:6},{v:8}]
const sparklineGreen = [{v:1},{v:2},{v:2},{v:3},{v:4},{v:4},{v:5}]
const sparklinePurple = [{v:1},{v:1},{v:2},{v:1},{v:2},{v:3},{v:3}]
const sparklineGold = [{v:0},{v:0},{v:0},{v:1},{v:0},{v:1},{v:1}]

type Stage = "Applied" | "Screening" | "Interview" | "Offer" | "Rejected" | "Walk-in"

const STAGES: Stage[] = ["Applied", "Screening", "Interview", "Offer", "Walk-in"]

const statusConfig: Record<Stage, { badge: string; color: string }> = {
  Applied:   { badge: "badge-3d-blue text-blue-600", color: "#3b82f6" },
  Screening: { badge: "badge-3d-yellow text-yellow-600", color: "#f97316" },
  Interview: { badge: "badge-3d-purple text-purple-600", color: "#9333ea" },
  Offer:     { badge: "badge-3d-green text-green-600", color: "#22c55e" },
  Rejected:  { badge: "badge-3d-red text-red-600", color: "#ef4444" },
  "Walk-in": { badge: "badge-3d-indigo text-indigo-600", color: "#4f46e5" },
}

const progressSteps: Record<Stage, number> = {
  Applied: 1, Screening: 2, Interview: 3, Offer: 4, Rejected: 0, "Walk-in": 1,
}

const jobs = [
  {
    id: 1, company: "Google", role: "Software Engineer II", location: "Hyderabad, India",
    appliedDate: "Sep 25, 2026", salary: "₹35–45 LPA", status: "Interview" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    progress: 75, nextStepIcon: <ArrowRight className="h-3.5 w-3.5" />,
    nextStepText: "System Design Interview – Oct 5, 2026", nextStepColor: "text-[#eab308]"
  },
  {
    id: 2, company: "Microsoft", role: "Full Stack Developer", location: "Bengaluru, India",
    appliedDate: "Sep 22, 2026", salary: "₹28–38 LPA", status: "Screening" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    progress: 40, nextStepIcon: <Phone className="h-3.5 w-3.5" />,
    nextStepText: "HR Call – Oct 2, 2026", nextStepColor: "text-[#eab308]"
  },
  {
    id: 3, company: "Amazon", role: "SDE-II Backend", location: "Hyderabad, India",
    appliedDate: "Sep 18, 2026", salary: "₹32–42 LPA", status: "Applied" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    progress: 25, nextStepIcon: <FileText className="h-3.5 w-3.5" />,
    nextStepText: "Online Assessment – Sep 28, 2026", nextStepColor: "text-[#0B1F3A]"
  },
  {
    id: 4, company: "Flipkart", role: "React Developer", location: "Bengaluru, India",
    appliedDate: "Sep 10, 2026", salary: "₹18–25 LPA", status: "Offer" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg",
    progress: 100, nextStepIcon: null, nextStepText: "", nextStepColor: ""
  },
  {
    id: 5, company: "Adobe", role: "Frontend Developer", location: "Noida, India",
    appliedDate: "Sep 15, 2026", salary: "₹20–30 LPA", status: "Screening" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_Icon.svg",
    progress: 50, nextStepIcon: null, nextStepText: "", nextStepColor: ""
  },
  {
    id: 6, company: "TCS", role: "Software Engineer", location: "Hyderabad, India",
    appliedDate: "Sep 12, 2026", salary: "₹7–12 LPA", status: "Applied" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    progress: 30, nextStepIcon: null, nextStepText: "", nextStepColor: ""
  },
  {
    id: 7, company: "Infosys", role: "System Engineer", location: "Hyderabad, India",
    appliedDate: "Oct 2, 2026", salary: "₹5-8 LPA", status: "Walk-in" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    progress: 10, nextStepIcon: <MapPin className="h-3.5 w-3.5" />, nextStepText: "Walk-in Drive – Oct 2, 2026", nextStepColor: "text-[#4f46e5]"
  },
  {
    id: 8, company: "Wipro", role: "Frontend Developer", location: "Bengaluru, India",
    appliedDate: "Oct 5, 2026", salary: "₹6-9 LPA", status: "Walk-in" as Stage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    progress: 10, nextStepIcon: <MapPin className="h-3.5 w-3.5" />, nextStepText: "Walk-in Drive – Oct 5, 2026", nextStepColor: "text-[#4f46e5]"
  }
]

const tabs = ["All Jobs (14)", "Applied (5)", "Screening (3)", "Interview (3)", "Offer (1)", "Walk-ins (2)", "Rejected (0)"]

export default function Jobs() {
  const [activeTab, setActiveTab] = useState("All Jobs (14)")
  const [gridView, setGridView] = useState(true)
  const [showAddJobModal, setShowAddJobModal] = useState(false)

  const filteredJobs = jobs.filter(job => {
    if (activeTab.startsWith("All Jobs")) return true;
    if (activeTab.startsWith("Walk-ins") && job.status === "Walk-in") return true;
    return activeTab.startsWith(job.status);
  })

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-[16px]"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">Jobs</h1>
          <p className="text-gray-500 mt-2 font-medium">Track, manage and prepare for your dream opportunities.</p>
        </div>
        <button onClick={() => setShowAddJobModal(true)} className="px-5 py-2.5 bg-[#897127] text-white rounded-[16px] font-bold text-sm hover:bg-[#6c591e] flex items-center gap-2 shadow-sm">
          <Plus className="h-4 w-4" /> Add Job
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-blue flex items-center justify-center text-blue-600 shrink-0">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Total Jobs</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">14</div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 5</span> <span className="text-gray-400">this month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineBlue}><Bar dataKey="v" fill="#3b82f6" radius={[2,2,0,0]} /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-green flex items-center justify-center text-green-600 shrink-0">
              <Send className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Applied</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">5</div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 2</span> <span className="text-gray-400">this month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineGreen}><Bar dataKey="v" fill="#22c55e" radius={[2,2,0,0]} /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-purple flex items-center justify-center text-purple-600 shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Interviews</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">3</div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 1</span> <span className="text-gray-400">this month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklinePurple}><Bar dataKey="v" fill="#a855f7" radius={[2,2,0,0]} /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50/60 to-white p-5 rounded-[16px] shadow-sm border border-gray-100 flex flex-col justify-between h-32">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full badge-3d-indigo flex items-center justify-center text-indigo-600 shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-500">Walk-ins</h3>
              <div className="text-3xl font-bold text-[#0B1F3A] leading-tight">2</div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-2">
            <p className="text-[10px] font-bold"><span className="text-green-500">↑ 2</span> <span className="text-gray-400">this month</span></p>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sparklineGold}><Bar dataKey="v" fill="#4f46e5" radius={[2,2,0,0]} /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
        <div className="relative flex-1 w-full">
          <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search company, role or location..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-[16px] text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] shadow-sm" />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="h-10 px-3 bg-white border border-gray-200 rounded-[16px] flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            All Companies <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button className="h-10 px-3 bg-white border border-gray-200 rounded-[16px] flex items-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            Sort by: Latest <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-[16px] p-1 shadow-sm">
            <button onClick={() => setGridView(true)} className={`p-2 rounded-[16px] ${gridView ? 'bg-[#FDE68A] text-[#92400E]' : 'text-gray-400 hover:text-gray-600'}`}>
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button onClick={() => setGridView(false)} className={`p-2 rounded-[16px] ${!gridView ? 'bg-[#FDE68A] text-[#92400E]' : 'text-gray-400 hover:text-gray-600'}`}>
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-all shadow-sm ${activeTab === tab ? "bg-[#FDE68A] text-[#92400E]" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Jobs Grid (3 columns) */}
      <div className={`grid gap-5 ${gridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredJobs.map(job => {
          const currentStep = progressSteps[job.status]
          return (
            <div key={job.id} className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all flex flex-col">
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 border border-gray-100 shadow-sm shrink-0">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1F3A] text-[15px] leading-tight">{job.role}</h3>
                    <div className="text-[13px] font-medium text-gray-500 mt-0.5">{job.company}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`${statusConfig[job.status].badge} px-3 py-1 rounded-full text-[10px] font-bold`}>{job.status}</span>
                  <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-gray-500">
                <span className="flex items-center gap-1.5 text-[11px] font-bold"><MapPin className="h-3 w-3" /> {job.location}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-bold"><Calendar className="h-3 w-3" /> {job.appliedDate}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-bold">{job.salary}</span>
              </div>

              {/* Progress Bar & Tracker */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-[#0B1F3A]">Progress</span>
                  <span className="text-[11px] font-bold text-[#0B1F3A]">{job.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] border border-gray-200/50 p-[1px]">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full shadow-[0_1px_2px_rgba(234,179,8,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] border-t border-yellow-300" style={{ width: `${job.progress}%` }}></div>
                </div>

                <div className="flex justify-between relative mt-2 mb-1 px-1">
                  <div className="absolute top-[7px] left-[10px] right-[10px] h-[2px] bg-gray-100 -z-10"></div>
                  {STAGES.map((stage, i) => {
                    const done = currentStep > i
                    const active = currentStep === i + 1
                    return (
                      <div key={stage} className="flex flex-col items-center gap-2 bg-white px-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${(done || active) ? "bg-[#eab308] text-white" : "bg-gray-200"}`}>
                          {(done || active) && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                        </div>
                        <span className={`text-[9px] font-bold ${(done || active) ? "text-[#0B1F3A]" : "text-gray-400"}`}>{stage}</span>
                      </div>
                    )
                  })}
                </div>

                {job.nextStepText && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-bold">
                    <span className={`${job.nextStepColor}`}>{job.nextStepIcon}</span>
                    <span className={`${job.nextStepColor}`}>{job.nextStepText}</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {/* Add Job Modal */}
      {showAddJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowAddJobModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">Add New Job</h2>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddJobModal(false); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Company</label>
                <input type="text" placeholder="e.g. Google" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Role</label>
                <input type="text" placeholder="e.g. Software Engineer II" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Location</label>
                  <input type="text" placeholder="e.g. Hyderabad" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Salary Expected</label>
                  <input type="text" placeholder="e.g. ₹20-30 LPA" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Status</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[16px] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]">
                  {STAGES.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-[#0B1F3A] text-white rounded-[16px] font-bold hover:bg-[#1a365d] transition-colors mt-4">
                Save Job
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


