"use client";

//import Error from "next/error";

// interface ErrorPageProps{
//   error: Error;
//   reset: () => void;
// }
function Error({ statusCode }) {
  return (
    <div>
      <h2>Oops</h2>
      <p>
        {statusCode
          ? `Doszło do błędu ${statusCode} po stronie serwera`
          : "Doszło do błędu po stronie klienta"}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ reset, err }) => {
  const statusCode = reset ? reset.statusCode : err ? err.statusCode : 404;
  console.log(reset)
  return { statusCode, reset };
};

export default Error;
