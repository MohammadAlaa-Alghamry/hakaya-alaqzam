import ManagingyouraccountIcon from "../Compontents/icons/ManagingyouraccountIcon";
import SearchIcon from "../Compontents/icons/Searchicon";
import SideNav from "../Compontents/SideNav";

export default function HelpCenter() {
    return (
        <div className=" w-[100%] sm:w-[80%] px-[5%] md:px-[0%] my-10  mx-auto ">

            <div className="flex flex-col sm:flex-row justify-start items-center gap-5 w-[100%]">

                <div
                    style={{ backgroundImage: 'url("/img/MyAccount/image-circle.png")' }}
                    className="h-[10vh] w-[10vh] bg-cover order-2 sm:order-1"></div>

                <h1 className="text-2xl text-center sm:text-start order-1 sm:order-2">Hello, Join</h1>

            </div>

            <div className="flex w-[100%] ">
                <SideNav />

                <div className="flex flex-col justify-between py-10 w-[100%] md:w-[55%] mx-auto h-[80vh] gap-y-[5%] md:gap-y-[0%] ">

                    <p className=" text-xl text-[#666666] ">How can we help you?</p>

                    <form >
                        <input className=" relative bg-[#E9DFC8] w-full my-3 shadow-lg  rounded-full focus:outline-none p-[2%] placeholder-[#C7C7C7] text-sm md:text-base" placeholder="Ask a question..." />

                    </form>

                    <div className="flex justify-between items-center bg-[#E9DFC8] rounded-lg px-[2%] py-[4%]">
                        <p className="text-[#666666] text-sm md:text-base">Managing your account</p>

                        <img className="w-[7%]" src="/img/HelpCenter/managing-your-account-img.png" alt="managing-your-account-img"></img>
                    </div>

                    <div className="flex justify-between items-center bg-[#E9DFC8] rounded-lg px-[2%] py-[4%]">
                        <p className="text-[#666666] text-sm md:text-base">Payment & subscription</p>

                        <img className="w-[7%]" src="/img/HelpCenter/payment-subscribe-img.png" alt="payment-subscribe-img"></img>
                    </div>

                    <div className="flex justify-between items-center bg-[#E9DFC8] rounded-lg px-[2%] py-[4%]">
                        <p className="text-[#666666] text-sm md:text-base">FAQS</p>

                        <img className="w-[7%]" src="/img/HelpCenter/faqs-img.png" alt="faqs-img"></img>
                    </div>
                </div>


            </div>

        </div>
    )
}