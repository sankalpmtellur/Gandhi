const StoryCard = ({ title, description, image }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-soft">
      <img src={image} alt={title} className="h-44 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <p className="text-sm text-ink/70">{description}</p>
        <span className="mt-auto text-xs uppercase tracking-[0.3em] text-ink/50">
          Story
        </span>
      </div>
    </article>
  )
}

export default StoryCard
