import { useEffect, useState } from "react";
import AboutHeader from "../../components/headers/AboutHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

function About() {
  const [fact, setFact] = useState("Loading fact...");

  useEffect(() => {
    const scrollTop = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
      scrollTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const facts = [
      "Over 2 billion people around the world lack access to safe drinking water.",
      "Mental health disorders affect 1 in 4 people globally.",
      "More than 800 million people worldwide are living in extreme poverty.",
      "Gender inequality affects all areas of life: education, employment, health, and politics.",
      "Climate change is already having real-world impacts: rising sea levels, extreme weather events, and biodiversity loss.",
      "Child labor is still a serious problem in many countries.",
      "Each year, millions of animals are trafficked for illegal purposes.",
      "Only 9% of plastic is recycled worldwide.",
    ];

    function showRandomFact() {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      setFact(randomFact);
    }

    showRandomFact();
    setInterval(showRandomFact, 7000);
  }, []);

  return (
    <>
      <AboutHeader />
      <Navbar />
      <div>
        {/* About Us Section */}
        <section className="py-5 fade-in">
          <div className="container">
            <h2 className="text-center title">About Us</h2>
            <p className="text-center mission-text">
              Seraphim is a college-based cultural club dedicated to raising social awareness and celebrating diverse cultures.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-5 bg-light fade-in">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="images/image2.webp" className="img-fluid rounded" alt="Mission Image" />
              </div>
              <div className="col-md-6">
                <h3 className="title">Our Mission</h3>
                <p className="mission-text">
                  Seraphim's mission is to inspire students to explore cultural heritage and promote social awareness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-5 bg-light fade-in">
          <div className="container">
            <h3 className="text-center title">Our Activities</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mission-text">
                  Seraphim organizes a range of activities, from cultural events to workshops and community service projects.
                </p>
              </div>
              <div className="col-md-6">
                <img src="images/image4.jpeg" className="img-fluid rounded" alt="Activities Image" />
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button id="scrollTop" title="Scroll to top">↑</button>

        {/* Did You Know Section */}
        <section className="did-you-know py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container">
            <h2 className="text-center mb-4">Did You Know?</h2>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="fact-box p-4 border rounded shadow-sm" style={{ backgroundColor: "#e9ecef", fontSize: "18px", color: "#333" }}>
                  {fact}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;