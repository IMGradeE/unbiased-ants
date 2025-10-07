'use client'
import Link from "next/link";
const links = [
    { name: "Contact Me", href: "/contact"},
    /*{ name: "Projects", href: "/projects"},*/
    { name: "Resume", href: "/resume"}
]
import {usePathname} from "next/navigation";
import clsx from 'clsx';

//todo styling

export default function NavLinks(){
    const pathname = usePathname();

    return (<>
        {links.map((link)=>{
            return (
                <Link key={link.name} href={link.href} className={`hover:underline mx-1 px-2 py-1 rounded-md ${(pathname === link.href)?"bg-[#fef3c6]/90":"bg-[#e0e0e0]/90"}`}>
                    <p>{link.name}</p>
                </Link>
            )
        })}
    </>);
}