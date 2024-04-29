import SideNav from "../Compontents/SideNav";

export default function Payment() {
    return (
        <div className=" w-[100%] sm:w-[80%] px-[5%] md:px-[0%] my-10  mx-auto">

            <div className="flex flex-col sm:flex-row justify-start items-center gap-5 w-[100%]">

                <div
                    style={{ backgroundImage: 'url("/img/MyAccount/image-circle.png")' }}
                    className="h-[10vh] w-[10vh] bg-cover order-2 sm:order-1"></div>

                <h1 className="text-2xl text-center sm:text-start order-1 sm:order-2">Hello, Join</h1>

            </div>

            <div className="flex w-[100%]">
                <SideNav />

                <form className="flex flex-col justify-between py-10 w-[100%] md:w-[55%] mx-auto h-[80vh] gap-y-[5%] md:gap-y-[0%]">

                    <div className="flex gap-x-[4%]">

                        <div className="flex flex-col w-[48%]">
                            <label className="text-[#666666] text-sm md:text-base ">First Name</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] " />
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label className="text-[#666666] text-sm md:text-base ">Second Name</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] " />
                        </div>

                    </div>


                    <div className="flex flex-col">
                        <label className="text-[#666666] text-sm md:text-base ">Card Number</label>
                        <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] text-sm md:text-base" placeholder="1234 - 5678 -9101 - 1234" />
                    </div>

                    <div className="flex gap-4">

                        <div className=" flex flex-col w-[50%]">
                            <label className="text-[#666666] text-sm md:text-base ">Expiration</label>

                            <div className="flex gap-4">
                                <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] w-[30%] text-sm md:text-base" placeholder="MM" />
                                <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] w-[50%] text-sm md:text-base" placeholder="YYY" />
                            </div>

                        </div>

                        <div className="flex flex-col w-[50%]">
                            <label className="text-[#666666] text-sm md:text-base ">CVV</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] " />
                        </div>

                    </div>

                    <div className="flex my-[5%] lg:my-0">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                        <label className="ml-2 text-sm text-[#3E3625]"><p>By continuing, you agree to Our <span className="underline underline-offset-2">Conditions of Use</span>  and <span className="underline underline-offset-2">Privacy Notice</span>  .</p></label>
                    </div>

                    <button className="text-sm md:text-base mx-auto py-[1%] px-[3%] bg-[rgb(127,131,65)] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Save Changes</button>
                </form>


            </div>

        </div>
    )
}