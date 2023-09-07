import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { slider_images_homepage } from "data/siteData/importImages";
import "./herosliderblock.scss";
import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";
import { useState } from "react";
import { TempPopUp } from "Components/TempPopUp/TempPopUp";

export const HeroSliderBlock = ({ data }) => {
  let [showPopUp, getShowPopUp] = useState(false);
  console.log(showPopUp);
  return (
    <div className="container herosliderblock">
      <div className="_text">
        <h1>
          Welcome to Good
          <span>
            <h1>lyfe</h1>
          </span>
          Gyms
        </h1>
        <div onClick={() => {
              getShowPopUp(true);
            }}>
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
