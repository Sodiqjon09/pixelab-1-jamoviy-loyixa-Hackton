import "./Footer.css";
import Foot from "../../assets/foot.jpg";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="first-info">
        <span>OUR TEAM</span>
        <h1>Subscibe Our Newsleter</h1>
      </div>

      <div className="img-info">
        <div className="img">
          <img src={Foot} alt="" />
        </div>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <input type="text" name="" placeholder="Your E-mail here" id="text" />
          <a href="/">
            <button>Subscribe Our Newsletter</button>
          </a>
        </div>
      </div>
      <br />
      <div className="link">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <p>© 2020 Epixelab. All rights reserved.</p>
        <ul>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">How it Works</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <p>
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </p>
    </footer>
  );
}
export default Footer;
