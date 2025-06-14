import SeraphsHeader from "../../components/headers/AboutHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

const members = [
  { name: "Shanu Singh Bhadouriya", role: "Coordinator", img: "images/C1_page.jpg" },
  { name: "Parag Dadhich", role: "Coordinator", img: "images/C2_page.jpg" },
];

const seniorMembers = [
  { name: "Prisha Baveja", role: "Community Service", img: "images/S1_page-0001.jpg" },
  { name: "Riddhi Agrawal", role: "Design & Content", img: "images/S2_page-0001.jpg" },
  { name: "Tanishq Sahu", role: "Public Relations", img: "images/S3_page-0001 (1).jpg" },
  { name: "Sahil Sharma", role: "Public Relations", img: "images/S4_page-0001.jpg" },
  { name: "Sanskar Sahu", role: "Events Planning", img: "images/S5_page-0001.jpg" },
  { name: "Dhruv Bharuka", role: "Events Planning", img: "images/S6_page-0001.jpg" },
];

function Seraphs() {
  return (
    <>
      <SeraphsHeader />
      <Navbar />
      <div className="container my-5">
        {/* Coordinators Section */}
        <h2 className="text-center my-4">Coordinators</h2>
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <img src={member.img} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <a href="https://www.instagram.com/seraphim_iiitl/" className="btn btn-outline-primary">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Senior Members Section */}
        <h2 className="text-center my-4">Senior Members</h2>
        <div className="row">
          {seniorMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card text-center shadow-sm">
                <img src={member.img} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <a href="https://www.instagram.com/seraphim_iiitl/" className="btn btn-outline-primary">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Seraphs;