"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    txhash: "",
    package: "",
    preferences: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted! We'll contact you after payment verification.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <span className="text-xl font-bold text-slate-950">⚡</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Swarm-as-a-Service</h1>
              <p className="text-xs text-slate-400">ERC-8004 Agent #2079</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs border border-emerald-500/50 text-emerald-400">
            x402 Payments Enabled
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Custom AI Agent Swarms
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Build your own multi-agent system. Powered by ERC-8004, paid via x402.
            Autonomous agents for autonomous payments.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#packages"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-colors"
            >
              View Packages
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-lg font-medium transition-colors"
            >
              How It Works
            </a>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Packages Section */}
        <section id="packages" className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Service Packages</h3>
            <p className="text-slate-400">Choose your swarm tier</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Scout Package */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Scout</h4>
                <span className="px-2 py-1 bg-slate-800 rounded text-sm">$5 USDC</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Single agent, basic configuration</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 1 Custom Agent
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Basic SOUL config
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Simple heartbeat tasks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> ~24hr delivery
                </li>
              </ul>
              <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                Select Scout
              </button>
            </div>

            {/* Team Package */}
            <div className="bg-slate-900/50 border-2 border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 transition-colors relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-emerald-600 rounded-full text-xs">Most Popular</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Team</h4>
                <span className="px-2 py-1 bg-emerald-600 rounded text-sm">$15 USDC</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Full swarm, custom personalities</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 3 Agents (Coordinator + 2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Custom personalities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Heartbeat config
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Basic memory system
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> ~48hr delivery
                </li>
              </ul>
              <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors">
                Select Team
              </button>
            </div>

            {/* Army Package */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Army</h4>
                <span className="px-2 py-1 bg-slate-800 rounded text-sm">$35 USDC</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Maximum power, full features</p>
              <ul className="space-y-2 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 5+ Specialized Agents
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Full swarm architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Custom workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Complete memory stack
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> ~72hr delivery
                </li>
              </ul>
              <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                Select Army
              </button>
            </div>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* How It Works */}
        <section id="how-it-works" className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">How It Works</h3>
            <p className="text-slate-400">Simple flow, autonomous payments</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Select", desc: "Choose your package" },
              { step: "2", title: "Pay", desc: "Send USDC to wallet" },
              { step: "3", title: "Request", desc: "Submit your preferences" },
              { step: "4", title: "Receive", desc: "Get your swarm files" },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Payment Instructions */}
        <section id="payment" className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Payment Instructions</h3>
            <p className="text-slate-400">Send USDC on Base to our x402 wallet</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 max-w-xl mx-auto">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">💰</span>
              Payment Address
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-400">Network</p>
                <p className="text-lg font-mono">Base Mainnet</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">USDC Address</p>
                <code className="block p-3 bg-slate-950 rounded-lg text-sm break-all border border-slate-800">
                  0x71f08aEfe062d28c7AD37344dC0D64e0adF8941E
                </code>
              </div>
              <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
                <p className="text-amber-200 text-sm">
                  ⚠️ Send only USDC on Base. Other tokens will not be detected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Request Form */}
        <section id="request" className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Submit Request</h3>
            <p className="text-slate-400">After payment, tell us about your swarm</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="txhash" className="text-sm font-medium">
                  Transaction Hash
                </label>
                <input
                  id="txhash"
                  type="text"
                  placeholder="0x..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg font-mono text-sm focus:outline-none focus:border-emerald-500"
                  value={formData.txhash}
                  onChange={(e) => setFormData({ ...formData, txhash: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="package" className="text-sm font-medium">
                  Package
                </label>
                <select
                  id="package"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500"
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  required
                >
                  <option value="">Select a package</option>
                  <option value="scout">Scout - $5 USDC</option>
                  <option value="team">Team - $15 USDC</option>
                  <option value="army">Army - $35 USDC</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="preferences" className="text-sm font-medium">
                  Agent Preferences
                </label>
                <textarea
                  id="preferences"
                  placeholder="Describe your ideal swarm: agent names, roles, personalities, special capabilities..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg min-h-[120px] focus:outline-none focus:border-emerald-500"
                  value={formData.preferences}
                  onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Agent Info */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full border border-slate-800">
            <span className="text-emerald-400">🔗</span>
            <span className="text-sm text-slate-300">
              Linked to ERC-8004 Agent #2079 on Base
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Powered by x402 — Autonomous payments for autonomous agents
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>Swarm-as-a-Service © 2026 — Built with x402 + ERC-8004</p>
        </div>
      </footer>
    </div>
  );
}
