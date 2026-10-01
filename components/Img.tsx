import Image from"next/image";
export default function Img({src,alt,className=""}:{src:string;alt:string;className?:string}){
if(src.startsWith("grad:")){const[a,b]=src.slice(5).split(",");return<div role="img" aria-label={alt} className={className} style={{background:`linear-gradient(160deg,${a},${b})`}}/>}
return<div className={"relative "+className}><Image src={src} alt={alt} fill sizes="(max-width:768px) 50vw,25vw" className="object-cover" loading="lazy"/></div>}
