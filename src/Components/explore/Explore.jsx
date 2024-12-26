import "./Explore.css";
import Mask from '../../assets/Mask.png'
import { FaPlay } from "react-icons/fa";

const Explore = () => {
  return (
    <section className="explore">
      <div className="img-info2">
        <div className="info2">
          <h1>Many Blocks and <br /> Components</h1>
          <p>
          Startup Framework contains components <br /> and complex blocks which can easily be integrated into almost any design. 
          </p>
          <a href="https://www.figma.com/design/LuUBpgRHm0UvjYa6LwJcyu/Agency-Landing-Page-(Community)?node-id=2-2&t=O7AueMEWJEuanLjT-0">
            <button>Explore</button>
          </a>
        </div>
        <div className="img">
            <div>
                <i><FaPlay /></i>
            </div>
          <img src={Mask} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Explore;
