import Image from "next/image"
import Nav from "../Nav"


export default function GoodMorning() {
    return (
        <div
            className="w-full bg-[url('/img/home/hero-img.png')] aspect-[0.606] sm:aspect-[1.44] bg-cover" >
            <div className="w-full h-full flex flex-col justify-between items-center sm:h-fit">

                <Nav />
                <div className="w-full h-full sm:h-fit flex flex-col justify-around items-center sm:flex-row gap-5 sm:gap-0 sm:px-10 sm:mt-[6rem] sm:justify-between sm:items-center ">

                    <div className="flex h-fit justify-around items-center flex-col w-full md:w-[50%] gap-7">

                        <div className="text-[#7f8341] text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                            <h1 className="text-nowrap">Good Morning To</h1>
                            <h1>You</h1>
                        </div>

                        <div className="flex justify-center">

                            <span className="w-[90%] text-center text-[#3e3625] text-2xl sm:text-2xl ">
                                <span className="w-[2rem] h-[2rem] text-transparent">xxxxx</span>
                                <span className="relative">
                                    Lorem
                                    <span
                                        className="absolute top-[-.3rem] left-[-4rem] bg-[url('/img/home/open-qutation-mobile.svg')] sm:bg-[url('/img/home/open-qutation-img.svg')] bg-right-top bg-no-repeat w-[3rem] h-[3rem]">
                                    </span>
                                </span>
                                ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida
                                <span className="relative">
                                    donec.
                                    <span
                                        className="absolute bottom-[-.4rem] right-[-4rem] bg-[url('/img/home/closed-qutation-mobile.svg')] sm:bg-[url('/img/home/close-qutation-img.svg')] sm:closed-qutation bg-left-bottom bg-no-repeat w-[3rem] h-[3rem] ">
                                    </span>
                                </span>
                            </span>



                        </div>

                    </div>

                    <div className="bg-girl-sitting-img-mobile sm:bg-girl-sitting-on-a-mushroom bg-cover w-[90%] sm:w-[40%] aspect-[1.047]">
                    </div>


                </div>

            </div>
        </div>
    )
};

