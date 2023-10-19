import "./style.css";
import github from "../../assets/github.svg";

const Footer = ({ link, mensagem }) => {
  return (
    <footer id="footer">
      <a href={link} target="_blank">
        <img className="github" src={github} alt="" />
      </a>
      <span>{mensagem}</span>
    </footer>
  );
};

export default Footer;