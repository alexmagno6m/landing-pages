import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-4 px-8 bg-zinc-800">
            <ul className="flex justify-around gap-6">
                {/* tambien podemos eliminar justify around para que aparezcan a la izquierda */}
                <li className="font-sans"><Link href="/">Home</Link></li>
                <li className="font-sans"><Link href="/contact">Contact</Link></li>
                <li className="font-sans"><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}