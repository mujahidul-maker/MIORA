"use client";
import{useState}from"react";import{DELIVERY}from"@/lib/config";
export default function Track(){const[res,setRes]=useState<null|"none"|any>(null);
const find=(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault();const no=(new FormData(e.currentTarget).get("no") as string).trim().toUpperCase();
// TODO: replace with a call to your orders API.
let o:any=null;try{o=JSON.parse(sessionStorage.getItem("miora-order")||"null")}catch{}setRes(o&&o.no===no?o:"none")};
return<div className="wrap max-w-md py-16"><h1 className="font-serif text-4xl">Track order</h1>
<form onSubmit={find} className="mt-6 flex gap-2"><input name="no" required placeholder="Order number (MIO-0000000)" className="inp"/><button className="btn">Track</button></form>
{res==="none"&&<p role="status" className="mt-4 text-sm text-ink/60">No order found with that number. Check it and try again.</p>}
{res&&res!=="none"&&<div className="mt-6 rounded-3xl bg-white p-6 text-sm"><p>Order {res.no}: <b>Order placed</b></p><p className="mt-1 text-ink/60">Estimated delivery: {DELIVERY.etaDays[res.zone as"dhaka"|"outside"]}</p></div>}</div>}
