import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import { slider_images_homepage } from "data/siteData/importImages";
import "./herosliderblock.scss";
import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";
import { useState } from "react";
import { TempPopUp } from "Components/TempPopUp/TempPopUp";

export const HeroSliderBlock = ({ data }) => {
  let [showPopUp, getShowPopUp] = useState(false);

  return (
    <div className="container herosliderblock">
      <div className="_text">
        <h1>
          {data.titleStart}
          <span>
            <h1>{data.spanTitle}</h1>
          </span>
          {data.titleEnd}
        </h1>
        <div
          onClick={() => {
            getShowPopUp(true);
          }}
        >
          <ButtonComponent
            btnName={data.button.name}
            typeBtn={data.button.typeBtn} /*stylebtn is only 1, 2 or 3 type */
          />
        </div>
      </div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {slider_images_homepage.map((el) => {
          return (
            <div className="image_slider_element" key={el}>
              <img src={el} />
            </div>
          );
        })}
      </Carousel>
      {showPopUp ? <TempPopUp getShowPopUp={getShowPopUp} /> : ""}
    </div>
  );
};

HeroSliderBlock.propTypes = {
  data: PropTypes.shape({
    titleStart: PropTypes.string,
    spanTitle: PropTypes.string,
    titleEnd: PropTypes.string,
    button: PropTypes.shape({
      name: PropTypes.string,
      typeBtn: PropTypes.string,
    }),
  }),
};
