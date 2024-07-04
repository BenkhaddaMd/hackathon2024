import Link from "next/link";

const Footer = () => {


    return (
        <footer className="bg-gradient-to-tr from-[#BAE6FD] to-[#CFFAFE] mt-auto">
            <div className="container mx-auto py-3 md:px-5 sm:px-7 px-3">
                <div className="flex md:flex-row flex-col justify-between md:space-y-0 space-y-3 lg:px-3 md:px-0 sm:px-10 px-3 mt-3 mb-10">
                    <div className="md:border-r border-zinc-800 pr-3">
                        <p className="text-[15px] text-zinc-800 font-semibold">
                            © 2024 - BOLD DIGITAL VISION
                        </p>
                    </div>
                    <ul className="flex md:flex-row flex-col md:items-center xl:space-x-20 md:space-x-7 md:space-y-0 space-y-3">
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Terms of Service
                            </Link>
                        </li>
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Privecy Policy
                            </Link>
                        </li>
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Cookie Settings
                            </Link>
                        </li>
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Accessibility
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;