"use client";
import Link from"next/link";import{useCart}from"@/lib/cart";import{fmt}from"@/lib/data";import Img from"./Img";
export default function CartDrawer(){
const{open,setOpen,lines,remove,setQty,subtotal}=useCart();
return<div className={`fixed inset-0 z-50 ${open?"":"pointer-events-none"}`}>
<div onClick={()=>setOpen(false)} className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open?"opacity-100":"opacity-0"}`}/>
<aside className={`absolute right-0 flex h-full w-full max-w-md flex-col bg-cream p-5 transition-transform duration-300 ${open?"translate-x-0":"translate-x-full"}`}>
<div className="mb-4 flex justify-between"><h2 className="font-serif text-2xl">Your bag</h2><button onClick={()=>setOpen(false)} aria-label="Close">✕</button></div>
<div className="flex-1 space-y-4 overflow-y-auto">{!lines.length&&<p className="text-ink/60">Your bag is empty. Start with our new arrivals.</p>}
{lines.map((l,i)=><div key={i} className="flex gap-3"><Img src={l.img} alt={l.name} className="h-24 w-20 shrink-0 rounded-xl"/><div className="flex-1 text-sm"><p className="font-medium">{l.name}</p><p className="text-ink/60">{l.color} · {l.size}</p>
<div className="mt-2 flex items-center gap-3"><button onClick={()=>setQty(i,l.qty-1)}>−</button>{l.qty}<button onClick={()=>setQty(i,l.qty+1)}>+</button><button className="ml-auto underline" onClick={()=>remove(i)}>Remove</button></div></div><p className="text-sm">{fmt(l.price*l.qty)}</p></div>)}</div>
<div className="border-t border-ink/10 pt-4"><div className="mb-3 flex justify-between"><span>Subtotal</span><b>{fmt(subtotal)}</b></div><Link onClick={()=>setOpen(false)} href="/cart" className="btn w-full">Proceed to checkout</Link></div></aside></div>}
