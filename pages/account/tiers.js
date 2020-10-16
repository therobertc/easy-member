import Head from "next/head";
import Link from "next/link";

export default function Tiers() {
  return (
    <div className="container">
      <Head>
        <title>Choose Tiers</title>
      </Head>

      <main>
        <h1 className="title">
          <Link href="/levels/level-one">
            <a> EasyMember</a>
          </Link>
        </h1>

        <p className="description">Make recurring revenue with subscriptions</p>

        <div className="grid">
          <Link href="/levels/level-one">
            <a
              // href="https://nextjs.org/docs"
              className="card"
            >
              <h3>Level 1 - $10 &rarr;</h3>
              <p>Access level 1 features.</p>
            </a>
          </Link>

          <Link href="/levels/level-two">
            <a
              // href="https://nextjs.org/docs"
              className="card"
            >
              <h3>Level 2 - $25 &rarr;</h3>
              <p>Access level 2 features.</p>
            </a>
          </Link>

          <Link href="/levels/level-three">
            <a
              // href="https://nextjs.org/docs"
              className="card"
            >
              <h3>Level 3 - $50 &rarr;</h3>
              <p>Access level 3 features.</p>
            </a>
          </Link>

          <Link href="/levels/level-four">
            <a
              // href="https://nextjs.org/docs"
              className="card"
            >
              <h3>Level 4 - $100 &rarr;</h3>
              <p>Access level 4 features.</p>
            </a>
          </Link>
        </div>
        <Link href="/account/signup">
          <a
            // href="https://nextjs.org/docs"
            className="getstarted"
          >
            <p style={{ fontFamily: "Verdana", fontSize: 18 }}> Get started</p>
          </a>
        </Link>
      </main>

      <footer>
        <a
          href="https://chartbotapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
          <h3> &nbsp; EasyMember, Inc. </h3>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          line-height: 1;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
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

        .getstarted {
          margin: 0.2rem;
          flex-basis: 45%;

          text-align: center;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid #147efb;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color: #147efb;
          padding-left: 30px;
          padding-right: 30px;
        }

        .getstarted:hover,
        .getstarted:focus,
        .getstarted:active {
          color: "#0b62d0";
          background-color: #0b62d0;
          border-color: #0070f3;
        }

        .logo {
          height: 1em;
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
  );
}
