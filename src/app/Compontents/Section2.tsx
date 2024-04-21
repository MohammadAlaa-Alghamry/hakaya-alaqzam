import Image from "next/image"

export default function section1(){
    return(

        
<div className=" py-4 w-full bg-[rgb(246,235,223)]">
    <div className=" container flex justify-center align-middle mx-auto px-8">

    <div className="flex-initial  w-[50%]  ">
        <div className="flex flex-col ">
        <h2 className="text-[rgb(127,131,65)] text-3xl text-center  mx-auto">Hakaya Al-Aqzam</h2>
        <p className="text-center w-[80%] mx-auto my-4 text-[rgb(62,54,37)]"> Lorem ipsum dolor sit amet consectetur. Scelerisque egestas risus velit quisque ut iaculis magnis et. A purus libero volutpat ultricies tortor gravida donec.</p>
  
       <button className=" mx-auto py-2 px-4 bg-[rgb(127,131,65)] text-white font-semibold  shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Read More</button>
        </div>



</div>

<div className="flex-initial w-[50%] overflow-hidden"> 
  <div className="flex justify-center items-center w-full h-full ">
    <div className="transform rotate-12"> 
      <Image
        src="/img02.png"
        width={500}
        height={500}
        alt="image"
      />
    </div>
  </div>
</div>

    </div>

</div>
    )

    
};

