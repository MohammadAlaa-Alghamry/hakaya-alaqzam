import SideNav from "./SideNav";


export default function MyAccount() {
    return (
        <div className="w-[80%] my-10  mx-auto">

            <div className="flex flex-col sm:flex-row justify-start items-center gap-5 w-[100%]">

                <div
                    style={{ backgroundImage: 'url("/img/MyAccount/image-circle.png")' }}
                    className="h-[10vh] w-[10vh] bg-cover order-2 sm:order-1"></div>

                <h1 className="text-2xl text-center sm:text-start order-1 sm:order-2">Hello, Join</h1>

            </div>

            <div className="flex ">
                <SideNav />

                <form className="flex flex-col justify-between py-10 w-[55%] mx-auto h-[80vh] ">

                    <div className="flex gap-2">

                        <div className="flex flex-col w-[50%]">
                            <label className="text-[#666666]">First Name</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] " />
                        </div>

                        <div className="flex flex-col w-[50%]">
                            <label className="text-[#666666]">Second Name</label>
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] " />
                        </div>

                    </div>


                    <div className="flex flex-col">
                        <label className="text-[#666666]">Email address</label>
                        <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] " />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#666666]">Phone Number</label>

                        <div className="flex gap-2">
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] placeholder-[#666666] w-[10%] text-center " placeholder="+02" />
                            <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%] w-[90%] " />
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#666666] flex justify-between">
                            <span>   Password</span>
                            <a href="" className="text-[#7F8341]">  Change</a>
                        </label>
                        <input className="bg-[#E9DFC8]  rounded-md focus:outline-none py-[1%]  " />
                    </div>

                    <button className=" mx-auto py-[1%] px-[3%] bg-[rgb(127,131,65)] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Save Changes</button>
                </form>


            </div>

        </div>
    );
};