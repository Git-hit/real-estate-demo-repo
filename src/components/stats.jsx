export default function Stats(){
    const stats = [
        {
            data: "38 yrs",
            title: "Experience"
        },
        {
            data: "115+",
            title: "Developers"
        },
        {
            data: "126+",
            title: "Projects"
        },
        // {
        //     data: "30M+",
        //     title: "Total revenue"
        // },
    ];
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="flex flex-row !lg:flex-col flex-wrap items-center justify-start lg:justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="text-center">
                                <h4 className="text-2xl lg:text-4xl text-gray-800 font-semibold">{item.data}</h4>
                                <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}