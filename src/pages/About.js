export default function About() {
  return (
    <div className="about-wrapper">

      {/* Mission Section Title */}
      <h1 className="mission-title">
        Our mission is to protect children in custody cases<br />
        from being court-ordered into the home of an abusive parent.
      </h1>

      {/* Main Flex Section */}
      <div className="about-main">

        {/* LEFT TEXT SIDE */}
        <div className="about-text">
          <p>
            Kyra’s Champions is a 501(c)4 charity advocating for policy and legislative
            changes that promote and protect children at risk of family violence.
          </p>

          <p>
            We raise awareness about the dangers to children, inside and outside our
            divorce/family court system, and seek changes in the way family violence and
            child abuse are addressed in child custody cases.
          </p>

          <p>
            Kyra’s Champions was founded by Jacqueline Franchetti in memory of her sweet,
            vibrant, loving 28-month-old daughter Kyra, who, in July 2016 during a
            court-sanctioned unsupervised visit, was shot twice in the back while she
            slept by her father, who then set his house on fire and killed himself.
          </p>

          <p className="text-bold">
            Kyra’s Champions focuses on legislative initiatives on the federal and state
            levels to ensure children and their safety are top priorities in our family
            court systems.
          </p>

          <a href="#" className="cta">CLICK HERE TO SUPPORT KYRA'S LAW TODAY</a>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="/your-image-here.jpg"
          alt="Kyra and mother"
          className="about-image"
        />
      </div>

      {/* FOOTER SECTION */}
      <footer className="about-footer">

        <div className="footer-left">
          <img src="/your-logo.png" className="footer-logo" alt="Logo" />

          <p>
            565 Plandome Rd, Suite 156<br />
            Manhasset, NY 11030
          </p>

          <p>
            <a href="mailto:kyraschampions@gmail.com">
              kyraschampions@gmail.com
            </a>
          </p>

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
            Our sister organization, the Kyra Franchetti Foundation, a 501(c)3 non-profit
            charity, seeks to create change in the conversation, change in the way issues
            are addressed in family court.
          </p>

          <p className="text-bold">
            Please Note: we do not provide legal guidance on divorce or custody cases.
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
