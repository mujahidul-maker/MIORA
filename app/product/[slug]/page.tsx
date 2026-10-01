import{notFound}from"next/navigation";import type{Metadata}from"next";import{products,getProduct}from"@/lib/data";import ProductInfo from"@/components/ProductInfo";
export const generateStaticParams=()=>products.map(p=>({slug:p.slug}));
export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata>{const p=await getProduct(params.slug);return{title:p?`${p.name} — MIORA`:"MIORA",description:p?.description}}
export default async function P({params}:{params:{slug:string}}){const p=await getProduct(params.slug);if(!p)notFound();
const ld={"@context":"https://schema.org","@type":"Product",name:p.name,description:p.description,offers:{"@type":"Offer",priceCurrency:"BDT",price:p.price,availability:p.stock?"https://schema.org/InStock":"https://schema.org/OutOfStock"}};
return<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/><ProductInfo p={p}/></>}
