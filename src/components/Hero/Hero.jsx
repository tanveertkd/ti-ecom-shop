import {Link} from "react-router-dom";

import './hero.css';
import taekwondo from "../../assets/taekwondo.png"

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-body">
            <h3>Get all your training equipments all in one convienent place!</h3>
                <Link to="./products">
                    <button type="submit" className="hero-cta btn btn-primary-solid">
                        Shop Now!
                    </button>
                </Link>
            </div>
            <div className="hero-asset">
                <img src={taekwondo} alt="hero-bg" />
            </div>
        </div>
    );
}

export {Hero};