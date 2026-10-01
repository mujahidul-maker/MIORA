"use client";
import Link from"next/link";import{useState}from"react";import{useRouter}from"next/navigation";
import Logo from"./Logo";import{NAV}from"@/lib/config";import{useCart}from"@/lib/cart";
export default function Header(){
const{count,setOpen}=useCart(),[m,setM]=useState(false),[s,setS]=useState(false),r=useRouter();
return<><div className="bg-ink px-4 py-2 text-center text-xs text-cream">Free delivery on selected orders &nbsp;|&nbsp; Cash on Delivery available</div>
<header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur"><div className="wrap flex h-16 items-center justify-between gap-4">
<button className="md:hidden" aria-label="Menu" onClick={()=>setM(true)}>☰</button>
<Link href="/" aria-label="MIORA home"><Logo/></Link>
<nav className="hidden gap-7 text-sm md:flex" aria-label="Main">{NAV.map(([l,h])=><Link key={h} href={h} className="transition hover:opacity-60">{l}</Link>)}</nav>
<div className="flex items-center gap-4 text-sm">
<button aria-label="Search" onClick={()=>setS(!s)}>Search</button><Link href="/account" className="hidden md:inline">Account</Link><Link href="/wishlist" className="hidden md:inline">♡</Link>
<button onClick={()=>setOpen(true)} aria-label="Cart">Cart ({count})</button></div></div>
{s&&<form className="wrap pb-3" onSubmit={e=>{e.preventDefault();r.push("/search?q="+encodeURIComponent(new FormData(e.currentTarget).get("q") as string));setS(false)}}><input name="q" autoFocus className="inp" placeholder="Search kurti, frock, matching…"/></form>}</header>
{m&&<div className="fixed inset-0 z-50 bg-cream p-6"><button className="mb-8" onClick={()=>setM(false)}>✕ Close</button><nav className="flex flex-col gap-5 font-serif text-3xl">{NAV.map(([l,h])=><Link key={h} href={h} onClick={()=>setM(false)}>{l}</Link>)}</nav></div>}</>}
