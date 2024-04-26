import Link from "next/link";
import FacebookIcon from "../Compontents/icons/FacebookIcon";
import GoogleIcon from "../Compontents/icons/Google";

export default function SignUp() {
    return (

        <div className="flex flex-col justify-center items-center  py-[5%] w-[100%] sm:w-[80%]  mx-auto">
            <h1 className=" text-[#3E3625] text-2xl">Create Your Account</h1>

            <form className="flex flex-col justify-between py-10 w-[50%] mx-auto gap-6">

                <div className="flex w-[100%] sm:w-[95%] mx-auto flex-col gap-2">
                    <label className="text-[#3E3625]">Your Name</label>
                    <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] px-[2%] text-sm placeholder-[##C7C7C7]" placeholder="First & last name" />
                </div>

                <div className="flex w-[100%] sm:w-[95%] mx-auto  flex-col gap-2">
                    <label className="text-[#3E3625]">Email</label>
                    <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] px-[2%] text-sm  placeholder-[##C7C7C7]" placeholder="example@email.com" />
                </div>

                <div className="flex w-[100%] sm:w-[95%] mx-auto  flex-col gap-2">
                    <label className="text-[#3E3625]">Password</label>
                    <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] px-[2%] text-sm placeholder-[##C7C7C7]" placeholder="At least 6 charchters" />
                </div>

                <div className="flex w-[100%] sm:w-[95%] mx-auto  flex-col gap-2">
                    <label className="text-[#3E3625]">Re-enter the password</label>
                    <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] px-[2%] text-sm placeholder-[##C7C7C7]" placeholder="At least 6 charchters" />
                </div>

                <div className="flex w-[100%] sm:w-[95%] mx-auto  items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <label className="ml-2 text-sm text-[#3E3625]">I would like to receive exclusive offers and promotional emails.</label>
                </div>

                <button className="w-full py-[1%] px-[3%] bg-[#7f8341] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Continue</button>

                <p className="text-base text-[#3E3625] text-center w-[90%] mx-auto">By continuing, you agree to Our <span className="underline underline-offset-2">Conditions of Use</span>  and <span className="underline underline-offset-2">Privacy Notice</span>  .</p>
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

            <p className="text-[#3E3625] mt-6 ">Already have an account? <a href="" className="text-[#7f8341]">Log in</a> </p>
        </div>




    )


};

