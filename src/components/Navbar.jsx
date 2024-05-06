import Link from "next/link"

export default function Navbar(params) {
    return(
        <nav className="bg-slate-400">
            <div className="container mx-auto py-2 px-4 flex justify-between">
            <Link href="/">
                <h3 >NextAPP</h3>
            </Link>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/new">
                            Nueva
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            Acerca de
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
