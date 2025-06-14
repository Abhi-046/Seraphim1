import { useState } from "react";
import GalleryHeader from "../../components/headers/GalleryHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("all");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const images = [
    { src: "seraphim-insta/Seraphim1.jpg", category: "campaigns" },
    { src: "seraphim-insta/Seraphim2.jpg", category: "campaigns" },
    { src: "seraphim-insta/Seraphim3.jpg", category: "events" },
    { src: "images/logo.jpg", category: "events" },
    { src: "images/logo.jpg", category: "awareness" },
  ];

  const openImageModal = (src) => {
    setModalImageSrc(src);
    setShowImageModal(true);
  };

  return (
    <>
      <GalleryHeader />
      <Navbar />
      <div className="container my-4">
        {/* Album Filter Buttons */}
        <div className="portfolio-menu mt-2 mb-4 text-center">
          <button className="btn btn-outline-dark mx-2" onClick={() => setSelectedAlbum("all")}>All</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setSelectedAlbum("campaigns")}>Campaigns</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setSelectedAlbum("awareness")}>Awareness Programs</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setSelectedAlbum("events")}>Events</button>
        </div>

        {/* Gallery Images */}
        <div className="row photos">
          {images
            .filter((img) => selectedAlbum === "all" || img.category === selectedAlbum)
            .map((img, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 card shadow-sm">
                <img className="img-fluid pic" src={img.src} alt="Gallery" onClick={() => openImageModal(img.src)} />
              </div>
            ))}
        </div>

        {/* Image Modal */}
        {showImageModal && (
          <div className="modal fade show d-block" onClick={() => setShowImageModal(false)}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <button className="close-btn btn btn-danger" onClick={() => setShowImageModal(false)}>X</button>
                <img className="img-fluid" src={modalImageSrc} alt="Gallery" />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;