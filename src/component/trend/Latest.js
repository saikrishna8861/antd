import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../1.jpg';
import img2 from '../2.jpg';
import img3 from '../3.jpg';
import img4 from '../4.jpg';
import img5 from '../5.jpg';
import img6 from '../6.jpg';
import img7 from '../7.jpg';
import img8 from '../8.jpg';
import img9 from '../9.jpg';
import img10 from '../10.jpg';
import img11 from '../11.jpg';
import img12 from '../12.jpg';
import img13 from '../13.jpg';
import img14 from '../14.jpg';
import img15 from '../15.jpg';
import img16 from '../16.jpg';
import img17 from '../17.jpg';


export default class Latest extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      // centerPadding: "70px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background:#141A28; color: #bada55`
        );
      }
    };
    return (
      <div className="bg" style={{backgroundColor:"#141A28"}}>
        <h2></h2>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img2} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img3} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img4} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img5} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img6} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img7} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img8} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img9} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img10} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img11} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img12} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img13} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img14} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img15} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img16} alt="" width="270px" height="200px" />
          </div>
          <div>
          <img src={img17} alt="" width="270px" height="200px" />
          </div>

        </Slider>
      </div>
    );
  }
}