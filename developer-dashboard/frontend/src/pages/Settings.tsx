import React from "react"
import { Save, User, Bell, LayoutTemplate, HelpCircle, LogOut, Palette } from "lucide-react"

export default function Settings() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0B1F3A]">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account, preferences, and application settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <nav className="flex flex-col gap-1">
            <button className="flex items-center gap-3 px-4 py-3 bg-[#0B1F3A] text-white rounded-lg font-medium text-sm">
              <User className="h-4 w-4" /> Profile
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm transition-colors">
              <Palette className="h-4 w-4" /> Appearance
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm transition-colors">
              <LayoutTemplate className="h-4 w-4" /> Preferences
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm transition-colors">
              <Bell className="h-4 w-4" /> Notifications
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium text-sm transition-colors">
              <HelpCircle className="h-4 w-4" /> Application
            </button>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-lg font-bold text-[#0B1F3A]">Profile Settings</h2>
              <p className="text-sm text-gray-500">Update your personal information and avatar.</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white text-3xl font-bold shadow-md">
                  SP
                </div>
                <div>
                  <button className="px-4 py-2 border border-gray-200 bg-white text-gray-700 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-[#0B1F3A]">Full Name</label>
                  <input type="text" defaultValue="Siri" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-[#0B1F3A]">Email Address</label>
                  <input type="email" defaultValue="developer@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]" />
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button className="px-6 py-2 bg-[#0B1F3A] text-white rounded-md font-medium text-sm hover:bg-[#163D63] transition-colors flex items-center gap-2">
                <Save className="h-4 w-4" /> Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
             <div className="px-6 py-5 border-b border-red-100 bg-red-50/50">
              <h2 className="text-lg font-bold text-red-600">Danger Zone</h2>
              <p className="text-sm text-red-500/80">Irreversible and destructive actions.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Clear Local Data</h4>
                  <p className="text-sm text-gray-500 mt-1">This will remove your locally stored DevTrack data.</p>
                </div>
                <button className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-md font-medium text-sm hover:bg-red-50 transition-colors">
                  Clear Data
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
