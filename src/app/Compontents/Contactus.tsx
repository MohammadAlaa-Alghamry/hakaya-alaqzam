import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import GoogleIcon from "./icons/Google";
import TwitterIcon from "./icons/TwitterIcon";

export default function ContactUs() {
    return (

        <div style={{ backgroundImage: 'url("/img/home/sec3-bg-img.svg")' }} className="bg-cover flex justify-center items-center" >
            <div className="flex flex-col sm:flex-row justify-between items-start w-[80%] mx-auto py-8 ">

                <div className="  flex flex-col w-full sm:w-[50%] justify-center sm:justify-start items-center sm:items-start ">

                    <h2 className="text-[rgb(127,131,65)] text-3xl">Contact US</h2>
                    <p className="my-4 text-[rgb(62,54,37)] text-center sm:text-start">Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec. A purus libero volutpat ultricies tortor gravida donec. A purus libero volutpat ultricies tortor gravida donec.</p>

                    <ul className="flex justify-around items-center w-[50%] gap-5 mx-auto py-[10%]">
                        <li className="p-[2%] flex justify-center items-center bg-[#7f8341] rounded-full "   >
                            <Link className="text-sm" href={""}  >

                                <GoogleIcon fill="#F6F3E2" />
                            </Link>
                        </li>
                        <li className="p-[2%] flex justify-center items-center bg-[#7f8341] rounded-full">
                            <Link href={""} >
                                <TwitterIcon fill="#F6F3E2" />
                            </Link>
                        </li>
                        <li className="p-[2%] flex justify-center items-center bg-[#7f8341] rounded-full" >
                            <a href={""}>
                                <FacebookIcon fill="#F6F3E2" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col w-full sm:w-[50%] items-center justify-start">
                    <p className=" text-[rgb(62,54,37)]"> Or send us a message </p>

                    <form className="py-[4%] flex flex-col gap-4">
                        <input className="bg-[#E9DFC8] py-[3%] px-[4%] rounded-md focus:outline-none placeholder-[#666666]" placeholder="Full name">
                        </input>
                        <input className="bg-[#E9DFC8] py-[3%] px-[4%] rounded-md focus:outline-none placeholder-[#666666]" placeholder="Email address">
                        </input>
                        <textarea className="bg-[#E9DFC8] py-[3%] px-[4%] rounded-md focus:outline-none placeholder-[#666666] resize-none" placeholder="Message..."></textarea>
                        <button className=" mx-auto py-[2%] px-[10%] bg-[rgb(127,131,65)] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Send</button>
                    </form>
                </div>

            </div>

        </div>
    )


};

