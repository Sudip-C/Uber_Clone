"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

 

type Props={
    label:string;
    iconSrc:string;
    href:string
}

 export const SideBarItem = ({
    label,iconSrc,href}:Props)=>{

        const Pathname=usePathname();
        const Active= Pathname ===href

    return(
        <Button variant={Active ? "sidebarOutline" : "sidebar"}
        className="justify-start h-[52px] "
        asChild
        >
            <Link href={href}>
            <Image
            src={iconSrc}
            alt={label}
            className="mr-5"
            height={32}
            width={32}
            />
            {label}
            </Link>  
        </Button>
    )
 }