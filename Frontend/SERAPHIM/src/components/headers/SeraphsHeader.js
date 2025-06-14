import { Helmet } from "react-helmet-async";
import "../../CSS/seraphs.css";

function Seraphs() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Seraphs</title>
        <link rel="stylesheet" href="CSS/seraphs.css" />
        <link rel="shortcut icon" href="images/seraphs.ico" type="image/x-icon" />
      </Helmet>

      <header>
        <h1>Seraphs</h1>
      </header>

      <main>
        <p>Welcome to the Seraphs page...</p>
      </main>
    </>
  );
}

export default Seraphs;