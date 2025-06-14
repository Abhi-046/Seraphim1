import { Helmet } from "react-helmet-async";
import "../../CSS/donate.css";

function DonateHeader() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Donate - Seraphim</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="stylesheet" href="CSS/donate.css" />
        <link rel="shortcut icon" href="images/donate.ico" type="image/x-icon" />
      </Helmet>

      <header className="donation-header">
        <h1>Support Seraphim</h1>
        <p>Your contribution fuels cultural empowerment and social change.</p>
      </header>
    </>
  );
}

export default DonateHeader;