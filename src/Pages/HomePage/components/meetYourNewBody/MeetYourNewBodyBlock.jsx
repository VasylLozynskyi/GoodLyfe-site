import {
  image_meetbody_homepage_1,
  image_meetbody_homepage_2,
} from "data/siteData/importImages";
import "./meetyournewbodyblock.scss";
import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";
import { useState } from "react";
import { TempPopUp } from "Components/TempPopUp/TempPopUp";

export const MeetYourNewBodyBlock = ({ data }) => {
  let [showPopUp, getShowPopUp] = useState(false);

  return (
    <div className="container flex-block meetyournewbodyblock">
      <div className="_block">
        <img
          className="_image_1"
          src={image_meetbody_homepage_2.src}
          alt={image_meetbody_homepage_2.alt}
        />
        <img
          className="_image_2"
          src={image_meetbody_homepage_1.src}
          alt={image_meetbody_homepage_1.alt}
        />
      </div>
      <div className="_block">
        <h2>{data.title}</h2>
        <p>{data.subTitle}</p>
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
      {showPopUp ? <TempPopUp getShowPopUp={getShowPopUp} /> : ""}
    </div>
  );
};
