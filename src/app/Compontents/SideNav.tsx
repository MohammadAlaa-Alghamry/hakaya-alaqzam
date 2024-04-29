import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
    return (

        <div className=" hidden sm:flex flex-col justify-between py-10 w-[20%] h-[80vh]">

            <ul className="flex flex-col gap-5">
                <li> <Link href={""} className="text-[#666666] focus:text-black "> My Profile</Link> </li>
                <li> <Link href={""} className="text-[#666666] focus:text-black "> Subscribe</Link> </li>
                <li> <Link href={""} className="text-[#666666] focus:text-black "> Edit Payment</Link>  </li>
                <li> <Link href={""} className="text-[#666666] focus:text-black ">   Help Center</Link></li>
            </ul>

            <form className="flex items-center gap-2 ">
                <Image
                    src="/img/MyAccount/Logout-btn.png"
                    width={20}
                    height={16}
                    alt="Logout-btn"
                />
                <button className="text-[#B44F37]">
                    Log Out
                </button>

            </form>

        </div>
    );
}