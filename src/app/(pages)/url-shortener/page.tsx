import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";

import { GrMenu } from "react-icons/gr";

import Logo from "@/assets/url-shortener/logo.svg";
import HeaderImage from "@/assets/url-shortener/illustration-working.svg";

export default function URLShortener() {
    return (
        <main className={`${poppins.className} bg-[#ffffff]`}>
            <nav className="flex justify-between pt-10 p-6">
                <Image src={Logo} alt="logo" />
                <GrMenu className="-mr-1.5" size={30} color="#96949f" />
            </nav>
            <section>
                <div className="h-[338px] w-full relative mb-10 overflow-hidden">
                    <Image
                        className="absolute h-full object-cover object-left bottom-0 -right-4"
                        src={HeaderImage}
                        alt="header image"
                    />
                </div>
                <div className="px-6 text-center">
                    <h1 className="text-[hsl(255,11%,22%)] font-bold text-[2.65rem] leading-[1.15] -tracking-2">
                        More than just shorter links
                    </h1>
                    <div className="w-full h-[500px]"></div>
                </div>
            </section>
        </main>
    );
}
