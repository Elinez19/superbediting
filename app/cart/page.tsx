import React from "react";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";

export const metadata = {
  title: "Cart | Supernovas Academy",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Banner "Cart" */}
      <div className="bg-[#f0f0f0] py-16 mb-12">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-5xl text-[#0d1c6f] font-normal tracking-wide">Cart</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl pb-24">
        {/* Notification Box */}
        <div className="border-t-[3px] border-[#0d1c6f] bg-[#f8f9fa] p-5 mb-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-slate-700">
            <CheckCircle2 className="text-[#0d1c6f]" size={20} />
            <span className="text-[15px]">“FREE: Download Essential Biology Textbook PDF ” has been added to your cart.</span>
          </div>
          <Link 
            href="/checkout" 
            className="w-full bg-[#0d1c6f] hover:bg-blue-900 text-white font-bold py-[14px] px-4 text-center text-sm tracking-wider rounded-sm transition-colors uppercase"
          >
            Checkout
          </Link>
        </div>

        {/* Cart Table */}
        <div className="mb-12 w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 px-2 w-12 text-center font-bold text-slate-800 text-[15px]"></th>
                <th className="py-4 px-2 w-24 text-center font-bold text-slate-800 text-[15px]"></th>
                <th className="py-4 px-2 font-bold text-slate-800 text-[15px]">Product</th>
                <th className="py-4 px-2 w-32 font-bold text-slate-800 text-[15px]">Price</th>
                <th className="py-4 px-2 w-32 font-bold text-slate-800 text-[15px]">Quantity</th>
                <th className="py-4 px-2 w-32 font-bold text-slate-800 text-[15px]">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-2 text-center align-middle">
                  <button className="text-slate-400 hover:text-red-500 border border-slate-300 rounded-full w-[22px] h-[22px] flex items-center justify-center transition-colors mx-auto">
                    <X size={14} />
                  </button>
                </td>
                <td className="py-4 px-2">
                  <div className="w-[70px] h-[90px] bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden mx-auto">
                    {/* Placeholder content until an actual image is provided */}
                    <div className="w-full h-full bg-linear-to-br from-green-500 to-green-300 flex items-center justify-center text-[8px] text-white font-bold p-1 text-center rotate-12 scale-110">ESSENTIAL BIOLOGY</div>
                  </div>
                </td>
                <td className="py-4 px-2 align-middle">
                  <Link href="#" className="text-[#1d3594] hover:text-[#1d3594]/80 text-[15px]">
                    FREE: Download Essential Biology Textbook PDF
                  </Link>
                </td>
                <td className="py-4 px-2 text-slate-800 text-[15px] align-middle">
                   &#8358;2,000.69
                </td>
                <td className="py-4 px-2 align-middle">
                  <input 
                    type="number" 
                    defaultValue="2" 
                    className="w-[70px] py-[10px] px-3 border border-slate-200 text-slate-500 text-center focus:outline-none focus:border-[#1d3594]"
                  />
                </td>
                <td className="py-4 px-2 text-slate-800 text-[15px] align-middle">
                   &#8358;4,001.38
                </td>
              </tr>
            </tbody>
          </table>

          {/* Table Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 border-b border-slate-100">
            <div className="flex w-full sm:w-auto gap-3">
              <input 
                type="text" 
                placeholder="Coupon code" 
                className="flex-1 sm:w-64 py-[10px] px-4 text-sm border border-slate-200 focus:outline-none focus:border-[#1d3594]"
              />
              <button className="bg-[#ffea00] hover:bg-yellow-400 text-[#1d3594] font-bold px-8 py-3 text-sm tracking-wider transition-colors uppercase">
                Apply coupon
              </button>
            </div>
            <button className="w-full sm:w-auto bg-[#fff7b3] text-[#fcd84e] font-bold px-8 py-3 text-sm tracking-wider uppercase cursor-not-allowed">
              Update cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="flex flex-col md:flex-row justify-end mt-16">
          <div className="w-full md:w-[480px] border border-slate-200 p-8 pt-10 bg-white">
            <h2 className="text-[32px] font-bold text-[#1d3594] mb-8">Cart totals</h2>
            
            <table className="w-full border-collapse mb-8 text-[15px]">
              <tbody>
                <tr className="border-b border-slate-200 text-slate-800">
                  <td className="py-4 font-normal w-1/3">Subtotal</td>
                  <td className="py-4 text-right">&#8358;4,001.38</td>
                </tr>
                <tr className="border-b border-slate-200 text-slate-800">
                  <td className="py-4 font-normal align-top">Shipment 1</td>
                  <td className="py-4 text-right">
                    <div className="mb-1 text-[17px]">Free shipping</div>
                    <div className="mb-6">Shipping to <span className="font-bold text-black">AZ</span>.</div>
                    <button className="text-[#1d3594] text-[15px] hover:text-[#1d3594]/80">Change address</button>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 text-slate-800">
                  <td className="py-4 font-normal">Total</td>
                  <td className="py-4 text-right font-bold">&#8358;4,001.38</td>
                </tr>
              </tbody>
            </table>

            <Link 
              href="/checkout" 
              className="block w-full bg-[#1d3594] hover:bg-blue-900 text-white font-bold py-[15px] text-center text-sm tracking-wider transition-colors uppercase mt-10"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
