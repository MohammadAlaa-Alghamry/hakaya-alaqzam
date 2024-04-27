import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";


export default function Footer() {
    return (
        <div className="w-full bg-[url('/img/layout/footer.png')] bg-cover aspect-[3.7] flex flex-col justify-center items-center">
            <div className="w-full h-full flex justify-center items-center flex-col gap-6 ">

                <ul className="flex justify-around items-center text-nowrap w-full  text-sm sm:text-2xl">
                    <li >
                        <Link href={""} className="text-[rgb(127,131,65)]">Contact us</Link>
                    </li>
                    <li>
                        <Link href={""} className="text-[rgb(127,131,65)]">About us</Link>
                    </li>
                    <li>
                        <Link href={""} className="text-[rgb(127,131,65)]">Copy rights</Link>
                    </li>
                </ul>

                <ul className="flex justify-center items-center w-full gap-5">
                    <li className="p-[2%] m-0 flex justify-center items-center bg-[#7f8341] rounded-full "   >
                        <Link className="text-sm" href={""}  >
                            <InstagramIcon fill="#F6F3E2" />

                        </Link>
                    </li>
                    <li className="p-[2%] m-0 flex justify-center items-center bg-[#7f8341] rounded-full">
                        <Link href={""} >
                            <FacebookIcon fill="#F6F3E2" />
                        </Link>
                    </li>
                    <li className="p-[2%] m-0 flex justify-center items-center bg-[#7f8341] rounded-full" >
                        <a href={""}>
                            <TwitterIcon fill="#F6F3E2" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};