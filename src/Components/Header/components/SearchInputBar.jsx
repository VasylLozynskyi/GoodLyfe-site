import PropTypes from "prop-types"

import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";

export const SearchInputBar = ({ data }) => {
  return (
    <div className="searchInputBar flex-block">
      <input placeholder={data.namePlaceHolder} maxLength="20" />;
      <ButtonComponent btnName={data.name} typeBtn={data.typeBtn} /*stylebtn is only 1, 2 or 3 type */ />
    </div>
  );
};

SearchInputBar.prototypes = {
  data: PropTypes.shape({
    namePlaceHolder: PropTypes.string,
  })
}