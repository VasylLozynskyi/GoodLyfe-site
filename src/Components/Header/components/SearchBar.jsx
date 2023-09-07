import PropTypes from "prop-types";

export const SearchBar = ({ data, showInputBar }) => {
  return (
    <div
      className="searchBtnBar flex-block"
      onClick={() => {
        showInputBar(false);
      }}
    >
      <b>{data.name}</b>
      <img src={data.iconUrl.src} alt={data.iconUrl.alt} />
    </div>
  );
};


SearchBar.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    iconUrl: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
  showInputBar: PropTypes.func,
}