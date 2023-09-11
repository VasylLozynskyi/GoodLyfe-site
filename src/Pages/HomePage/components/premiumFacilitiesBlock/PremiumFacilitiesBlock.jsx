import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";
import { TempPopUp } from "Components/TempPopUp/TempPopUp";
import { useState } from "react";
import PropTypes from "prop-types"
import "./premiumfacilitiesblock.scss"
import { image_premiumfacilities_homepage_1, image_premiumfacilities_homepage_2 } from "data/siteData/importImages";

export const PremiumFacilitiesBlock = ({ data }) => {
  let [showPopUp, getShowPopUp] = useState(false);

  return (
    <div className="container flex-block premiumfacilitiesblock">
      <div className="_block">
        <h3>{data.title}</h3>
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
      <div className="_block">
        <img
          className="_image_1"
          src={image_premiumfacilities_homepage_1.src}
          alt={image_premiumfacilities_homepage_1.alt}
        />
        <img
          className="_image_2"
          src={image_premiumfacilities_homepage_2.src}
          alt={image_premiumfacilities_homepage_2.alt}
        />
      </div>
      {showPopUp ? <TempPopUp getShowPopUp={getShowPopUp} /> : ""}
    </div>
  );
};

PremiumFacilitiesBlock.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    button: PropTypes.shape({
      name: PropTypes.string,
      typeBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};
