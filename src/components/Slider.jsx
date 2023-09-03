import Slider from "react-slick";

import img1 from '../assets/img/front-1.png'
import img2 from '../assets/img/front-2.png'
import img3 from '../assets/img/front-3.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

const SimpleSlider = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    return (
      <div className="overflow-hidden">
        <Button text="Front End"/>


        <Slider {...settings}>
          <div>
            <h3><img src={img1} alt="" /></h3>
          </div>
          <div>
            <h3><img src={img2} alt="" /></h3>
          </div>
          <div>
            <h3><img src={img3} alt="" /></h3>
          </div>
          <div>
            <h3><img src={img1} alt="" /></h3>
          </div>
          <div>
            <h3><img src={img2} alt="" /></h3>
          </div>
          <div>
            <h3><img src={img3} alt="" /></h3>
          </div>
        </Slider>
      </div>
    );
  }

export default SimpleSlider