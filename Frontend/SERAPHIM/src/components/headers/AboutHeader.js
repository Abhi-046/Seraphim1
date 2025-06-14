import { Helmet } from "react-helmet-async";
import "../../CSS/about.css";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us - Seraphim</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="CSS/about.css" />
        <link rel="shortcut icon" type="image/x-icon" href="images/About.ico" />
      </Helmet>

      <header>
        <h1>About Us</h1>
      </header>

      <main>
        <p>Welcome to Seraphim! Learn more about our mission...</p>
      </main>
    </>
  );
}

export default About;