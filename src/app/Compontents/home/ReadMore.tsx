import Image from "next/image"

export default function ReadMore() {
    return (
        <div
        style={{ backgroundImage: 'url("/img/home/hero-img.png")' ,transform: 'scale(1, -1)'} }
            className="w-full aspect-[2.7] sm:aspect-[13/6] relative flex justify-center items-center bg-cover bg-left-top">
            <div className="w-full aspect-[2.7] bg-gradient-to-b from-[#f6ebdf] to-transparent absolute top-0 left-0"></div>
            <div
                style={{transform: 'scale(1, -1)' }}
                className="w-full aspect-[0.4] bg-[url('/img/home/read-more-mobile.png')] sm:bg-[url('/img/home/read-more.png')] sm:aspect-[1.2] flex justify-center items-center bg-cover">  {/* top-[-15vh] */}
                <div className=" flex flex-col sm:flex-row justify-center items-center h-[60%] sm:h-full">

                

                    <div className="flex flex-col justify-center items-center w-full h-full sm:w-[50%] gap-7">
                        <h2 className="text-[#7f8341] text-4xl text-center text-wrap">Hakaya Al-Aqzam</h2>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center w-[80%] text-sm sm:text-xl text-[rgb(62,54,37)]"> Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec.</p>
                        </div>
                        <button
                            className="w-[9rem] p-1 sm:p-2 bg-[#7f8341] text-white shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">
                            Read More
                        </button>
                    </div>
                        <div  
                            className="bg-[url('/img/home/book-read-with-shadow-mobile.png')] sm:bg-[url('/img/home/book-read-more-with-shadow.png')] bg-contain bg-no-repeat bg-center w-[50%] h-full sm:h-[50%]  ">
                        </div>

                        
                    
                    {/* <div className="flex justify-center items-center h-[70%] w-full sm:w-[50%]  bg-black">
                        <div  
                            className="book-read-more-mobile sm:book-read-more bg-cover bg-center w-full bg-red-600 ">
                        </div>

                        
                    </div> */}
                </div>
            </div>
        </div>
    )
};

