// Shared class strings, so every section uses the same type scale and spacing.
const styles = {
  wrap: "w-[min(1120px,calc(100%-40px))] mx-auto",
  eyebrow:
    "w-fit font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-amber",
  h2: "mt-3 w-fit font-display font-black uppercase leading-[0.9] text-[clamp(44px,7.6vw,96px)] [text-wrap:balance]",
  h3: "font-display font-bold uppercase leading-none tracking-[0.01em]",
  lede: "max-w-[62ch] text-[17px] leading-[1.7] text-mute",
  label: "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-mute",
  chip: "border border-line px-[9px] py-[7px] font-mono text-[11px] leading-none tracking-[0.04em] text-bone",
  card: "border border-line bg-panel",
  btn: "inline-flex items-center gap-2 border px-5 py-[13px] font-mono text-[13px] font-medium uppercase leading-none tracking-[0.06em] transition-transform duration-150 hover:-translate-y-0.5",
  btnSolid: "border-amber bg-amber text-ink",
  btnGhost: "border-line text-bone hover:bg-panel",
  link: "w-fit font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-amber underline-offset-4 hover:underline",
};

export { styles };
