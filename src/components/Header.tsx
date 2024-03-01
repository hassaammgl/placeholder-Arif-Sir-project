import style from "../styles/header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logo}>TelegramHolder</div>
        <div className={style.links}>
          <Link to="/">Home</Link>
          <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Faq</Link>
        </div>{" "}
        <button className={style.btn}>Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
