import SideNav from "../Compontents/SideNav";


export default function MyAccount() {
    return (
        <div className="w-[100%] sm:w-[80%]  px-[5%] md:px-[0%] my-10  mx-auto">

            <div className="flex flex-col sm:flex-row justify-start items-center gap-5 w-[100%]">

                <div
                    style={{ backgroundImage: 'url("/img/MyAccount/image-circle.png")' }}
                    className="h-[10vh] w-[10vh] bg-cover order-2 sm:order-1"></div>

                <h1 className="text-2xl text-center sm:text-start order-1 sm:order-2">Hello, Join</h1>

            </div>

            <div className="flex ">
                <SideNav />

                <form className="flex flex-col justify-between py-10 w-[100%] md:w-[55%] mx-auto h-[80vh] gap-y-[5%] md:gap-y-[0%] ">

                    <div className="flex gap-x-[4%]">

                        <div className="flex flex-col w-[48%]">
                            <label className="text-[#666666] text-sm md:text-base">First Name</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] " />
                        </div>

                        <div className="flex flex-col w-[48%]">
                            <label className="text-[#666666] text-sm md:text-base">Second Name</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] " />
                        </div>

                    </div>


                    <div className="flex flex-col">
                        <label className="text-[#666666] text-sm md:text-base">Email address</label>
                        <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] " />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#666666] text-sm md:text-base">Phone Number</label>

                        <div className="flex gap-2">
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] placeholder-[#666666]  w-[20%] sm:w-[10%] text-center text-sm" placeholder="+02" />
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%] w-[80%] sm:w-[90%]" />
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#666666] flex justify-between">
                            <span>   Password</span>
                            <a href="" className="text-[#7F8341] text-sm md:text-base">  Change</a>
                        </label>
                        <input className="bg-[#E9DFC8]  rounded-md focus:outline-none p-[2%]  " />
                    </div>

                    <button className=" mx-auto py-[1%] px-[3%] bg-[rgb(127,131,65)] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none text-sm md:text-base">Save Changes</button>
                </form>


            </div>

        </div>
    );
};