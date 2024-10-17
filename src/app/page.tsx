import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
    return (
        <div className="h-screen w-screen p-4 flex justify-center items-center">
            <ScrollArea className="h-[500px] w-[320px] rounded-md border">
                <div className="p-4">
                    <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tighter">
                        Frontend Mentor Solutions
                    </h2>
                    <Link
                        href="/bento-grid"
                        className={`${buttonVariants({ variant: "outline" })}`}
                    >
                        Bento Grid
                    </Link>
                    <Link
                        href="/mortgage-calculator"
                        className={`${buttonVariants({ variant: "outline" })}`}
                    >
                        Mortgage Calculator
                    </Link>
                    <Link
                        href="/news-homepage"
                        className={`${buttonVariants({ variant: "outline" })}`}
                    >
                        News Homepage
                    </Link>
                    <Link
                        href="/agency-landing"
                        className={`${buttonVariants({ variant: "outline" })}`}
                    >
                        Agency Landing Page
                    </Link>
                    <Link
                        href="/url-shortener"
                        className={`${buttonVariants({ variant: "outline" })}`}
                    >
                        URL Shortener (in progress)
                    </Link>
                </div>
            </ScrollArea>
        </div>
    );
}
