// Mock data layer. Replace getProducts/getProduct with DB/API calls; types stay the same.
export type Color={name:string;hex:string};
export type Product={id:string;name:string;slug:string;category:"women"|"kids"|"matching";subcategory:string;price:number;compareAtPrice?:number;images:string[];colors:Color[];sizes:string[];description:string;stock:number;featured:boolean;newArrival:boolean;bestSeller:boolean;sale:boolean;ageGroup?:string;collection?:string};
// images: real URL or "grad:#from,#to" placeholder (replace with real product photos)
const C={rose:{name:"Rose",hex:"#E8B4B8"},sand:{name:"Sand",hex:"#D9C7A8"},sage:{name:"Sage",hex:"#A9B8A0"},char:{name:"Charcoal",hex:"#3A3838"},ivory:{name:"Ivory",hex:"#F3EDE2"}};
const W=["S","M","L","XL"],K=["2-3Y","4-5Y","6-8Y","9-12Y"];
const mk=(i:number,name:string,category:Product["category"],subcategory:string,price:number,cmp:number|undefined,g:[string,string],colors:Color[],flags:Partial<Product>={}):Product=>({id:"p"+i,name,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,"-"),category,subcategory,price,compareAtPrice:cmp,images:[`grad:${g[0]},${g[1]}`,`grad:${g[1]},${g[0]}`],colors,sizes:category==="kids"?K:W,description:"Placeholder description. Replace with your real product details, fabric and care notes.",stock:20,featured:false,newArrival:false,bestSeller:false,sale:!!cmp,ageGroup:category==="kids"?"4-8":undefined,...flags});
export const products:Product[]=[
mk(1,"Cotton Block-Print Kurti","women","Kurti",1290,1590,["#E8B4B8","#F7E6E3"],[C.rose,C.ivory],{newArrival:true,bestSeller:true,collection:"Everyday"}),
mk(2,"Linen Co-ord Set","women","Co-ord Set",2490,undefined,["#D9C7A8","#F1E9DA"],[C.sand,C.sage],{newArrival:true,collection:"Summer"}),
mk(3,"Embroidered 3 Piece","women","3 Piece",3890,4590,["#A9B8A0","#E3E9DE"],[C.sage,C.ivory],{newArrival:true,bestSeller:true,collection:"Festive"}),
mk(4,"Soft Pleated Top","women","Tops",990,undefined,["#F2D8D5","#FBF1EF"],[C.rose,C.char],{newArrival:true,collection:"Everyday"}),
mk(5,"Twirl Party Frock","kids","Frocks",1690,1990,["#F2D8D5","#E7DDCD"],[C.rose,C.ivory],{newArrival:true,bestSeller:true,collection:"Party"}),
mk(6,"Little Boys Panjabi Set","kids","Party Wear",1890,undefined,["#3A3838","#8A8582"],[C.char,C.sand],{newArrival:true,bestSeller:true,collection:"Eid"}),
mk(7,"Everyday Girls 2 Piece","kids","2 Piece",1190,1390,["#D9C7A8","#F6EFE3"],[C.sand,C.rose],{newArrival:true,collection:"Everyday"}),
mk(8,"Mini Me Matching Dress","matching","Mother & Daughter",2290,2690,["#E8B4B8","#D9C7A8"],[C.rose,C.sand],{newArrival:true,bestSeller:true,featured:true,collection:"Matching"}),
mk(9,"Matching Cotton Kurti Set","matching","Mother & Daughter",2790,undefined,["#A9B8A0","#F1E9DA"],[C.sage,C.ivory],{bestSeller:true,featured:true,collection:"Matching"}),
mk(10,"Block-Print Saree","women","Saree",3290,3990,["#C9A9A6","#F3E4E1"],[C.rose,C.char],{bestSeller:true,collection:"Festive"}),
];
export const fmt=(n:number)=>"৳"+n.toLocaleString("en-US");
export const pct=(p:Product)=>p.compareAtPrice?Math.round((1-p.price/p.compareAtPrice)*100):0;
export const getProducts=async()=>products;
export const getProduct=async(slug:string)=>products.find(p=>p.slug===slug);
export const COLLECTIONS:Record<string,{title:string;filter:(p:Product)=>boolean}>={
women:{title:"Women",filter:p=>p.category==="women"},kids:{title:"Kids",filter:p=>p.category==="kids"},matching:{title:"Matching",filter:p=>p.category==="matching"},
"new-arrivals":{title:"New Arrivals",filter:p=>p.newArrival},"best-sellers":{title:"Best Sellers",filter:p=>p.bestSeller},sale:{title:"Sale",filter:p=>p.sale}};
