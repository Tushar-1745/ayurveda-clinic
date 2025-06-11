function AboutUs() {
    return (
      <main className="max-w-5xl mx-auto p-6 text-gray-800">
        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-green-900 mb-4">About Our Clinic</h2>
          <p>
            At our Ayurveda Clinic, we believe in healing the body, mind, and spirit through natural, time-tested methods. 
            Our holistic approach blends ancient wisdom with modern understanding, offering patients long-term wellness.
          </p>
        </section>
  
        {/* History & Philosophy */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Our History & Philosophy</h3>
          <p className="mb-2">
            Rooted in the 5,000-year-old science of Ayurveda, our clinic honors the traditional principles laid out by ancient sages. 
            We follow a personalized treatment philosophy based on the balance of the doshas—Vata, Pitta, and Kapha—to restore harmony.
          </p>
          <p>
            Founded by a family of Ayurvedic practitioners, our clinic has evolved into a trusted name for authentic Ayurvedic care, 
            maintaining integrity, purity, and patient-centric values.
          </p>
        </section>
  
        {/* Environment & Staff */}
        <section>
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Clinic Environment & Our Team</h3>
          <p className="mb-2">
            Our clinic provides a serene, eco-friendly setting that promotes healing from the moment you enter. 
            Herbal aromas, soft lighting, and calming music make each visit therapeutic in itself.
          </p>
          <p>
            Our team consists of certified Ayurvedic doctors, trained therapists, nutritionists, and friendly staff—each committed 
            to delivering compassionate and personalized care.
          </p>
        </section>
      </main>
    );
  }
  
  export default AboutUs;
  