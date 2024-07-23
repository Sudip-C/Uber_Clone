import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer =()=>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
        <div className="max-w-screen-lg mx-auto 
        flex items-center justify-evenly h-full"
        >
            <Button size="lg" variant="ghost" className="w-full">
                <Image src='/croatia.png' 
                alt="Croatian" 
                height={32} 
                width={40}
                className="mr-4 rounded-md"
                />
                Croatian
            </Button>
            <Button size="lg" variant="ghost" className="w-full">
                <Image src='/france.png' 
                alt="france" 
                height={32} 
                width={40}
                className="mr-4 rounded-md"
                />
                French
            </Button>
            <Button size="lg" variant="ghost" className="w-full">
                <Image src='/spain.png' 
                alt="spanish" 
                height={32} 
                width={40}
                className="mr-4 rounded-md"
                />
                Spanish
            </Button>
            <Button size="lg" variant="ghost" className="w-full">
                <Image src='/italy.png' 
                alt="italian" 
                height={32} 
                width={40}
                className="mr-4 rounded-md"
                />
                Italian
            </Button>
            <Button size="lg" variant="ghost" className="w-full">
                <Image src='/japan.png' 
                alt="japanese" 
                height={32} 
                width={40}
                className="mr-4 rounded-md"
                />
                Japanese
            </Button>
        </div>
        </footer>
    )
}