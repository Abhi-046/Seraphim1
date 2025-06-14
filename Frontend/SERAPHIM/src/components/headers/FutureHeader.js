import { Helmet } from "react-helmet-async";
import "../../CSS/Future.css";
function FuturePlans() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Future Plans</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="CSS/Future.css" />
        <link rel="shortcut icon" href="images/future.ico" type="image/x-icon" />
      </Helmet>

      <header>
        <h1>Future Plans</h1>
      </header>

      <main>
        <p>Discover our upcoming goals and vision...</p>
      </main>
    </>
  );
}

export default FuturePlans;