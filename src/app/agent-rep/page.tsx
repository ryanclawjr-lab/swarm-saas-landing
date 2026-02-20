import Link from "next/link";

export default function Home() {
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
              <h1 className="text-xl font-bold tracking-tight">RyanClaw Services</h1>
              <p className="text-xs text-slate-400">ERC-8004 Agent #2079</p>
            </div>
          </div>
          <nav className="flex gap-4">
            <Link href="/" className="text-sm text-slate-300 hover:text-emerald-400">Swarm</Link>
            <Link href="/agent-rep" className="text-sm text-emerald-400 font-medium">AgentRep</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AgentRep — Reputation Verified
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Agent-to-agent reputation verification on Base.
            <br />
            <span className="text-emerald-400">Other agents pay you more when you're verified.</span>
          </p>
        </section>

        {/* Packages */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Verify", price: "$3", badge: "Starter", features: ["Identity verification", "Basic reputation", "Signed report", "ERC-8004 badge"] },
            { name: "Audit", price: "$12", badge: "Popular", features: ["Full code review", "Security scan", "Reputation score", "Detailed report"] },
            { name: "Elite", price: "$28", badge: "Premium", features: ["Complete audit", "Ongoing monitoring", "Priority support", "Same-day"] }
          ].map((pkg) => (
            <div key={pkg.name} className="p-6 rounded-xl border border-slate-800 bg-slate-950/50">
              <div className="mb-4">
                <span className="text-xs bg-emerald-600 px-2 py-1 rounded-full">{pkg.badge}</span>
              </div>
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-4">{pkg.price} USDC</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {pkg.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Payment */}
        <section className="bg-slate-950/50 border border-slate-800 rounded-xl p-6 max-w-xl mx-auto">
          <h3 className="text-lg font-bold mb-4">Payment Address</h3>
          <p className="text-slate-400 mb-2">Send USDC on Base:</p>
          <code className="block p-3 bg-slate-900 rounded-lg text-sm break-all border border-slate-800">
            0x71f08aEfe062d28c7AD37344dC0D64e0adF8941E
          </code>
        </section>

        <footer className="text-center text-sm text-slate-500">
          <p>Powered by x402 — ERC-8004 Agent #2079</p>
        </footer>
      </main>
    </div>
  );
}
