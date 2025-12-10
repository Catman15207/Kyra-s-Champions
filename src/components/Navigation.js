import { HashLink } from "react-router-hash-link";

export default function Navigation(){
  return (
    <nav>
      <ul>
        <li>
          <HashLink smooth to="/">
            Home
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/about">
            About Organization
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/kyrasstory">
            Kyra's Story
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/contact">
            Contact Us
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
