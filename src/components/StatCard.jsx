const StatCard = ({ label, value, detail }) => {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-5 shadow-soft">
      <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{label}</p>
      <p className="mt-2 font-display text-2xl text-ink">{value}</p>
      <p className="mt-2 text-sm text-ink/70">{detail}</p>
    </div>
  )
}

export default StatCard
