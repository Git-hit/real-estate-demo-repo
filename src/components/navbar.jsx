import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function openNavbar(){
        setIsOpen(true);
    };

    function closeNavbar(){
        setIsOpen(false);
    }
    const navs = [
        {
            location: '#',
            name: 'Home',
        },
        {
            name: '/',
        },
        {
            location: '#',
            name: 'Blog',
        },
        {
            name: '/',
        },
        {
            location: '#',
            name: 'About',
        },
        {
            name: '/',
        },
        {
            location: '#',
            name: 'Services',
        }
    ]
    return (
        <header className="flex justify-between items-center p-7 font-optus">
            <div>
                <img width={150} src="https://optushousing.com/wp-content/uploads/2024/02/optus-3-e1710227684347.png" alt="Logo" />
            </div>
            <div>
                <ul className="hidden lg:flex gap-9 items-center">
                    {navs.map((nav, i) => (
                        <li key={i}>
                            {nav.location ? <a className="text-gray-800" href={nav.location}>{nav.name}</a> : <p className="text-gray-500">{nav.name}</p>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <button className="flex items-center gap-1 text-lg text-gray-800 font-medium transition-all duration-150 hover:bg-gray-800 hover:text-gray-50 rounded-full px-8 py-2 cursor-pointer">Contact <ArrowUpRight /></button>
                <Menu className="lg:hidden" onClick={openNavbar} />
                {isOpen ? (
                    <div className="bg-[#e6e1dc] fixed left-0 top-0 h-screen w-full lg:hidden gap-5 pt-20 items-center flex lg:flex-row flex-col">
                        <X className="lg:hidden" onClick={closeNavbar} />
                        {navs.map((nav, i) => (
                            <li key={i} className="list-none">
                                {nav.location ? <a className="text-gray-800" href={nav.location}>{nav.name}</a> : null}
                            </li>
                        ))}
                    </div>
                ) : null}
            </div>
        </header>
    )
};