import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";
export const Mobilesidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-white"/>
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side="left">
            <Sidebar/>
        </SheetContent>
    </Sheet>
  )
}
