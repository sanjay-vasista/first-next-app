import Link from "next/link";

export default function Header (){
    return (
        <header className="bg-gray-300 text-blue-600 p-2">
            <div className="container flex mx-auto items-center">
                <div className='flex items-center'>
                    <img src="favicon.ico" alt="logo" className="w-7 h-7" />
                <h1 className="text-bold text-xl ml-4 hover:scale-110 transition-transform duration-300 ">Vasista</h1>
                </div>
            <nav className="space-x-6 ml-auto">
                <Link href='/' className="hover:underline">Home</Link>
                <Link href='./about/' className="hover:underline">About</Link>
                <Link href='./contact/' className="hover:underline">Contact</Link>
                <Link href='./terms/' className="hover:underline">Terms</Link>
            </nav>
            </div>
        </header>
    )
}