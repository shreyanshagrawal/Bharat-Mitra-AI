import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-4 shadow">
            <h1 className="text-orange-500 font-bold text-xl">Bharat Mitra AI</h1>

            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">How it Works</Link>
                <Link to="/">About</Link>
            </div>

            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                <Link to="/login">Login / Guest</Link>
            </button>
        </nav>
    );
}
