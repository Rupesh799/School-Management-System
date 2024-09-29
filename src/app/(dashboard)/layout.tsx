import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex ">
            {/* left */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[1/6]  px-4 py-2 overflow-y-hidden shadow-md ">
                <Link href={'/'} className="flex justify-center items-center gap-1 lg:justify-start">
                    <Image src={'/logo.png'} alt="logo" width={32} height={32} className="text-xl"/>
                    <span className="font-bold hidden lg:block">HamroSchool</span>
                </Link>

                 <Menu/>

            </div>

            {/* right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-neutral-100  flex flex-col overflow-y-auto overflow-x-hidden">
                <Navbar/>
                {children}
            </div>
      </div>
    );
  }