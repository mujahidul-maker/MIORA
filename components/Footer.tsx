import Link from"next/link";import Logo from"./Logo";import{NAV,SITE}from"@/lib/config";
const care=["Contact Us","Delivery Information","Exchange Policy","Size Guide","FAQ"];
export default function Footer(){return<footer className="mt-24 bg-sand/60"><div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
<div><Logo/><p className="mt-2 text-sm text-ink/70">{SITE.tagline}</p><p className="mt-4 text-sm">Bangladesh</p></div>
<div><h3 className="mb-3 font-medium">Customer care</h3><ul className="space-y-2 text-sm text-ink/70">{care.map(c=><li key={c}><Link href="#">{c}</Link></li>)}</ul></div>
<div><h3 className="mb-3 font-medium">Shop</h3><ul className="space-y-2 text-sm text-ink/70">{NAV.map(([l,h])=><li key={h}><Link href={h}>{l}</Link></li>)}</ul></div>
<div><h3 className="mb-3 font-medium">Follow &amp; pay</h3><p className="text-sm text-ink/70">Facebook · Instagram · TikTok</p><p className="mt-4 text-sm text-ink/70">Cash on Delivery, bKash, Nagad, Card</p></div></div>
<p className="border-t border-ink/10 py-5 text-center text-xs text-ink/50">© {new Date().getFullYear()} MIORA</p></footer>}
