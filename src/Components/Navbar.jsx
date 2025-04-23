import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-mono text-xl font-bold text-white">
            Red1eon<span className="text-blue-500">不動産</span>
            </Link>
          {/* You can add a profile or settings icon here later if needed */}
        </div>
        </div>
    </nav>
    );
};
