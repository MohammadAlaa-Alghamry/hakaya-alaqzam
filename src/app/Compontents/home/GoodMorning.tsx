import Image from "next/image"


export default function GoodMorning() {
    return (
        <div
            style={{ backgroundImage: 'url("/img/home/hero-img.png")' }}
            className="w-full flex justify-center items-center bg-cover bg-left-top sm:p-10" >

            <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-0 sm:justify-between items-start h-full">

                <div className="flex justify-start items-center flex-col w-full h-[full] md:w-[50%] gap-7">

                    <div className="text-[rgb(127,131,65)] text-center text-2xl sm:text-4xl md:text-5xl">
                        <h1>Good Morning To</h1>
                        <h1>You</h1>
                    </div>

                    <div className="flex ">
                    <div 
                    className="open-qutation-mobile sm:open-qutation bg-right-top bg-no-repeat w-[20%]  ">
                </div>
                    <span className="w-[60%] text-center text-[rgb(62,54,37)] text-sm sm:text-xl "> Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec. </span>
                   
                    <div
                    className="closed-qutation-mobile sm:closed-qutation bg-left-bottom bg-no-repeat w-[20%]  ">
                </div>

                    </div>
                    
                </div>

                <div className="  mx-auto bg-girl-sitting-img-mobile sm:bg-girl-sitting-on-a-mushroom bg-cover w-[50%] sm:w-[40%] aspect-square">
                </div>

                
            </div>

        </div>
    )
};

