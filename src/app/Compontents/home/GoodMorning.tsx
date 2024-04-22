import Image from "next/image"


export default function GoodMorning() {
    return (
        <div
            style={{ backgroundImage: 'url("/img/home/hero-img.png")' }}
            className="h-full w-full flex justify-center items-center bg-cover bg-left-top aspect-[20/13] p-10">

            <div className=" flex flex-col sm:flex-row  justify-between items-center">
                <div className="flex justify-center items-center flex-col w-full sm:w-[50%] gap-7">
                    <h1 className="text-[rgb(127,131,65)]  text-5xl text-center ">Good Morning To</h1>
                    <h1 className="text-[rgb(127,131,65)]  text-5xl text-center ">You</h1>
                    <p className="text-center text-[rgb(62,54,37)] text-lg "> <strong className="text-2xl" > “</strong>  Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec. <strong className="text-2xl" > “</strong></p>
                </div>
                <div
                    style={{ backgroundImage: 'url("img/home/girl-sitting-on-a-mushroom.png")' }}
                    className="bg-cover w-[70%] aspect-square">
                </div>

                {/* <Image 
                src={"/img/home/girl-sitting-on-a-mushroom.png"}
                height={700}
                width={700}
                objectFit="cover" 
                alt="Tiny girl sitting on a mushroom"
                /> */}
                
            </div>

        </div>
    )
};

