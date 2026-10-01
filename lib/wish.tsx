"use client";
import{createContext,useContext,useEffect,useState,ReactNode}from"react";
const Ctx=createContext<any>(null);
export const useWish=()=>useContext(Ctx) as{ids:string[];has:(id:string)=>boolean;toggle:(id:string)=>void};
export function WishProvider({children}:{children:ReactNode}){
const[ids,setIds]=useState<string[]>([]);
useEffect(()=>{try{setIds(JSON.parse(localStorage.getItem("miora-wish")||"[]"))}catch{}},[]);
const toggle=(id:string)=>setIds(p=>{const n=p.includes(id)?p.filter(x=>x!==id):[...p,id];try{localStorage.setItem("miora-wish",JSON.stringify(n))}catch{}return n});
return<Ctx.Provider value={{ids,has:(id:string)=>ids.includes(id),toggle}}>{children}</Ctx.Provider>}
