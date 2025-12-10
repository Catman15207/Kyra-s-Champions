export default function KyrasStory() {
  return (
    <div className="kyrasstory-wrapper">

      {/* HERO IMAGE — replace placeholder.png with your real image */}
      <div className="story-hero">
        <img
          src="/images/placeholder_hero.png"
          alt="Kyra Hero"
          className="story-hero-img"
        />
      </div>

      {/* PAGE TITLE */}
      <h1 className="story-title">Kyra’s Story</h1>

      {/* MAIN CONTENT */}
      <div className="story-main">
        {/* LEFT TEXT */}
        <div className="story-text">
          <p>
            To meet Kyra was to love Kyra. She easily made friends wherever she went,
            and loved watching Elmo, Mickey Mouse, and “Kyra TV,” (videos of herself,
            her mom, and her friends). Kyra loved sprinklers at the park and bubbles —
            blowing them, catching them, and taking bubble baths. She often requested
            “moo-sic” so she could dance. She loved to draw and play with play-doh 
            and puppies. Her smile lit up a room and her giggle was infectious. Kyra 
            touched everyone she met.
          </p>

          <h3 className="story-highlight">
            Kyra’s murder was preventable. The court system failed Kyra.
          </h3>

          <a href="#" className="cta">
            CLICK HERE TO SUPPORT KYRA'S LAW TODAY
          </a>

          <p>
            Kyra’s father was emotionally and verbally abusive to Jacqueline during
            their relationship, and when Jacqueline became pregnant, she left him.
            After Kyra was born, he reappeared, seeking custody. During the two years
            of custody hearings, the court was repeatedly notified that Kyra’s father
            was dangerous, angry, and suicidal. During the years of court proceedings,
            he stalked, harassed, and threatened her.
          </p>

          <p>
            Jacqueline’s repeated warnings and pleas for help fell on deaf ears.
            Despite these abusive and dangerous behaviors, the forensic evaluator
            recommended joint custody, and Kyra’s attorney refused to take actions
            that would have protected Kyra. Just days before her murder, the family
            court judge said the case was “not a life-or-death situation.”
          </p>

          <p>
            In July 2016, Kyra was on a court‑ordered visit with her father in Virginia
            when he shot Kyra to death while she slept. He then set his house on fire
            and killed himself.
          </p>

          <p className="text-bold">
            We honor Kyra’s memory by focusing on legislative initiatives on the
            federal and state levels to ensure children and their safety are top
            priorities in our family court systems. No other family should have to 
            deal with the horrors that Kyra and Jacqueline did.
          </p>
        </div>

        {/* RIGHT IMAGE — replace placeholder_storyimage.png */}
        <img
          src="/images/placeholder_storyimage.png"
          alt="Kyra Story Image"
          className="story-side-image"
        />
      </div>

      {/* FOOTER — same structure as About page */}
      <footer className="about-footer">
        <div className="footer-left">
          <img
            src="/images/Kyra's_logo.png"
            alt="Logo"
            className="footer-logo"
          />
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
            Our sister organization, the Kyra Franchetti Foundation, a 501(c)3 
            non‑profit charity, seeks to create change in the conversation, 
            change in the way issues are addressed in family court.
          </p>
          <p className="text-bold">
            Please Note: we do not provide legal guidance on divorce or custody cases.
          </p>
          <p>
            Kyra’s Champions is a 501(c)4 charity.<br />
            ©2024 Kyra’s Champions
          </p>

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

