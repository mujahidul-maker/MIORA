"use client";
import{createContext,useContext,useEffect,useState,ReactNode}from"react";
import{DELIVERY}from"./config";
export type Line={id:string;slug:string;name:string;price:number;size:string;color:string;qty:number;img:string};
const Ctx=createContext<any>(null);
export const useCart=()=>useContext(Ctx) as{lines:Line[];add:(l:Line)=>void;remove:(i:number)=>void;setQty:(i:number,q:number)=>void;clear:()=>void;open:boolean;setOpen:(b:boolean)=>void;count:number;subtotal:number;delivery:(zone:"dhaka"|"outside")=>number};
export function CartProvider({children}:{children:ReactNode}){
const[lines,setLines]=useState<Line[]>([]),[open,setOpen]=useState(false);
useEffect(()=>{try{setLines(JSON.parse(localStorage.getItem("miora-cart")||"[]"))}catch{}},[]);
useEffect(()=>{try{localStorage.setItem("miora-cart",JSON.stringify(lines))}catch{}},[lines]);
const add=(l:Line)=>{setLines(p=>{const i=p.findIndex(x=>x.id===l.id&&x.size===l.size&&x.color===l.color);if(i<0)return[...p,l];const n=[...p];n[i]={...n[i],qty:n[i].qty+l.qty};return n});setOpen(true)};
const v={lines,add,open,setOpen,remove:(i:number)=>setLines(p=>p.filter((_,j)=>j!==i)),setQty:(i:number,q:number)=>setLines(p=>p.map((x,j)=>j===i?{...x,qty:Math.max(1,q)}:x)),clear:()=>setLines([]),count:lines.reduce((a,l)=>a+l.qty,0),subtotal:lines.reduce((a,l)=>a+l.price*l.qty,0),delivery:(z:"dhaka"|"outside")=>lines.length?DELIVERY[z]:0};
return<Ctx.Provider value={v}>{children}</Ctx.Provider>}
