export default function Whyus() {
    return (
        <div className="font-optus p-7 text-gray-800">
            <div className="flex flex-col lg:flex-row gap-7 lg:gap-0">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl">Here's why we're your best choice!</h2>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-7 items-start">
                    <p className="text-lg">
                        We pride ourselves on prioritising client needs with an unwavering commitment to delivering
                        personalised solutions in luxury housing properties.
                        Our client-centric approach is the cornerstone of our success,
                        ensuring that every interaction is tailored to meet the unique requirements and aspirations of our clients.
                    </p>
                    <button className="rounded-full py-2 px-8 font-medium text-lg border border-gray-800 hover:bg-gray-800 hover:text-gray-50 transition-all duration-150 cursor-pointer">Get in touch</button>
                </div>
            </div>
            <div className="w-full mt-10">
                <img className="size-full" src="/images/img.jpg" alt="Why is Optus Housing the best" />
            </div>
        </div>
    )
}