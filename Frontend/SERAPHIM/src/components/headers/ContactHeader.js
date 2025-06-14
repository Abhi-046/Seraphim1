import { Helmet } from "react-helmet-async";
import "../../CSS/contact.css";

function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us - Seraphim</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="CSS/contact.css" />
        <link rel="shortcut icon" href="images/Contact.ico" type="image/x-icon" />
      </Helmet>

      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <p>Get in touch with our team...</p>
      </main>
    </>
  );
}

export default Contact;