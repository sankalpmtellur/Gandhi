const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-sm text-ink/70 md:text-base">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
