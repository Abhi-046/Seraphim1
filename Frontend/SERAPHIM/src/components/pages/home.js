import HomeHeader from "../../components/headers/HomeHeader.js";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

function Home() {
  return (
    <>
     <Helmet></Helmet>
      <HomeHeader />
      <Navbar />
      <main>
        {/* Slideshow Section */}
        <div className="images">
          <div className="slideshow">
            <img src="images/image4.jpeg" alt="Image 4" />
            <img src="images/image2.webp" alt="Image 2" />
            <img src="images/Image1.webp" alt="Image 1" />
            <img src="images/image3.webp" alt="Image 3" />
          </div>
        </div>

        {/* Introduction Section */}
        <div className="camp">
          <h1 className="text-center my-4">INTRODUCTION</h1>
          <p className="info">
            Seraphim is the social awareness club of IIIT Lucknow, dedicated to creating a positive impact on society.
            Through community service and awareness campaigns, we empower students to engage with pressing social issues
            and create meaningful change.
          </p>
        </div>

        {/* Past Campaigns Section */}
        <div className="camp">
          <h1 className="text-center my-4">OUR PAST CAMPAIGNS</h1>

          {/* Campaigns Grid */}
          <div className="container">
            <div className="row">
              {/* Campaign 1 */}
              <div className="col-md-6 mb-4">
                <video height="250px" autoPlay loop muted className="s2">
                  <source src="images/pads.mp4" type="video/mp4" />
                </video>
                <p className="info">
                  Creating an environment where menstruation is better understood, respected, and supported.
                  Seraphim took a huge leap towards change by educating and supporting young girls.
                </p>
              </div>

              {/* Campaign 2 */}
              <div className="col-md-6 mb-4">
                <video height="250px" autoPlay loop muted className="s1">
                  <source src="images/food.mp4" type="video/mp4" />
                </video>
                <p className="info">
                  Fueling change through kindness! Our food drive turned surplus meals into hope for those in need.
                </p>
              </div>

              {/* Campaign 3 */}
              <div className="col-md-6 mb-4">
                <video height="250px" autoPlay loop muted className="s2">
                  <source src="images/clean.mp4" type="video/mp4" />
                </video>
                <p className="info">
                  Small changes lead to a cleaner tomorrow! 🌱 We kicked off Swachhta Pakhwada by tidying up our campus.
                </p>
              </div>

              {/* Campaign 4 */}
              <div className="col-md-6 mb-4">
                <video height="250px" autoPlay loop muted className="s1">
                  <source src="images/tree.mp4" type="video/mp4" />
                </video>
                <p className="info">
                  Growing a greener tomorrow, one tree at a time! 🌱 Team Seraphim organized a plantation drive on Gandhi Jayanti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;