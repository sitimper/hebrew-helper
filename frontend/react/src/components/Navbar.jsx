
export default function Navbar() {
    return (
        <nav className="w-screen h-8 sticky top-0 left-0 flex justify-end items-center bg-(--primary)">
            <ul className="h-full px-(--page-px) flex items-center text-white">
            <li className="h-full flex items-center">
                    <a className="h-full flex items-center px-4 bg-(--primary) hover:brightness-90" href="/links">Links</a>
                </li>  
                <li className="h-full flex items-center">
                    <a className="h-full flex items-center px-4 bg-(--primary) hover:brightness-90" href="/letters">Letters</a>
                </li>  
                <li className="h-full">
                    <a className="h-full flex items-center px-4 bg-(--primary) hover:brightness-90" href="/">Helper</a>
                </li>  
            </ul>
        </nav>
    );
}