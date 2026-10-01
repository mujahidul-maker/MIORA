"use client";
import{useMemo,useState}from"react";import{Product}from"@/lib/data";import{ProductGrid}from"./ProductCard";
export default function Shop({items,title}:{items:Product[];title:string}){
const[sort,setSort]=useState("new"),[color,setColor]=useState(""),[size,setSize]=useState(""),[max,setMax]=useState(0),[col,setCol]=useState("");
const kids=items.every(p=>p.category==="kids"),cols=[...new Set(items.map(p=>p.collection).filter(Boolean))] as string[],colors=[...new Set(items.flatMap(p=>p.colors.map(c=>c.name)))],sizes=[...new Set(items.flatMap(p=>p.sizes))];
const list=useMemo(()=>{let l=items.filter(p=>(!color||p.colors.some(c=>c.name===color))&&(!size||p.sizes.includes(size))&&(!max||p.price<=max)&&(!col||p.collection===col));
return sort==="lo"?[...l].sort((a,b)=>a.price-b.price):sort==="hi"?[...l].sort((a,b)=>b.price-a.price):sort==="pop"?[...l].sort((a,b)=>+b.bestSeller-+a.bestSeller):[...l].sort((a,b)=>+b.newArrival-+a.newArrival)},[items,sort,color,size,max,col]);
const S="rounded-full border border-ink/20 bg-transparent px-4 py-2 text-sm";
return<div className="wrap py-10"><h1 className="font-serif text-5xl">{title}</h1>
<div className="my-6 flex flex-wrap gap-2"><select className={S} value={color} onChange={e=>setColor(e.target.value)} aria-label="Color"><option value="">Color</option>{colors.map(c=><option key={c}>{c}</option>)}</select>
<select className={S} value={size} onChange={e=>setSize(e.target.value)} aria-label="Size"><option value="">{kids?"Age":"Size"}</option>{sizes.map(c=><option key={c}>{c}</option>)}</select>
<select className={S} value={max} onChange={e=>setMax(+e.target.value)} aria-label="Price"><option value={0}>Any price</option><option value={1500}>Under ৳1,500</option><option value={2500}>Under ৳2,500</option></select>
<select className={S} value={col} onChange={e=>setCol(e.target.value)} aria-label="Collection"><option value="">Collection</option>{cols.map(c=><option key={c}>{c}</option>)}</select>
<select className={S+" ml-auto"} value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort"><option value="new">Newest</option><option value="lo">Price: Low to High</option><option value="hi">Price: High to Low</option><option value="pop">Popular</option></select></div>
{list.length?<ProductGrid items={list}/>:<p className="py-20 text-center text-ink/60">No products match these filters. Clear a filter to see more.</p>}</div>}
