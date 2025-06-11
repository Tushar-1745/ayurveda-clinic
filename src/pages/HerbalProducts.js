import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  { name: "Herbal Detox Tea", description: "Aids digestion and detoxification.", image: "https://source.unsplash.com/featured/?herbal,tea", category: "Tea" },
  { name: "Ayurvedic Massage Oil", description: "Relieves joint pain and enhances relaxation.", image: "https://source.unsplash.com/featured/?massage,oil", category: "Oil" },
  { name: "Ashwagandha Capsules", description: "Boosts energy and reduces stress.", image: "https://source.unsplash.com/featured/?ashwagandha", category: "Capsule" },
  { name: "Neem Face Pack", description: "Purifies skin and prevents acne.", image: "https://source.unsplash.com/featured/?neem", category: "Skincare" },
  { name: "Triphala Powder", description: "Improves digestion and cleanses the system.", image: "https://source.unsplash.com/featured/?triphala", category: "Powder" },
  { name: "Brahmi Syrup", description: "Enhances brain function and memory.", image: "https://source.unsplash.com/featured/?brahmi", category: "Syrup" },
  { name: "Turmeric Capsules", description: "Natural anti-inflammatory and antioxidant.", image: "https://source.unsplash.com/featured/?turmeric", category: "Capsule" },
  { name: "Kumkumadi Oil", description: "For radiant, youthful skin.", image: "https://source.unsplash.com/featured/?kumkumadi", category: "Oil" },
  { name: "Herbal Hair Oil", description: "Prevents hair fall and promotes hair growth.", image: "https://source.unsplash.com/featured/?herbal,hair", category: "Oil" },
  { name: "Ginger-Tulsi Tea", description: "Immunity boosting herbal tea.", image: "https://source.unsplash.com/featured/?ginger,tulsi", category: "Tea" }
];

export default function HerbalProducts() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === 'All' || p.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8" data-aos="fade-up">
        Our Herbal Products
      </h2>

      {/* Search & Filter Section */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-8" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 min-w-[200px] border border-gray-300 px-4 py-2 rounded shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="min-w-[180px] border border-gray-300 px-4 py-2 rounded shadow-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700">{p.name}</h3>
                <p className="text-gray-700 text-sm mt-1">{p.description}</p>
                <span className="text-xs inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 rounded">{p.category}</span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 text-green-600 hover:text-green-800 font-medium"
                >
                  <img
                    src="https://img.icons8.com/color/24/000000/whatsapp--v1.png"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
