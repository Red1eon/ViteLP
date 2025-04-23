import { Link } from 'react-router-dom';

export const Home = () => {
    return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
        <img
        src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Real Estate Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        />

      {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
        <div className="text-center relative z-20 px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
            美しい物件を見つけ、エージェントとつながり、賢い選択をしましょう。
        </p>
        <Link
            to="/listings"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition"
        >
            Explore Listings
        </Link>
        </div>
    </section>
    );
};
