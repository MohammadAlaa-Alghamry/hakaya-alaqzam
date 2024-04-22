import Image from "next/image"

export default function ReadMore() {
    return (
        <div
            style={{ backgroundImage: 'url("/img/home/hero-img.png")', transform: 'scale(1, -1)' }}
            className="relative h-full w-full flex justify-center items-center bg-cover bg-left-top aspect-[16/13]">
            <div className="w-full h-full bg-gradient-to-b from-[#f6ebdf] to-transparent absolute top-0 left-0"></div>
            <div
                style={{ backgroundImage: 'url("/img/home/read-more.png")', position: 'absolute', top: '-120px', transform: 'scale(1, -1)' }}
                className=" flex justify-center items-center w-full aspect-[16/16] bg-cover">  {/* top-[-15vh] */}
                <div className="flex flex-col sm:flex-row justify-center items-center h-full">

                    <div className="flex flex-col justify-center items-center w-full h-full sm:w-[50%] gap-7">
                        <h2 className="text-[#7f8341] text-7xl text-center text-wrap">Hakaya Al-Aqzam</h2>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center w-[80%]  text-2xl text-[rgb(62,54,37)]"> Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec.</p>
                        </div>
                        <button
                            className="w-[20%] bg-[#7f8341] text-white shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">
                            Read More
                        </button>
                    </div>

                    <div className="flex justify-center items-center h-[70%] w-full sm:w-[50%] relative">
                        <div style={{ backgroundImage: 'url("img/home/book-read-more-with-shadow.png")' }}
                            className="bg-cover bg-center w-[80%] aspect-[13/17]">
                        </div>

                        {/* <Image
                            className="rotate-12"
                            src="/img/home/book-homepage.png"
                            layout="fill"
                            objectFit="contain"
                            alt="image"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

