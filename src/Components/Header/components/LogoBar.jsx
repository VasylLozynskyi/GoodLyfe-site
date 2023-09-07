import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LogoBar = ({ data }) => {
  return (
    <Link className="logo_block" to="/">
      <img src={data.logoUrl.src} alt={data.altLogoHeader} />
    </Link>
  )
}

LogoBar.propTypes = {
  data : PropTypes.shape({
    logoUrl: PropTypes.shape({
      src: PropTypes.string,
    }),
    altLogoHeader: PropTypes.string,
  })
}