import Image from "next/image"

export default function section1(){
    return(

        
<div className=" py-8 w-full bg-[rgb(246,235,223)]">
    <div className=" container flex justify-center align-middle mx-auto px-8 ">

    <div className="flex-initial  w-[60%]  ">
        <div className="flex  flex-col">
        <h2 className="text-[rgb(127,131,65)] text-3xl text-center  w-[40%] mx-auto">Good morning to you</h2>
        <p className="text-center w-[60%] mx-auto  my-4 text-[rgb(62,54,37)]"> <strong className="text-2xl" > “</strong>  Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec. <strong className="text-2xl" > “</strong></p>
        </div>
 


</div>

<div  className="flex-initial w-[40%]  ">
<div className="flex justify-center align-middle w-full h-full">

<Image

            src="/img01.png"
            width={250}
            height={200}
            alt="image"
          />
</div>

</div>

    </div>

</div>
    )

    
};

