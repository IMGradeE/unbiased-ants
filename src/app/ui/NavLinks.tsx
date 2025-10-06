'use client'
import Link from "next/link";
const links = [
    { name: "Contact Me", href: "/contact"},
    { name: "Projects", href: "/projects"},
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
                <Link key={link.name} href={link.href} className={clsx("hover:underline px-4 py-2 rounded-md", {"bg-amber-100/80": pathname === link.href},)}>
                    <p>{link.name}</p>
                </Link>
            )
        })}
    </>);
}