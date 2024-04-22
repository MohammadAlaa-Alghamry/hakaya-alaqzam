import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";


export default function Footer() {
    return (
        <div style={{ backgroundImage: 'url("/img//icons/footer.svg")' }} className="bg-cover bg-center py-[7%]  flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-6 w-[80%]">
                
                <ul className="flex justify-around items-center text-nowrap w-full sm:w-[50%]">
                    <li >
                        <Link href={""} className="text-[rgb(127,131,65)] text-xl">Contact us</Link>
                    </li>
                    <li>
                        <Link href={""} className="text-[rgb(127,131,65)] text-xl">About us</Link>
                    </li>
                    <li>
                        <Link href={""} className="text-[rgb(127,131,65)] text-xl">Copy rights</Link>
                    </li>
                </ul>

                <ul className="flex justify-around items-center w-[25%] gap-5 mx-auto">
                    <li className="p-[2%] flex justify-center items-center bg-[#7f8341] rounded-full "   >
                        <Link className="text-sm" href={""}  >
                            <InstagramIcon fill="#F6F3E2" />

                        </Link>
                    </li>
                    <li className="p-[2%] flex justify-center items-center bg-[#7f8341] rounded-full">
                        <Link href={""} >
                            <FacebookIcon fill="#F6F3E2" />
                        </Link>
                    </li>
                    <li className="p-[2%] flex justify-center items-center bg-[#7f8341] rounded-full" >
                        <a href={""}>
                            <TwitterIcon fill="#F6F3E2" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};