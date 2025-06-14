import { useEffect, useState } from "react";
import DonateHeader from "../../components/headers/DonateHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

function Donate() {
  const [formData, setFormData] = useState({ fullName: "", email: "", donationAmount: "", paymentMethod: "" });
  const [formMessage, setFormMessage] = useState("");
  const [quote, setQuote] = useState("Loading quote...");

  useEffect(() => {
    const quotes = [
      "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
      "You must be the change you wish to see in the world. – Mahatma Gandhi",
      "Alone we can do so little; together we can do so much. – Helen Keller",
      "Act as if what you do makes a difference. It does. – William James",
      "It always seems impossible until it’s done. – Nelson Mandela",
      "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
      "Injustice anywhere is a threat to justice everywhere. – Martin Luther King Jr.",
      "We can't help everyone, but everyone can help someone. – Ronald Reagan",
    ];

    function showRandomQuote() {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    showRandomQuote();
    setInterval(showRandomQuote, 7000);
  }, []);

 const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, donationAmount, paymentMethod } = formData;

    if (!fullName || !email || !donationAmount || !paymentMethod) {
      setFormMessage("Please fill out all fields.");
      return;
    }

    try {
      // Map the form data to match the backend field names
      const backendData = {
        fullname: fullName,  // backend expects 'fullname' instead of 'fullName'
        email,
        amount: donationAmount,  // backend expects 'amount' instead of 'donationAmount'
        paymentMethod
      };

      const response = await fetch("http://localhost:5001/api/donation/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendData),
      });

      if (response.ok) {
        setFormMessage(`Thank you, ${fullName}! Your donation has been received.`);
        setFormData({ fullName: "", email: "", donationAmount: "", paymentMethod: "" });
      } else {
        const errorData = await response.json();
        setFormMessage(`Failed to submit donation: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <>
      <DonateHeader />
      <Navbar />
      <div className="container my-5">
        <section className="donation-form">
          <h2 className="text-center mb-4">Make a Donation</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleChange} required />

            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="donationAmount" className="form-label">Donation Amount</label>
            <input type="number" className="form-control" id="donationAmount" placeholder="Enter amount in INR" value={formData.donationAmount} onChange={handleChange} required />

            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
            <select className="form-select" id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
              <option value="" disabled>Select a payment method</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>

            <button type="submit" className="btn btn-primary w-100">Donate Now</button>
            <p style={{ color: formMessage.includes("Thank you") ? "green" : "red" }}>{formMessage}</p>
          </form>
        </section>

        {/* Quotes Section */}
        <section className="py-5 mb-5 rounded text-center">
          <h2>Quotes of the Day</h2>
          <div className="p-4 border rounded shadow-sm bg-white" style={{ fontSize: "20px", color: "#333" }}>
            {quote}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Donate;