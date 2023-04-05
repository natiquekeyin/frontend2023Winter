import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>Copyright &copy;2023 - Keyin College</p>
      <Link to="/about">About Us!</Link>
    </div>
  );
};

export default Footer;
