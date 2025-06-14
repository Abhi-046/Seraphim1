import { Helmet } from "react-helmet-async";
import "../../CSS/Gallery.css";
function Gallery() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gallery</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="CSS/Gallery.css" />
        <link rel="shortcut icon" type="image/x-icon" href="images/gallery.ico" />
      </Helmet>

      <header>
        <h1>Gallery</h1>
      </header>

      <main>
        <p>Explore our collection of images...</p>
      </main>
    </>
  );
}

export default Gallery;