export default function ReadMore() {
    return (

        <div style={{ backgroundImage: 'url("/img//icons/home/sec2-bg-img.svg")' }} className="bg-cover bg-center">
            <div className="flex flex-col sm:flex-row justify-around items-center w-[80%] mx-auto py-8">

                <div className="flex flex-col w-full sm:w-[50%] ">
                    <h2 className="text-[rgb(127,131,65)] text-3xl text-center  mx-auto">Hakaya Al-Aqzam</h2>
                    <p className="text-center w-[80%] mx-auto my-4 text-[rgb(62,54,37)]"> Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec.</p>

                    <button className=" mx-auto py-[2%] px-[4%] bg-[rgb(127,131,65)] text-white font-semibold  shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Read More</button>

                </div>

                <div className="overflow-hidden w-full sm:w-[50%]">

                    <div style={{ backgroundImage: 'url("img/icons/home/sec2-img.png")' }} className="bg-cover bg-center w-80 h-80 rotate-12">

                    </div>

                </div>


            </div>

        </div>

    )


};

