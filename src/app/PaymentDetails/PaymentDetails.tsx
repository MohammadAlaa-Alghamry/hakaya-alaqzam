function toggleDiv() {
    const firstDiv: HTMLElement | null = document.getElementById("firstDiv");
    const secondDiv: HTMLElement | null = document.getElementById("secondDiv");

    if (firstDiv && secondDiv) {

        firstDiv.style.display = "none";
        secondDiv.style.display = "block";
    }
}

export default function PaymentDetails() {
    return (
        <div className="flex  w-[100%] lg:w-[85%] mx-auto">

            <div className="w-[50%] bg-[#F6F3E2] flex flex-col p-5">

                <a className="w-[2%] mb-3" href=""> <img src="/img/icons/arrow-icon.png" alt="" /></a>
                <h1 className="text-[#3E3625]  text-2xl mb-10">Payment Details</h1>

                <div className="flex flex-col w-[90%] mx-auto ">
                    <h3 className="text-[#666666] font-bold">Book Information</h3>

                    <div className="flex gap-5 my-5 ">
                        <img className=" w-[40%] h-[50%] md:h-[80%] " src="/img/PaymentDetails/book-img.png" alt=" book img" />

                        <div className="flex flex-col w-[70%] md:w-[50%]">
                            <h4 className="text-[#666666] font-bold">Hakaya Al-Aqzam</h4>
                            <p className="text-[#666666]">Lorem ipsum dolor sit amet consectetur. In ut cursus vestibulum nibh. In lectus eu nullam tellus ac a iaculis faucibus viverra.tetur. In ut cursus vestibulum nibh. In lectus eu nullam tellus ac a iaculis.</p>
                            <h2 className="text-[#666666] font-bold text-center text-xl py-4">10$</h2>
                        </div>

                    </div>

                </div>

                <div id="firstDiv" className="flex justify-between w-[80%]" onClick={toggleDiv}>
                    <div className="flex items-center justify-between">
                        <img className="w-[15%]" src="/img/PaymentDetails/download-icon.png" alt="" />
                        <h2 className="text-[#666] font-extrabold ">Download the book</h2>
                    </div>

                    <h2 className="text-[#666] font-extrabold text-2xl">$10</h2>
                </div>



                <div id="secondDiv" className="hidden">
                    <div className="flex  items-center ">
                        <div className="flex justify-between w-[80%]">

                            <div className="flex flex-col gap-4">

                                <div className="flex items-center">
                                    <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="Downloadthebook">
                                        <input name="type" type="radio"
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#666] text-[#666] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#666] checked:before:bg-[#666] hover:before:opacity-10"
                                            id="Downloadthebook" />
                                        <span
                                            className="absolute text-[#666] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="mt-px ml-2 font-light text-gray-700 cursor-pointer select-none" htmlFor="Downloadthebook">
                                        Download the book
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="Downloadthebook">
                                        <input name="type" type="radio"
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#666] text-[#666] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#666] checked:before:bg-[#666] hover:before:opacity-10"
                                            id="Downloadthebook" />
                                        <span
                                            className="absolute text-[#666] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="mt-px ml-2 font-light text-gray-700 cursor-pointer select-none" htmlFor="Downloadthebook">
                                        Subscribe & choose your plan
                                    </label>
                                </div>
                            </div>


                            <h2 className="text-[#666666] font-bold text-center text-xl ">10$</h2>
                        </div>
                    </div>
                    <div className="flex justify-between py-6 ">

                        <div className=" w-[30%] text-[#666] hover:text-[#F6F3E2] py-[5%] px-[4%] bg-[#EDE9E9] hover:bg-[#7F8341]  border-[0.1px] border-[#666] shadow-md rounded-md ">
                            <h4 className=" font-bold text-center text-base lg:text-xl">3 months <br></br> $30</h4>
                        </div>

                        <div className=" w-[30%] text-[#666] hover:text-[#F6F3E2]  py-[5%] px-[4%] bg-[#EDE9E9] hover:bg-[#7F8341] border-[0.1px] border-[#666] shadow-md rounded-md ">
                            <h4 className=" font-bold text-center text-base lg:text-xl">6 months <br></br> $60</h4>
                        </div>

                        <div className=" w-[30%] text-[#666] hover:text-[#F6F3E2] py-[5%] px-[4%] bg-[#EDE9E9] hover:bg-[#7F8341] border-[0.1px] border-[#666] shadow-md rounded-md ">
                            <h4 className="font-bold text-center text-base lg:text-xl">annually <br></br> $100</h4>
                        </div>
                    </div>
                </div>





            </div>

            <div className="w-[50%] flex-col p-5 bg-[#E9DFC8]">

                <h2 className="text-[#3E3625] text-xl">Card Details</h2>

                <img className="w-[80%] mx-auto my-3" src="/img/PaymentDetails/visa-img.png" alt="" />


                <form className="flex flex-col gap-5 justify-between py-8 ">

                    <div className="flex flex-col ">
                        <label className="text-[#3E3625] py-2 font-bold text-sm md:text-base ">Name on card</label>
                        <input className="bg-[#F6F3E2]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] text-sm md:text-base" placeholder="John Smith" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#3E3625] py-2 font-bold text-sm md:text-base ">Card Number</label>
                        <input className="bg-[#F6F3E2]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] text-sm md:text-base" placeholder="1234 - 5678 -9101 - 1234" />
                    </div>

                    <div className="flex gap-4">

                        <div className=" flex flex-col w-[50%]">
                            <label className="text-[#3E3625] py-2 font-bold  text-sm md:text-base ">Expiration</label>

                            <div className="flex gap-4">
                                <input className="bg-[#F6F3E2]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] w-[30%] text-sm md:text-base" placeholder="MM" />
                                <input className="bg-[#F6F3E2]  rounded-md focus:outline-none p-[2%] placeholder-[#C7C7C7] w-[50%] text-sm md:text-base" placeholder="YYY" />
                            </div>

                        </div>

                        <div className="flex flex-col w-[50%]">
                            <label className="text-[#3E3625] py-2 font-bold  text-sm md:text-base ">CVV</label>
                            <input className="bg-[#F6F3E2]  rounded-md focus:outline-none p-[2%] " />
                        </div>

                    </div>

                    <hr className="border-[#3E3625] mt-9" />

                    <div className="flex justify-between w-[90%] mx-auto">
                        <h2 className="text-[#666] font-extrabold ">Total Cost</h2>
                        <h2 className="text-[#3E3625] font-extrabold text-2xl">$10</h2>
                    </div>

                    <div className="flex my-[5%] lg:my-0">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                        <label className="ml-2 text-sm text-[#3E3625] "><p>By continuing, you agree to Our <span className="underline underline-offset-2">Conditions of Use</span>  and <span className="underline underline-offset-2">Privacy Notice</span>  .</p></label>
                    </div>

                    <button className="text-sm md:text-base  py-[1%] px-[3%] bg-[rgb(127,131,65)] text-white   shadow-md hover:bg-[rgb(127,131,65)] focus:outline-none ">Confirm</button>
                </form>




            </div>
        </div>
    )
}