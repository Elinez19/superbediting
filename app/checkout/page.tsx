import React from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";

export const metadata = {
  title: "Checkout | Supernovas Academy",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-4xl">
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center text-slate-500 hover:text-[#05203C] transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Cart
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-[#05203C]">Checkout</h1>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-xl font-bold mb-6 text-[#05203C]">1. Deliver To</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#05203C]/20 focus:border-[#05203C]" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#05203C]/20 focus:border-[#05203C]" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#05203C]/20 focus:border-[#05203C]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#05203C]/20 focus:border-[#05203C]" placeholder="+234 XXX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Delivery Address</label>
                  <textarea rows={3} className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#05203C]/20 focus:border-[#05203C]" placeholder="123 Example Street" />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-xl font-bold mb-6 text-[#05203C] flex items-center justify-between">
                <span>2. Payment Method</span>
                <span className="flex items-center text-sm text-green-600 font-medium">
                  <Lock size={16} className="mr-1" />
                  Secure
                </span>
              </h2>
              
              <div className="border border-[#05203C] bg-[#05203C]/5 rounded-xl p-4 flex items-center gap-4 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-4 border-[#05203C] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#05203C]" />
                </div>
                <CreditCard className="text-[#05203C]" size={24} />
                <div className="font-semibold text-[#05203C]">Paystack (Card, Transfer, USSD)</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-80">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4 text-[#05203C]">Summary</h2>
              <div className="space-y-4 mb-6 text-slate-600 font-medium pb-6 border-b border-slate-200">
                <div className="flex justify-between">
                  <span>New School Physics...</span>
                  <span className="font-bold text-[#05203C]">₦6,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-[#05203C]">₦1,500</span>
                </div>
              </div>
              <div className="flex justify-between text-lg mb-8">
                <span className="text-slate-800 font-bold">Total</span>
                <span className="font-black text-[#BE1E2D]">₦8,000</span>
              </div>
              <button className="w-full block text-center bg-[#BE1E2D] hover:bg-[#a01825] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#BE1E2D]/20">
                Pay ₦8,000
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
