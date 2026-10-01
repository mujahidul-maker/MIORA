import{notFound}from"next/navigation";import{COLLECTIONS,products}from"@/lib/data";import Shop from"@/components/Shop";
export const generateStaticParams=()=>Object.keys(COLLECTIONS).map(collection=>({collection}));
export default function P({params}:{params:{collection:string}}){const c=COLLECTIONS[params.collection];if(!c)notFound();return<Shop title={c.title} items={products.filter(c.filter)}/>}
