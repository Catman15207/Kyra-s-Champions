export default function KyrasStory() {
  return (
    <div className="kyrasstory-wrapper">
      {/* HERO IMAGE */}
      <div className="story-hero">
        <img
          src="/images/image.png"
          alt="Kyra Hero"
          className="story-hero-img"
        />
      </div>

      <h1 className="story-title">Kyra’s Story</h1>

      <div className="story-main">
        <div className="story-text">
          <p>
            To meet Kyra was to love Kyra. She easily made friends wherever she went...
          </p>

          <h3 className="story-highlight">
            Kyra’s murder was preventable. The court system failed Kyra.
          </h3>

          <a href="#" className="cta">
            CLICK HERE TO SUPPORT KYRA'S LAW TODAY
          </a>

          <p>
            Kyra’s father was emotionally and verbally abusive to Jacqueline...
          </p>

          <p>
            Jacqueline’s repeated warnings and pleas for help fell on deaf ears...
          </p>

          <p>
            In July 2016, Kyra was on a court‑ordered visit with her father...
          </p>

          <p className="text-bold">
            We honor Kyra’s memory by focusing on legislative initiatives...
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <img
          src="/images/18181620151120_0005_1.webp"
          alt="Kyra Story Image"
          className="story-side-image"
        />
      </div>

      {/* FOOTER */}
      <footer className="about-footer">
        <div className="footer-left">
          <img
            src="/images/Kyra's_logo.png"
            alt="Logo"
            className="footer-logo"
          />
          <p>565 Plandome Rd, Suite 156<br />Manhasset, NY 11030</p>
          <p><a href="mailto:kyraschampions@gmail.com">kyraschampions@gmail.com</a></p>
          <p className="text-bold">
            Please note, we cannot give legal advice on child custody cases.
          </p>
        </div>

        <div className="footer-center">
          <div className="social-row">
            <span className="social">f</span>
            <span className="social">in</span>
            <span className="social">t</span>
            <span className="social">ig</span>
          </div>
        </div>

        <div className="footer-right">
          <h2 className="footer-title">Kyra Franchetti Foundation</h2>
          <p>
            Our sister organization, the Kyra Franchetti Foundation...
          </p>
          <p className="text-bold">
            Please Note: we do not provide legal guidance...
          </p>
          <p>Kyra’s Champions is a 501(c)4 charity.<br />©2024 Kyra’s Champions</p>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
