import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="flex items-center justify-between px-20 py-20 bg-gray-100">

            <div className="max-w-xl">

                <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
                    Powered by Next-Gen AI
                </span>

                <h1 className="text-5xl font-bold mt-6">
                    One AI Assistant for All Your Government Needs
                </h1>

                <p className="mt-4 text-gray-600">
                    Find schemes, report civic issues, and understand your rights easily.
                </p>

                <div className="flex gap-4 mt-6">

                    <Link
                        to="/login"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg"
                    >
                        Start AI Assistant
                    </Link>
                    <button className="bg-gray-200 px-6 py-3 rounded-lg">
                        Explore Services
                    </button>

                </div>
            </div>

            <img
                src="/hero-image.jpg"
                className="w-[500px] rounded-xl"
            />

        </section>
    );
}
