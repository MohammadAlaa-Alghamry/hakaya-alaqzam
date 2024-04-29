import SideNav from "../Compontents/SideNav";

export default function Subscribe() {
    return (
        <div className=" w-[100%] sm:w-[80%] px-[5%] md:px-[0%] my-10  mx-auto ">

            <div className="flex flex-col sm:flex-row justify-start items-center gap-5 w-[100%]">

                <div
                    style={{ backgroundImage: 'url("/img/MyAccount/image-circle.png")' }}
                    className="h-[10vh] w-[10vh] bg-cover order-2 sm:order-1"></div>

                <h1 className="text-2xl text-center sm:text-start order-1 sm:order-2">Hello, Join</h1>

            </div>

            <div className="flex w-[100%] ">
                <SideNav />

                <div className="flex flex-col justify-between py-10 w-[100%] md:w-[55%] mx-auto h-[80vh] gap-y-[5%] md:gap-y-[0%]">
                    
                    <p className="text-center text-xl text-[#666666] font-bold">Subscribe & choose your plan</p>

                    <div className="flex justify-between items-center">

                        <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-[32%] bg-[#E9DFC8] p-[2%] rounded-md ">

                            <p className="text-[#666666] ">3 months</p>

                            <h2 className="text-[#666666] font-extrabold text-xl">$ 30</h2>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>



                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>


                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>




                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-[32%] bg-[#E9DFC8] p-[2%] rounded-md ">

                            <p className="text-[#666666]">6 months</p>

                            <h2 className="text-[#666666] font-extrabold text-xl">$ 60</h2>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>



                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>


                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>




                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-[32%] bg-[#E9DFC8] p-[2%] rounded-md ">

                            <p className="text-[#666666]">12 months</p>

                            <h2 className="text-[#666666] font-extrabold text-xl">$ 100</h2>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>



                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>


                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <input className="rounded-full  bg-#7F8341 h-5 w-5 border-#7F8341 checked:bg-#7F8341 checked:border-transparent focus:outline-none" type="checkbox" />
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>




                        </div>

                    </div>

                     <form className="flex justify-center items-center">
                    <button className="text-sm md:text-base  py-[1%] px-[3%] bg-[rgb(127,131,65)] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Subscribe</button>
                </form>

                </div>


            </div>

        </div>
    )
}