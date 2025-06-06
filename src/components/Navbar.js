export default function Navbar(){
    return(
        <nav className="text-lg flex items-center justify-center font-bold rounded-xl m-4 p-4 bg-red-400">
            <div className="space-x-4">
                <a href="#about" className=" hover:text-blue-300">About</a>
                <a href="projects" className=" hover:text-blue-300">Projects</a>
                <a href="conatct" className=" hover:text-blue-300">Contact</a>
            </div>
        </nav>
    );
}
