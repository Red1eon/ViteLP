import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export const HouseListing = () => {
    useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });
    }, []);

    const [listingsToShow, setListingsToShow] = useState(4);
    const [showGoToTop, setShowGoToTop] = useState(false);

    const handleShowMore = () => {
        setListingsToShow(prev => prev + 4);
    };

    const handleScroll = () => {
        setShowGoToTop(window.scrollY > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const allListings = [
        {
            img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
            title: "モダンアパートメント",
            description: "市の中心部に位置し、広々としたリビングエリアと最新の設備を備えたアパートメントです。",
            price: "\u00a5100,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
            title: "高級ヴィラ",
            description: "絶景、プライベートプール、広々とした屋外スペースを提供する高級ヴィラです。",
            price: "\u00a5500,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            title: "シティスタジオ",
            description: "個人向けに最適。公共交通機関や必要な設備に近接しています。",
            price: "\u00a580,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
        {
            img: "https://images.pexels.com/photos/1319719/pexels-photo-1319719.jpeg",
            title: "快適なコテージ",
            description: "美しい田園風景が広がる静かな隠れ家。落ち着きを求める方に最適です。",
            price: "\u00a5120,000/月",
            link: "#"
        },
    ];

    const displayedListings = allListings.slice(0, listingsToShow);

    return (
    <section id="listings" className="min-h-screen bg-gray-50 py-16 overflow-x-hidden">
        {/* Hero Section */}
        <div
        className="bg-cover bg-center h-[60vh] relative"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">理想の家を見つけよう</h1>
            <p className="text-lg mb-8">リストを閲覧して、あなたにぴったりの物件を見つけましょう！</p>
            <Link to="properties" smooth={true} duration={500} className="inline-block bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-400 transition">
            物件を見る
            </Link>
        </div>
        </div>

        {/* Property Listings */}
        <div className="max-w-screen-xl mx-auto px-4 py-16" id="properties">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">おすすめ物件</h2>
            <p className="text-lg text-center text-gray-700 mb-12">賃貸・売買用に厳選された物件をチェック。次の住まいが見つかります！</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {displayedListings.map((listing, index) => (
                <div
                    key={index}
                    className="border p-6 shadow-lg rounded-lg bg-white transition duration-700 ease-in-out hover:shadow-2xl hover:scale-105"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                >
                    <img src={listing.img} alt={listing.title} className="w-full h-60 object-cover mb-4 rounded-md" />
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">{listing.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{listing.description}</p>
                    <p className="font-semibold text-blue-600 text-lg">{listing.price}</p>
                    <a href={listing.link} className="inline-block bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-400 transition mt-4">詳細を見る</a>
                </div>
                ))}
            </div>

            <div className="text-center mt-10">
                {listingsToShow < allListings.length && (
                <button onClick={handleShowMore} className="bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-400 transition">
                    もっと見る
                </button>
                )}
            </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">さらに多くの物件</h2>
                <p className="text-lg text-gray-700 mb-6">アパート、ヴィラ、スタジオなど、幅広い物件をご用意しています。あなたにぴったりの物件を見つけましょう！</p>
                <a href="#more" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-400 transition">もっと見る</a>
            </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-100 py-16">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">お客様の声</h2>
                <div className="flex justify-center space-x-6">
                    <div className="p-6 bg-white rounded-lg shadow-md w-1/3">
                        <p className="text-lg text-gray-700 mb-4">「素晴らしい物件を見つけました！プロセスはとてもスムーズで、理想の家を見つけることができました。」</p>
                        <p className="font-semibold text-gray-900">佐藤 太郎</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md w-1/3">
                        <p className="text-lg text-gray-700 mb-4">「スタッフはとても親切で、私のニーズに合った物件を提案してくれました。」</p>
                        <p className="font-semibold text-gray-900">田中 花子</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">さらに多くの物件</h2>
                <p className="text-lg text-gray-700 mb-6">アパート、ヴィラ、スタジオなど、幅広い物件をご用意しています。あなたにぴったりの物件を見つけましょう！</p>
                <a href="#more" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-400 transition">もっと見る</a>
            </div>
        </div>

                
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
            <p className="text-lg text-gray-700 mb-6">ご質問や内見のご予約がございましたら、お気軽にご連絡ください。あなたの理想の家探しをサポートします。</p>
            <a href="mailto:contact@realestate.com" className="inline-block bg-green-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-400 transition">お問い合わせ</a>
        </div>

        {showGoToTop && (
        <div className="fixed bottom-8 right-8">
            <Link to="listings" smooth={true} duration={500}>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-400 transition">
                ↑
            </button>
            </Link>
        </div>
        )}
    </section>
    );
};
