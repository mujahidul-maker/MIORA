"use client";
import Link from"next/link";import{useWish}from"@/lib/wish";
import{Product,fmt,pct}from"@/lib/data";import{useCart}from"@/lib/cart";import Img from"./Img";
export default function ProductCard({p}:{p:Product}){
const{add}=useCart(),{has,toggle}=useWish(),wish=has(p.id);
return<article className="group">
<div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand">
<Link href={`/product/${p.slug}`} aria-label={p.name}><Img src={p.images[0]} alt={p.name} className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"/><Img src={p.images[1]||p.images[0]} alt="" className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"/></Link>
{p.sale&&<span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs text-cream">-{pct(p)}%</span>}
<button onClick={()=>toggle(p.id)} aria-label="Wishlist" aria-pressed={wish} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 transition hover:scale-110">{wish?"♥":"♡"}</button>
<button onClick={()=>add({id:p.id,slug:p.slug,name:p.name,price:p.price,size:p.sizes[1]||p.sizes[0],color:p.colors[0].name,qty:1,img:p.images[0]})} className="absolute inset-x-3 bottom-3 rounded-full bg-white/95 py-2.5 text-sm font-medium opacity-100 transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">Quick add</button></div>
<div className="mt-3 px-1"><Link href={`/product/${p.slug}`} className="text-sm font-medium">{p.name}</Link>
<div className="mt-1 flex items-center gap-2 text-sm"><span>{fmt(p.price)}</span>{p.compareAtPrice&&<span className="text-ink/45 line-through">{fmt(p.compareAtPrice)}</span>}</div>
<div className="mt-2 flex gap-1.5">{p.colors.map(c=><span key={c.name} title={c.name} className="h-3.5 w-3.5 rounded-full border border-ink/15" style={{background:c.hex}}/>)}</div></div></article>}
export const ProductGrid=({items}:{items:Product[]})=><div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4">{items.map(p=><ProductCard key={p.id} p={p}/>)}</div>;
