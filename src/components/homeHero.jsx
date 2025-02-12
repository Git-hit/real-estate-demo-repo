import Stats from "./stats";

export default function HomeHero(){
    return(
        <div className="font-optus flex flex-col lg:flex-row gap-7 w-full h-[100vh]">
            <div className="flex flex-col gap-7 items-start justify-center lg:w-1/2 p-7 text-gray-800">
                <h1 className="font-semibold text-7xl lg:text-8xl uppercase">Metro Living</h1>
                <button className="rounded-full py-2 px-8 font-medium text-lg border border-gray-800 hover:bg-gray-800 hover:text-gray-50 transition-all duration-150 cursor-pointer">Get in touch</button>
                <Stats />
            </div>
            <div className="flex lg:w-1/2 h-full">
                <img className="w-full" src="/images/img-hero.jpg" alt="Hero Image" />
            </div>
        </div>
    )
}