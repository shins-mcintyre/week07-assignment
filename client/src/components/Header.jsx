import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/" className="site-title">
          <h1>XIAOMAO</h1>
        </Link>
        <p className="tagline">"Little Cat"</p>
      </header>
    </>
  );
}
