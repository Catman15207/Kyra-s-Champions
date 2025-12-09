import { useEffect, useState } from "react";
//import ResumeItem from "../components/ResumeItem";

export default function Home() {
  const images = [
    "/images/Art_home1.png",
    "/images/Art_home2.png",
    "/images/Art_home3.png",
    "/images/Art_home4.png",
    "/images/Art_home5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header with logo and menu button */}
      <header className="header">
        <img
          className="logo"
          src="/images/Kyra's_logo.png"
          alt="Kyra's Champions Logo"
        />
        <button className="menu-btn">=</button>
      </header>

      {/* Slideshow */}
      <div className="slideshow-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <h2 className="mission-statement">
        Kyra’s Champions focuses on legislative initiatives on the federal and
        state levels to ensure children and their safety are top priorities in
        our family court systems.
      </h2>

      <div className="split-section">
        <div className="left-text">
          <p>
            Our mission is to stop child abuse and child murders. We advocate
            for policy changes that promote and protect children and families at
            risk of family violence. We need your help and support to ensure our
            voices are heard and that laws are passed to protect at-risk
            children.
          </p>

          <p>
            As a 501(c)4 charity, we seek to change the way issues of violence
            and abuse are addressed in family courts so that child safety is put
            above all else.
          </p>

          <p>
            Kyra’s Champions was founded by Jacqueline Franchetti in memory of
            her sweet, vibrant, loving 2-year-old daughter, Kyra, who was shot
            to death while sleeping by her father, who then set his house on
            fire and killed himself during an unsupervised, court-ordered visit.
          </p>
        </div>

        <img
          src="/images/Motherholdingchild.png"
          alt="Kyra Family"
          className="side-image"
        />
      </div>

      <h3>Kyra’s story is not unique.</h3>

      <ul>
        <li>
          70% FAILURE RATE in which family court are convinced by an abuser that
          the victimized parent should be denied sole custody
        </li>
        <li>
          58,000 AT-RISK CHILDREN are ordered into unsupervised visitation with
          an abusive parent by state family courts each year
        </li>
        <li>
          75% OF CHILD DEATHS in the United States are at the hands of a parent
        </li>
        <li>
          Over 1/2 million children today are court-ordered into a home where
          they are being sexually, physically, or emotionally abused
        </li>
      </ul>

      <p>
        <strong>
          We honor Kyra’s memory by working to ensure no other child should have
          the same fate as Kyra and no other family should be impacted by a
          similar tragedy.
        </strong>
      </p>

      <p>
        <a href="#" className="cta">
          CLICK HERE TO SUPPORT KYRA'S LAW TODAY
        </a>
      </p>

      {/* Footer (same as About page) */}
      <footer className="about-footer">
        <div className="footer-left">
          <img
            src="/images/Kyra's_logo.png"
            alt="Logo"
            className="footer-logo"
          />

          <p>
            565 Plandome Rd, Suite 156
            <br />
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
            non-profit charity, seeks to create change in the conversation,
            change in the way issues are addressed in family court.
          </p>

          <p className="text-bold">
            Please Note: we do not provide legal guidance on divorce or custody
            cases.
          </p>

          <p>
            Kyra’s Champions is a 501(c)4 charity.
            <br />
            ©2024 Kyra’s Champions
          </p>

          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
