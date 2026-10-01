import{products}from"@/lib/data";import Shop from"@/components/Shop";
export default function S({searchParams}:{searchParams:{q?:string}}){const q=(searchParams.q||"").toLowerCase();
const items=products.filter(p=>[p.name,p.category,p.subcategory,p.collection||""].some(x=>x.toLowerCase().includes(q)));return<Shop title={`Results for “${searchParams.q||""}”`} items={items}/>}
