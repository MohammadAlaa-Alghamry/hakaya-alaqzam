

export default function HeroText() {
    return (
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
    )
};

