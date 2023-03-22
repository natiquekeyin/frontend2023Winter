import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div>
      <h2 style={{ color: "red", backgroundColor: "lightgray" }}>
        Header - {props.title}
      </h2>
      <p style={{ color: "green", fontSize: "1.2em" }}>
        Message - {props.message}
      </p>
    </div>
  );
};

Header.defaultProps = {
  title: "No title received",
  message: "No message received",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Header;
