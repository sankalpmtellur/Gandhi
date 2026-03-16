import signature from '../assets/SignofGandhi.png'

const links = [
  { href: '#story', label: 'Life Story' },
  { href: '#journey', label: 'Journey' },
  { href: '#philosophy', label: 'Mindset' },
  { href: '#legacy', label: 'Legacy' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={signature} alt="Gandhi signature" className="h-10 w-auto" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Portfolio</p>
            <p className="font-display text-lg">Mahatma Gandhi</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-ink hover:bg-ink hover:text-paper"
          >
            Read More
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
