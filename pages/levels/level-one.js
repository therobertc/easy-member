import Link from "next/link";
import { Helmet } from "react-helmet";

export default function LevelOne() {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          margin: 0,
          lineHeight: 1.15,
          fontSize: "4rem",
          textDecoration: "none"
        }}
      >
        <Link href="/">
          <a
            style={{
              color: "#0070f3",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.15,
              fontSize: "2rem",
              textDecoration: "none"
            }}
          >
            {" "}
            EasyMember
          </a>
        </Link>
      </h1>

      <p style={{ textAlign: "center" }}>
        Make recurring revenue with subscriptions
      </p>

      <div></div>

      <div className="formbox">
        <div
          style={{
            //backgroundColor: "#F5F8FA",
            width: 400,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            padding: 40,
            borderRadius: 5,
            border: "1px solid",
            borderColor: "lightgrey"
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <label className="label">
              Full Name
              <input
                type="text"
                name="name"
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 0.2,
                  marginTop: 10,
                  marginBottom: 10,
                  border: "1px solid lightgrey"
                }}
              />
            </label>

            <label className="label">
              Email
              <input
                type="text"
                name="name"
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 0.2,
                  marginTop: 10,
                  marginBottom: 10,
                  border: "1px solid lightgrey"
                }}
              />
            </label>

            <label className="label">
              Card Number
              <input
                type="text"
                name="name"
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 0.2,
                  marginTop: 10,
                  marginBottom: 10,
                  border: "1px solid lightgrey"
                }}
              />
            </label>

            <label className="label">
              Expiration Date
              <input
                type="text"
                name="name"
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 0.2,
                  marginTop: 10,
                  marginBottom: 10,
                  border: "1px solid lightgrey"
                }}
              />
            </label>

            <label className="label">
              Zip Code
              <input
                type="text"
                name="name"
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 0.2,
                  marginTop: 10,
                  marginBottom: 10,
                  border: "1px solid lightgrey",
                  width: "100%"
                }}
              />
            </label>
            <Link href="/">
              <a
                // href="https://nextjs.org/docs"
                className="card"
              >
                <p style={{ fontFamily: "Verdana", fontSize: 18 }}>
                  {" "}
                  Subscribe &rarr;
                </p>
              </a>
            </Link>
          </form>
        </div>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          label {
            display: flex;
            flex-direction: column;
            text-align: left;
            font-family: Verdana;
            
              
          }

          button {
            height: 30;
            border-radius: 20;
            background-color: lightskyblue;
            padding: 30;
            margin: 20;
          }

          form {
            height: 30;
            border-radius: 10;
            border-width: 0.2;
            margin-top: 10;
            margin-bottom: 10;
          }

          .card {
            margin: 0.5rem;
            flex-basis: 45%;
            padding: 0.2rem;
            text-align: center;
            color: #ffffff;
            text-decoration: none;
            border: 1px solid #147efb;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            background-color: #147efb;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: "#0b62d0";
            background-color: #0b62d0;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .formbox {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1rem;
            borderColor: "lightgrey",
            borderWidth: 1
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  );
}
