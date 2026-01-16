export default function Footer() {
  return (
    <footer>
      <p className="company-name">Company Name</p>
      <a href="#">Contact</a>
      <div className="social-media">
        <img
          src="/logos/fb_logo.png"
          alt="Facebook link"
          id="fb-logo"
          href="https://www.facebook.com/"
        />
        <img
          src="/logos/ig_logo.png"
          alt="Instagram link"
          id="ig-logo"
          href="https://www.instagram.com/?hl=en"
        />
        <img
          src="/logos/x_logo.png"
          alt="X link"
          id="x-logo"
          href="https://x.com/"
        />
      </div>
    </footer>
  );
}
