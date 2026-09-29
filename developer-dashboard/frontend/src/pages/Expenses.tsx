import React from "react"
import { Wallet, Plus, TrendingDown } from "lucide-react"

export default function Expenses() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1F3A]">Expenses</h1>
          <p className="text-gray-500 mt-1">Track your spending and understand where your money goes.</p>
        </div>
        <button className="px-4 py-2 bg-[#0B1F3A] text-white rounded-md font-medium text-sm hover:bg-[#163D63] flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Expense
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 font-medium">This Month</p>
          <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">₹8,450</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 font-medium">Monthly Budget</p>
          <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">₹20,000</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 font-medium">Remaining</p>
          <h3 className="text-3xl font-bold text-green-600 mt-1">₹11,550</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 font-medium">Average Daily</p>
          <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">₹282</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
            <tr>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Description</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Payment Method</th>
              <th className="px-6 py-4 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { date: "Oct 01, 2026", desc: "Lunch", cat: "Food", method: "UPI", amt: "250" },
              { date: "Sep 30, 2026", desc: "Udemy Course", cat: "Education", method: "Credit Card", amt: "899" },
              { date: "Sep 29, 2026", desc: "Amazon Groceries", cat: "Shopping", method: "UPI", amt: "1,250" },
              { date: "Sep 28, 2026", desc: "Uber", cat: "Travel", method: "Debit Card", amt: "300" },
              { date: "Sep 27, 2026", desc: "Internet Bill", cat: "Bills", method: "UPI", amt: "1,500" },
            ].map((exp, i) => (
              <tr key={i} className="hover:bg-gray-50/50">
                <td className="px-6 py-4 text-gray-500">{exp.date}</td>
                <td className="px-6 py-4 font-medium text-[#0B1F3A]">{exp.desc}</td>
                <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">{exp.cat}</span></td>
                <td className="px-6 py-4 text-gray-500">{exp.method}</td>
                <td className="px-6 py-4 text-right font-bold text-[#0B1F3A]">₹{exp.amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
