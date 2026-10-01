"use client";
import Link from"next/link";import{products}from"@/lib/data";import{useWish}from"@/lib/wish";import{ProductGrid}from"@/components/ProductCard";
export default function Wishlist(){const{ids}=useWish(),items=products.filter(p=>ids.includes(p.id));
return<div className="wrap py-10"><h1 className="font-serif text-5xl">Wishlist</h1>{items.length?<div className="mt-8"><ProductGrid items={items}/></div>:<div className="py-20 text-center"><p className="text-ink/60">No saved items yet. Tap ♡ on any product to save it here.</p><Link href="/new-arrivals" className="btn mt-6">Browse new arrivals</Link></div>}</div>}
