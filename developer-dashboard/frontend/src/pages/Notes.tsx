import React from "react"
import { Pin, Pencil, Trash2, Plus, Search } from "lucide-react"

export default function Notes() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Notes</h1>
          <p className="text-gray-500 mt-1">Capture ideas, technical concepts and important development notes.</p>
        </div>
        <button className="px-4 py-2 bg-[#0B1F3A] text-white rounded-md font-medium text-sm hover:bg-[#163D63] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create Note
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search title, content, or tags..." 
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#D4AF37]/50 focus:bg-white transition-all"
          />
        </div>
        <select className="px-4 py-2 bg-gray-50 border-none rounded-lg text-sm text-gray-600 focus:ring-2 focus:ring-[#D4AF37]/50 focus:bg-white font-medium">
          <option>All Categories</option>
          <option>Java</option>
          <option>React</option>
          <option>SQL</option>
          <option>DSA</option>
        </select>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Pin className="h-4 w-4" /> Pinned Notes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0B1F3A] text-white p-6 rounded-xl shadow-md border border-[#163D63] relative group">
            <div className="absolute top-4 right-4 text-[#D4AF37]">
              <Pin className="h-4 w-4 fill-current" />
            </div>
            <span className="px-2.5 py-1 bg-[#163D63] text-xs font-bold rounded-full mb-4 inline-block">Java</span>
            <h4 className="font-bold text-lg mb-2">Java HashMap</h4>
            <p className="text-gray-300 text-sm line-clamp-3 mb-6">
              HashMap stores key-value pairs and provides average O(1) lookup. It uses a hash table implementation. When the load factor exceeds 0.75, it automatically resizes to maintain performance.
            </p>
            <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
              <span>Updated 2 days ago</span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="hover:text-white"><Pencil className="h-4 w-4" /></button>
                <button className="hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Notes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#D4AF37] transition-colors group">
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-4 inline-block">SQL</span>
            <h4 className="font-bold text-[#0B1F3A] text-lg mb-2">SQL Joins Explained</h4>
            <p className="text-gray-500 text-sm line-clamp-3 mb-6">
              INNER JOIN returns records that have matching values in both tables. LEFT JOIN returns all records from the left table, and matched records from the right. Useful for analyzing relational datasets.
            </p>
            <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
              <span>Updated 4 days ago</span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="hover:text-[#D4AF37]"><Pencil className="h-4 w-4" /></button>
                <button className="hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#D4AF37] transition-colors group">
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-4 inline-block">React</span>
            <h4 className="font-bold text-[#0B1F3A] text-lg mb-2">React useEffect</h4>
            <p className="text-gray-500 text-sm line-clamp-3 mb-6">
              useEffect lets you synchronize a component with an external system. The dependency array controls when the effect runs. Empty array means it runs once on mount. Returning a function cleans up the effect.
            </p>
            <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
              <span>Updated 5 days ago</span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="hover:text-[#D4AF37]"><Pencil className="h-4 w-4" /></button>
                <button className="hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
