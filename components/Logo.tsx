// Placeholder logo. To use your own: drop logo.png in /public and replace the body with <Image src="/logo.png" .../>
export default function Logo({className=""}:{className?:string}){return<span className={"inline-flex items-center gap-2.5 "+className}>
<svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#F2D8D5"/><path d="M8 22V10l8 8 8-8v12" fill="none" stroke="#2A2828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
<span className="font-serif text-2xl font-medium tracking-[.18em]">MIORA</span></span>}
