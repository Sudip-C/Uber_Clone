import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SideBarItem } from "./Sidebar-item";
import { Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

type Props={
    className?:string;
}

export const Sidebar = ({className}:Props) => {
  return (
    <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className,
    )}>
      <Link href="/learn">
        <div className="pt-8  pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot1.png" alt="mascot" width={80} height={70}/>
                    <h1 className="text-2xl font-extrabold text-green-600 -tracking-wide">Dulingo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SideBarItem label="LEARN" href="/learn" iconSrc="/learn.png"/>
        <SideBarItem label="LEADERBOARD" href="/learderboard" iconSrc="/leaderboard.svg"/>
        <SideBarItem label="QUESTS" href="/quest" iconSrc="/quest.svg"/>
        <SideBarItem label="SHOP" href="/shop" iconSrc="/shop.svg"/>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  )
}
