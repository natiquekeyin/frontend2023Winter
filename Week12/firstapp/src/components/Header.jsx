import PropTypes from "prop-types";
import Button from "./Button";
import { FaApple } from "react-icons/fa";

const Header = (props) => {
  const onClick = () => {
    console.log("clicked the button");
  };
  return (
    <div>
      <header className="header">
        <h2>
          {" "}
          <FaApple style={{ color: "red", cursor: "pointer" }} />
          {props.title}
        </h2>
        <Button color="green" text="Add" someFun={onClick} />
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
