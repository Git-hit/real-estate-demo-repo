import { ArrowRight } from "lucide-react";

export default function CTA(){
    return(
        <div className="font-optus bg-[#e6e1dc] flex flex-col lg:flex-row my-28 py-20">
            <div className="lg:w-[40%] p-7 flex flex-col items-start gap-7">
                <h2 className="font-medium text-5xl lg:text-6xl text-gray-800">Considering a property investment this year?</h2>
                <p className="text-md lg:text-xl text-gray-600">
                    At Optus Housing, we provide knowledge of the market trends and guide you at every step, 
                    from home visits to negotiations, to complete paper work of your dream home.
                </p>
                <button className="flex gap-3 items-center rounded-full py-3 px-8 font-medium text-lg border border-gray-800 hover:bg-gray-50 hover:text-gray-800 text-gray-50 bg-gray-800 transition-all duration-150 cursor-pointer">Get in touch <ArrowRight /></button>
            </div>
            <div className="lg:w-[60%]">
                <img src="https://optushousing.com/wp-content/uploads/2024/09/19.jpg" alt="Optus Greens" />
            </div>
        </div>
    )
}