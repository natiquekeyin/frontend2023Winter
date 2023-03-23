import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("clicked the button");
  };
  return (
    <div>
      <header className="header">
        <h2>{props.title}</h2>
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
