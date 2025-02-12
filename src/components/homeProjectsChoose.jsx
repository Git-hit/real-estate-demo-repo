import { ArrowDown } from "lucide-react";

export default function HomeProjectsChoose() {
    const links = [
        {
            name: 'Our Projects',
            image: 'images/our-projects.png',
            alt: 'Our Projects',
            link: '#our-projects'
        },
        {
            name: 'Empty',
        },
        {
            name: 'Partner Listings',
            image: 'images/our-listing-partners.png',
            alt: 'Partner Listings',
            link: '#'
        }
    ]
    return (
        <div className="p-7 mt-96 lg:my-10 font-optus">
            <div className="bg-gray-800 px-7 py-14 rounded-3xl flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 pb-10 lg:pb-0">
                    <h2 className="text-gray-50 text-3xl lg:text-5xl uppercase lg:w-6/10">Hassle-free real estate</h2>
                </div>
                <div className="lg:w-1/2 text-gray-800 flex flex-col gap-3">
                    {links.map((link, i) => (
                        link.name !== "Empty" ? (
                            <a href={link.link} key={i} className="text-gray-50 hover:text-gray-800 hover:bg-gray-50 transition-all duration-150 flex gap-3 lg:gap-0 justify-between items-center rounded-full p-3 cursor-pointer">
                                <img className="rounded-full size-10 lg:size-20" src={link.image} alt={link.alt} />
                                <p className="text-2xl">{link.name}</p>
                                <ArrowDown className="size-10" />
                            </a>
                        ) : (
                            <div key={i} className="bg-gray-50 w-full h-[1px]"></div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}