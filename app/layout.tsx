import"./globals.css";import type{Metadata}from"next";import{Jost,Cormorant_Garamond}from"next/font/google";
import{CartProvider}from"@/lib/cart";import{WishProvider}from"@/lib/wish";import Header from"@/components/Header";import Footer from"@/components/Footer";import CartDrawer from"@/components/CartDrawer";
const sans=Jost({subsets:["latin"],variable:"--sans"});
const serif=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],variable:"--serif"});
export const metadata:Metadata={title:"MIORA — Style for Every Little Moment",description:"Shop stylish women and kids fashion in Bangladesh. Discover MIORA's latest collections, matching outfits and everyday styles."};
export default function L({children}:{children:React.ReactNode}){return<html lang="en"><body className={`${sans.variable} ${serif.variable}`}><CartProvider><WishProvider><Header/><main>{children}</main><Footer/><CartDrawer/></WishProvider></CartProvider></body></html>}
