import PropTypes from 'prop-types';

import "./buttoncomponent.scss";

export const ButtonComponent = ({ btnName, typeBtn }) => {
  return (
    <div className={typeBtn == 1 ? "button-block1": typeBtn == 2 ? "button-block2" : "button-block3"}>
      <button>{btnName}</button>
    </div>
  ) 
}

ButtonComponent.propTypes = {
  namebutton: PropTypes.string,
  stylebtn: PropTypes.oneOf([1, 2, 3])
}