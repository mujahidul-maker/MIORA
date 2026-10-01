export default function SizeGuide({onClose}:{onClose:()=>void}){
const rows=[["S","—","—"],["M","—","—"],["L","—","—"],["XL","—","—"]];
return<div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={onClose}><div role="dialog" aria-label="Size guide" onClick={e=>e.stopPropagation()} className="w-full max-w-md rounded-3xl bg-cream p-6">
<div className="mb-3 flex justify-between"><h2 className="font-serif text-2xl">Size guide</h2><button onClick={onClose} aria-label="Close">✕</button></div>
<p className="mb-3 text-xs text-ink/60">Placeholder: replace "—" with your real measurements (inches).</p>
<table className="w-full text-left text-sm"><thead><tr><th>Size</th><th>Bust</th><th>Length</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]} className="border-t border-ink/10">{r.map((c,i)=><td key={i} className="py-2">{c}</td>)}</tr>)}</tbody></table></div></div>}
