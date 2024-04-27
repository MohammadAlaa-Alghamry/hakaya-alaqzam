

export default function AboutUs() {
    return (
        <div style={{ backgroundImage: 'url("/img/AboutUS/sec1-bg-img.svg")' }} className="bg-cover flex justify-center items-center" >
            <div debug-name="navbar-placeholder" className=" bg-transparent w-full h-[5rem]"></div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-[80%] mx-auto py-8">
                <div className="flex flex-col w-full sm:w-[50%] justify-center sm:justify-start items-center sm:items-start ">
                    <h2 className="text-[rgb(127,131,65)] text-3xl  ">About US</h2>
                    <p className="my-4 text-[rgb(62,54,37)] text-center sm:text-start">Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec. A purus libero volutpat ultricies tortor gravida donec. A purus libero volutpat ultricies tortor gravida donec.</p>
                </div>
                <div className="flex flex-col w-full sm:w-[50%] justify-center items-center ">
                    <div style={{ backgroundImage: 'url("img/icons/AboutUs/sec1-img.svg")' }} className="bg-cover w-80 h-80">
                    </div>
                </div>
            </div>
        </div>
    )
};

