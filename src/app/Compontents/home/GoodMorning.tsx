import NavBarOffset from "../NavBarOffset"
import HeroText from "./HeroText/HeroText"


export default function GoodMorning() {
    return (
        <div
            className="w-full bg-[url('/img/home/hero-img.png')] aspect-[0.606] sm:aspect-[1.44] bg-cover" >
            <div className="w-full h-full flex flex-col justify-between items-center sm:h-fit">

                <NavBarOffset />
                <div debug-name="navbar-placeholder" className=" bg-transparent w-full h-[5rem]"></div>
                <div className="w-full h-full sm:h-fit flex flex-col justify-around items-center sm:flex-row gap-5 sm:gap-0 sm:px-10 sm:mt-[6rem] sm:justify-between sm:items-center ">
                    <div className="flex h-fit justify-around items-center flex-col w-full md:w-[50%] gap-7">
                        <div className="text-[#7f8341] text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                            <h1 className="text-nowrap">Good Morning To</h1>
                            <h1>You</h1>
                        </div>
                        <HeroText />
                    </div>
                    <div className="bg-[url('/img/home/girl-sitting-img-mobile.png')] md:bg-[url('/img/home/girl-sitting-on-a-mushroom.png')] bg-cover w-[90%] sm:w-[40%] aspect-[1.047]">
                    </div>


                </div>

            </div>
        </div>
    )
};

