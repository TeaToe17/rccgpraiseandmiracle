"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Copy, Check, DollarSign, Heart, Sprout, Users } from "lucide-react"

interface AccountDetails {
  accountNumber: string
  bankName: string
  purposes: string[]
  icon: React.ReactNode
  gradient: string
}

export default function TitheOfferingSection() {
  const [mounted, setMounted] = useState(false)
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const accounts: AccountDetails[] = [
    {
      accountNumber: "0000498838",
      bankName: "Jubilee Life Mortgage Bank",
      purposes: ["Tithe", "Offering", "First Fruits"],
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
    {
      accountNumber: "0001008816",
      bankName: "Jubilee Life Mortgage Bank",
      purposes: ["Seeds", "Partnership"],
      icon: <Sprout className="w-8 h-8" />,
      gradient: "from-amber-500 via-orange-500 to-pink-500",
    },
  ]

  const copyToClipboard = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedAccount(accountNumber)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-in ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-4 h-14 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Give with Joy
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto leading-relaxed">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
            for God loves a cheerful giver." - 2 Corinthians 9:7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {accounts.map((account, index) => (
            <div
              key={account.accountNumber}
              className={`transition-all duration-1000 ease-in ${
                mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative group">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in hover:shadow-2xl hover:scale-105">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${account.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {account.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Support the Ministry</h3>
                        <p className="text-white/90 text-sm">{account.bankName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    {/* Account Number */}
                    <div className="mb-6">
                      <label className="text-sm font-semibold text-purple-700 mb-2 block">Account Number</label>
                      <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                        <span className="text-2xl font-bold text-purple-900 flex-1 tracking-wider">
                          {account.accountNumber}
                        </span>
                        <button
                          onClick={() => copyToClipboard(account.accountNumber)}
                          className="p-2 rounded-lg bg-white hover:bg-purple-100 transition-all duration-500 ease-in hover:scale-110 shadow-sm"
                          aria-label="Copy account number"
                        >
                          {copiedAccount === account.accountNumber ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-purple-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Bank Name */}
                    <div className="mb-6">
                      <label className="text-sm font-semibold text-purple-700 mb-2 block">Bank Name</label>
                      <div className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-xl p-4 border-2 border-amber-200">
                        <p className="text-lg font-semibold text-purple-900">{account.bankName}</p>
                      </div>
                    </div>

                    {/* Purposes */}
                    <div>
                      <label className="text-sm font-semibold text-purple-700 mb-3 block">For (Add in Narration)</label>
                      <div className="flex flex-wrap gap-2">
                        {account.purposes.map((purpose, idx) => (
                          <div
                            key={idx}
                            className={`px-4 py-2 rounded-full bg-gradient-to-r ${account.gradient} text-white font-semibold text-sm shadow-md transition-all duration-500 ease-in hover:scale-110 hover:shadow-lg`}
                          >
                            {purpose}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Important Note */}
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <p className="text-sm text-purple-800 font-medium">
                        <span className="font-bold">Important:</span> Please add the purpose (Tithe, Offering, etc.) in
                        the narration/description when making your transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-in ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border-2 border-purple-100">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple-900 mb-3">Thank You for Your Generosity</h3>
            <p className="text-purple-700 leading-relaxed">
              Your faithful giving enables us to spread the gospel, support our community, and continue God's work. May
              the Lord bless you abundantly for your sacrifice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
