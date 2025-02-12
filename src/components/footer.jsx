import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="font-optus bg-gray-800 flex flex-col gap-7">
            <div className="flex flex-col gap-7 pt-16 items-center">
                <h2 className="text-gray-50 text-[65px] lg:text-7xl text-center">CONTACT US TODAY!</h2>
                <button className="flex gap-3 items-center rounded-full py-2 px-8 font-medium text-lg bg-gray-50 hover:bg-gray-800 hover:text-gray-50 transition-all duration-150 cursor-pointer">Contact now <ArrowRight /></button>
            </div>
            <div className="bg-gray-200 h-[1px]" />
            <div className="pb-7 px-7 flex flex-col-reverse gap-7 lg:gap-0 lg:flex-row items-center justify-between text-gray-50">
                <div className="lg:w-1/2">
                    <p className="uppercase text-sm">Copyright &copy; 2025 | Optus Housing</p>
                </div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row justify-end gap-3 underline">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Co.</a>
                </div>
            </div>
        </footer>
    )
}