import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="bg-[url('https://images.unsplash.com/photo-1606813902504-a27303d10b25')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center px-4"
      >
        <div
          className="bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded max-w-xl w-full"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Heal Naturally with Ayurveda
          </h1>
          <p className="text-base sm:text-lg mb-4">
            Discover balance, peace, and wellness
          </p>
          <a
            href="/book"
            className="bg-yellow-500 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-400 transition"
          >
            Book Consultation
          </a>
        </div>
      </section>


      {/* Treatments Overview */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800" data-aos="fade-up">Our Treatments</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Panchakarma",
              desc: "A complete Ayurvedic detox that restores your inner balance.",
              icon: "🧘‍♀️"
            },
            {
              name: "Shirodhara",
              desc: "Warm oil poured over your forehead for mental clarity and calm.",
              icon: "💧"
            },
            {
              name: "Abhyanga",
              desc: "Herbal oil massage that revitalizes and nourishes your skin.",
              icon: "🌿"
            }
          ].map((t, i) => (
            <div
              key={t.name}
              className="p-6 bg-white border rounded shadow-md hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="text-4xl mb-3">{t.icon}</div>
              <h3 className="text-xl font-semibold text-green-700">{t.name}</h3>
              <p className="mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
<section className="py-16 px-4 bg-green-50">
  <h2 className="text-3xl font-bold mb-12 text-center text-green-800" data-aos="fade-up">
    Meet Our Doctors
  </h2>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {[
      {
        name: "Dr. Meera Sharma",
        role: "Ayurvedic Therapist",
        gender: "female"
      },
      {
        name: "Dr. Arjun Desai",
        role: "Panchakarma Specialist",
        gender: "male"
      },
      {
        name: "Dr. Kavita Nair",
        role: "Nutrition & Wellness Coach",
        gender: "female"
      }
    ].map((doc, i) => {
      const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=68D391&color=fff&rounded=true&size=150`;
      return (
        <div
          key={doc.name}
          className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition"
          data-aos="zoom-in"
          data-aos-delay={i * 150}
        >
          <img
            src={imageUrl}
            alt={doc.name}
            className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
          />
          <h3 className="text-xl font-semibold text-green-700">{doc.name}</h3>
          <p className="text-gray-600">{doc.role}</p>
          <a href="/book" className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Book Now
          </a>
        </div>
      );
    })}
  </div>
</section>



      {/* Testimonials */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-800" data-aos="fade-up">What Our Patients Say</h2>
        <div className="space-y-6">
          {[
            {
              quote: "The treatments truly changed my life. I feel rejuvenated and peaceful.",
              author: "Riya S."
            },
            {
              quote: "Professional staff and a very calming atmosphere. Highly recommended!",
              author: "Amit K."
            }
          ].map((t, i) => (
            <blockquote
              key={i}
              className="bg-white border-l-4 border-green-500 p-5 shadow-md"
              data-aos="fade-right"
              data-aos-delay={i * 150}
            >
              <p className="italic">"{t.quote}"</p>
              <cite className="block mt-2 font-semibold text-green-700">– {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
