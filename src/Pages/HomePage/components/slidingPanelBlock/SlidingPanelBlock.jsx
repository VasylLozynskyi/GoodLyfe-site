import { image_slidingpanel_homepage } from "data/siteData/importImages";
import "./slidingpanelblock.scss";
import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";
import { useState } from "react";
import { TempPopUp } from "Components/TempPopUp/TempPopUp";
import PropTypes from "prop-types"

export const SlidingPanelBlock = ({ data }) => {
  let [showPopUp, getShowPopUp] = useState(false);
  return (
    <div className="container slidingpanelblock">
      <img
        className="_image"
        src={image_slidingpanel_homepage.src}
        alt={image_slidingpanel_homepage.alt}
      />
      <div className="_text">
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


SlidingPanelBlock.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    button: PropTypes.shape({
      name: PropTypes.string,
      typeBtn: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  })
}