import "./Header.css";
import Home from "../assets/home.png";
import Headerlogo from "../assets/header.png";
import Btn from '../assets/btn.png'

function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        <a href="#" className="logo">
          <img src={Headerlogo} alt="photo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our App</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="btns">
          <button className="in">Sign In</button>
          <button className="up">Sign Up</button>
        </div>
      </div>
      <section className="Home">
        <div className="info">
          <h1>
            We boost <br /> growth for your <br /> statup business
          </h1>
          <h6>
            Our goal is top at the heart of creativity services industry as a
            digital creator. In has a after comment
          </h6>
          <div className="btns">
            <button className="btn1">Get Satarted</button>
            <button className="btn2">
              <img
                className="pict"
                src={Btn}
                alt=""
              />{" "}
              Learn More
            </button>
          </div>
        </div>

        <div className="picture">
          <img src={Home} alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
