"use client";
import{useState}from"react";
export default function Account(){const[done,setDone]=useState(false);
return<div className="wrap max-w-md py-16"><h1 className="font-serif text-4xl">Account</h1>
<form className="mt-6 space-y-4" onSubmit={e=>{e.preventDefault();/* TODO: call your auth API here */setDone(true)}}>
<input className="inp" type="tel" required placeholder="Mobile number" aria-label="Mobile number"/><input className="inp" type="password" required placeholder="Password" aria-label="Password"/>
<button className="btn w-full">Sign in</button>{done&&<p role="status" className="text-sm text-ink/60">Sign-in is not connected yet. Add your auth backend in app/account/page.tsx.</p>}</form></div>}
