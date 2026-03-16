import signature from "../assets/SignofGandhi.png";

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl">Truth in Action</p>
          <p className="mt-2 max-w-md text-sm text-ink/70">
            A contemporary portfolio celebrating Gandhi's life, philosophy, and
            the quiet power of nonviolent courage.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <img src={signature} alt="Gandhi signature" className="h-10 w-auto" />
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
            Satya · Ahimsa · Swaraj
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
