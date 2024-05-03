import SideNav from "../Compontents/SideNav";

export default function Subscribe() {
    return (
        <div className=" w-[100%] lg:w-[80%] px-[5%] md:px-[0%] my-10  mx-auto ">

            <div className="flex flex-col sm:flex-row justify-start items-center gap-5 w-[100%]">

                <div
                    style={{ backgroundImage: 'url("/img/MyAccount/image-circle.png")' }}
                    className="h-[10vh] w-[10vh] bg-cover order-2 sm:order-1"></div>

                <h1 className="text-2xl text-center sm:text-start order-1 sm:order-2">Hello, Join</h1>

            </div>

            <div className="flex w-[100%] ">
                <SideNav />

                <div className="flex flex-col justify-between py-10 w-[100%] md:w-[55%] mx-auto  ">

                    <p className="text-center text-xl text-[#666666] font-bold">Subscribe & choose your plan</p>

                    <div className=" overflow-scroll lg:overflow-hidden whitespace-no-wrap flex justify-between items-center my-10 gap-4 lg:gap-0">

                        <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-[100%] lg:w-[32%] bg-[#E9DFC8] p-[2%] rounded-md ">

                            <p className="text-[#666666] ">3 months</p>

                            <h2 className="text-[#666666] font-extrabold text-xl">$ 30</h2>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">

                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>

                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>


                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>

                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-[100%] lg:w-[32%] bg-[#E9DFC8] p-[2%] rounded-md ">

                            <p className="text-[#666666]">6 months</p>

                            <h2 className="text-[#666666] font-extrabold text-xl">$ 60</h2>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>



                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>


                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>




                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 shadow-lg w-[100%] lg:w-[32%] bg-[#E9DFC8] p-[2%] rounded-md ">

                            <p className="text-[#666666]">12 months</p>

                            <h2 className="text-[#666666] font-extrabold text-xl">$ 100</h2>

                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>



                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
                                <label className="ml-2 text-sm text-[#666666]">Lorem ipsum dolor sit amet consectetur.</label>
                            </div>


                            <div className="flex justify-center items-center my-[5%] lg:my-0">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="customStyle">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
                                        id="customStyle" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>

                                </label>
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