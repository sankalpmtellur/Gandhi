const TimelineItem = ({ year, title, description, image }) => {
  return (
    <div className="grid gap-6 md:grid-cols-[140px_1fr]">
      <div className="flex items-center gap-4">
        <span className="rounded-full border border-ink/15 bg-ink/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
          {year}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_220px]">
        <div>
          <h3 className="font-display text-2xl text-ink">{title}</h3>
          <p className="mt-3 text-sm text-ink/70 md:text-base">{description}</p>
        </div>
        <img
          src={image}
          alt={title}
          className="h-52 w-full rounded-2xl object-cover shadow-soft"
        />
      </div>
    </div>
  )
}

export default TimelineItem
