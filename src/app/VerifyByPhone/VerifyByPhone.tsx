import Link from "next/link";
import FacebookIcon from "../Compontents/icons/FacebookIcon";
import GoogleIcon from "../Compontents/icons/Google";

export default function VerifyByPhone() {
    return (

        <div className="flex flex-col justify-center items-center  py-[5%] w-[100%] sm:w-[60%] mx-auto ">
            <h1 className=" text-[#3E3625] text-center text-sm md:text-2xl">Verify mobile number</h1>
            <p className=" text-[#3E3625] w-[50%] mx-auto text-center font-semibold my-2  text-sm md:text-base">A text with a One Time password (OTP) has been sent to your mobile number: +201234567890 <a href="" className="text-[#7f8341]">Change</a> </p>

            <form className="flex flex-col justify-between items-center py-10 w-[50%] mx-auto gap-6 ">

                <div className="flex justify-center  w-[100%] sm:w-[95%] mx-auto flex-col gap-2">

                    <div className="flex justify-between">
                        <label className="text-[#3E3625]"> Enter OTP: </label>
                        <a href="" className="text-[#7f8341]">Resend OTP</a>
                    </div>


                    <div className="flex gap-1 md:gap-4">
                        <input className="bg-[#F6F3E2] w-[22%]  rounded-md focus:outline-none py-[1%] px-[2%] " />
                        <input className="bg-[#F6F3E2] w-[22%]  rounded-md focus:outline-none py-[1%] px-[2%] " />
                        <input className="bg-[#F6F3E2] w-[22%]  rounded-md focus:outline-none py-[1%] px-[2%] " />
                        <input className="bg-[#F6F3E2] w-[22%]  rounded-md focus:outline-none py-[1%] px-[2%] " />
                    </div>

                </div>


                <button className="w-full py-[1%] px-[3%] bg-[#7f8341] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Create account</button>

                <p className=" text-sm md:text-base text-[#3E3625] text-center w-[90%] mx-auto">By continuing, you agree to Our <span className="underline underline-offset-2">Conditions of Use</span>  and <span className="underline underline-offset-2">Privacy Notice</span>  .</p>
            </form >


            <div className="my-2 w-[30%] mx-auto">
                <ul className="flex justify-around items-center  ">

                    <li className="p-[3%] flex justify-center items-center bg-[#7f8341] rounded-full">
                        <Link href={""} >
                            <FacebookIcon fill="#F6F3E2" />
                        </Link>
                    </li>

                    <li className="p-[3%] flex justify-center items-center bg-[#7f8341] rounded-full">
                        <Link href={""} >
                            <GoogleIcon fill="#F6F3E2" />
                        </Link>
                    </li>
                </ul>
            </div>

            <p className="text-[#3E3625] mt-6 ">Already have an account?  <a href="" className="text-[#7f8341]"> Log in</a> </p>
        </div>

    )
};
