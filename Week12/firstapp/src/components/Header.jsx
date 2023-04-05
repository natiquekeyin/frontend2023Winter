import PropTypes from "prop-types";
import Button from "./Button";
import { FaApple } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <h2>
          {" "}
          <FaApple style={{ color: "red", cursor: "pointer" }} />
          {title}
        </h2>
        {location.pathname === "/" && (
          <Button
            color={showAdd ? "red" : "green"}
            text={showAdd ? "Close" : "Add"}
            onClick={onAdd}
          />
        )}
      </header>
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

const headingStyle = {
  color: "green",
  backgroundColor: "lightgray",
};

export default Header;
