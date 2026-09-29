import React, { useState } from "react"
import { User, Palette, SlidersHorizontal, Bell, LayoutTemplate, Shield, Link2, ChevronRight, Upload, Camera, Mail, Phone, MapPin, FileText, Code2, Clock, Target } from "lucide-react"

type NavItem = { label: string; icon: React.ReactNode }

const navItems: NavItem[] = [
  { label: "Profile",            icon: <User className="h-4 w-4" /> },
  { label: "Appearance",         icon: <Palette className="h-4 w-4" /> },
  { label: "Preferences",        icon: <SlidersHorizontal className="h-4 w-4" /> },
  { label: "Notifications",      icon: <Bell className="h-4 w-4" /> },
  { label: "Application",        icon: <LayoutTemplate className="h-4 w-4" /> },
  { label: "Privacy & Security", icon: <Shield className="h-4 w-4" /> },
  { label: "Connected Accounts", icon: <Link2 className="h-4 w-4" /> },
]

const accountStats = [
  { icon: <Code2 className="h-5 w-5" />, value: "127", label: "Problems Solved", color: "bg-blue-50 text-blue-600" },
  { icon: <Clock className="h-5 w-5" />, value: "12 Days", label: "Current Streak",     color: "bg-green-50 text-green-600" },
  { icon: <Bell className="h-5 w-5" />, value: "6h 25m", label: "Total Learning Hours",color: "bg-purple-50 text-purple-600" },
  { icon: <Target className="h-5 w-5" />, value: "4",    label: "Active Goals",         color: "bg-yellow-50 text-yellow-600" },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile")
  const [name, setName]   = useState("Siri")
  const [email, setEmail] = useState("developer@example.com")
  const [phone, setPhone] = useState("+91 98765 43210")
  const [location, setLocation] = useState("Hyderabad, India")
  const [bio, setBio]     = useState("Passionate about learning, building and solving real-world problems through code.")

  return (
    <div className="w-full h-full min-h-screen relative pb-8">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-[#FEF3C7]/30 to-[#FDE68A]/10 -z-10 rounded-[16px]"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">Settings</h1>
          <p className="text-gray-500 mt-2 font-medium">Manage your account, preferences, and application settings.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Nav */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-3 flex flex-col gap-1">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`flex items-center justify-between gap-3 px-4 py-3 rounded-[14px] font-bold text-sm text-left transition-all ${
                  activeTab === item.label
                    ? "bg-gradient-to-r from-[#FDE68A]/60 to-transparent text-[#92400E]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={activeTab === item.label ? "text-[#D4AF37]" : "text-gray-400"}>{item.icon}</span>
                  {item.label}
                </div>
                <ChevronRight className={`h-4 w-4 ${activeTab === item.label ? "text-[#D4AF37]" : "text-gray-300"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Center: Profile Form */}
        <div className="flex-1">
          <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-6">
            {/* Profile Section Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Profile Settings</h2>
                <p className="text-sm text-gray-500 mt-1">Update your personal information and avatar.</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-[16px] text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm transition-all">
                <Upload className="h-4 w-4" /> Edit Profile
              </button>
            </div>

            {/* Avatar Row */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#0B1F3A] to-[#163D63] flex items-center justify-center text-white text-2xl font-extrabold shadow-lg ring-4 ring-white">
                  SP
                </div>
                <button className="absolute bottom-0 right-0 h-7 w-7 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <Camera className="h-3.5 w-3.5 text-white" />
                </button>
              </div>
              <div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-[16px] text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
                  <Upload className="h-4 w-4" /> Change Avatar
                </button>
                <p className="text-[11px] text-gray-400 font-medium mt-2">JPG, GIF or PNG. Max size of 2MB.</p>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> Full Name
                </label>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-[16px] text-sm font-medium text-[#0B1F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 bg-gray-50/50 transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> Email Address
                </label>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-[16px] text-sm font-medium text-[#0B1F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 bg-gray-50/50 transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="px-3 py-2.5 border border-gray-200 rounded-[16px] bg-gray-50/50 flex items-center gap-1.5 shrink-0">
                    <span className="text-base">🇮🇳</span>
                  </div>
                  <input
                    type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-[16px] text-sm font-medium text-[#0B1F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 bg-gray-50/50 transition-all"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Location
                </label>
                <input
                  type="text" value={location} onChange={e => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-[16px] text-sm font-medium text-[#0B1F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 bg-gray-50/50 transition-all"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" /> Bio
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  value={bio}
                  onChange={e => setBio(e.target.value)}
                  maxLength={200}
                  className="w-full px-4 py-3 border border-gray-200 rounded-[16px] text-sm font-medium text-[#0B1F3A] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 bg-gray-50/50 transition-all resize-none"
                />
                <span className="absolute bottom-3 right-4 text-[10px] font-bold text-gray-400">{bio.length}/200</span>
              </div>
            </div>

            {/* Save Row */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-[16px] text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm transition-all">
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-[#0B1F3A] hover:bg-[#163D63] text-white rounded-[16px] text-sm font-bold shadow-md transition-all">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Right: Account Stats */}
        <div className="w-full lg:w-56 shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-[#0B1F3A] flex items-center gap-2 text-[13px] mb-4">
              <span className="text-[#D4AF37]">👑</span> Account Stats
            </h3>
            <div className="flex flex-col gap-3">
              {accountStats.map(stat => (
                <div key={stat.label} className="flex items-center gap-3 p-3 rounded-[14px] bg-gray-50/80 border border-gray-100">
                  <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-[15px] font-extrabold text-[#0B1F3A] leading-tight">{stat.value}</div>
                    <div className="text-[10px] font-bold text-gray-400 leading-tight">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


