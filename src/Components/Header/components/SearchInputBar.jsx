import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent";
import { routerLinks } from "data/siteData/routerLinks";

export const SearchInputBar = ({ data, showInputBar }) => {
  return (
    <div className="searchInputBar flex-block">
      <input placeholder={data.namePlaceHolder} maxLength="20" />
      <Link
        onClick={() => {
          showInputBar(true);
        }}
        to={routerLinks.searchpage.link}
      >
        <ButtonComponent
          btnName={data.name}
          typeBtn={data.typeBtn} /*stylebtn is only 1, 2 or 3 type */
        />
      </Link>
    </div>
  );
};

SearchInputBar.prototypes = {
  data: PropTypes.shape({
    namePlaceHolder: PropTypes.string,
  }),
  showInputBar: PropTypes.func,
};
