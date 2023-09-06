import PropTypes from 'prop-types';

export const LogoBar = ({ data }) => {
  return (
    <div className="logo_block">
      <img src={data.logoUrl.src} alt={data.altLogoHeader} />
    </div>
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