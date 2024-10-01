import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
    return (
        <div className="h-screen w-screen p-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/bento-grid">
                            Bento Grid
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                FRONTEND MENTORS SOLUTIONS
            </h1>
            <Link
                href="bento-grid"
                className={buttonVariants({ variant: "link" })}
            >
                Bento Grid
            </Link>
        </div>
    );
}
