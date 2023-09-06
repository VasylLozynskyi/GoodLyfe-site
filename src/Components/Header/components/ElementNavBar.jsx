import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const ElementNavBar = ({ el }) => {
  return (
    <>
      <Link className="text_links" key={el.id} to={el.linkUrl}>
        {el.name}
      </Link>
    </>
  )
}

ElementNavBar.protoTypes = {
  el: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    linkUrl: PropTypes.string,
})
}
