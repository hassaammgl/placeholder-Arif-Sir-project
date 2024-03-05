import { Link } from "react-router-dom";
import style from "../styles/footer.module.scss";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <section>
      <div className={style.footer}>
        <div className={style.footermain}>
          <div className={style.footercontent}>
            <div className={style.boxes}>
              <h2>Company</h2>
              <Link to={"/"}>About Us</Link>
              <Link to={"/"}>Blog</Link>
              <Link to={"/"}>Services</Link>
              <Link to={"/"}>Pricing</Link>
            </div>
            <div className={style.boxes}>
              <h2>Usefull Links</h2>
              <Link to={"/"}>Private Policy</Link>
              <Link to={"/"}>Terms and Conditions</Link>
              <Link to={"/"}>Disclaimer</Link>
              <Link to={"/"}>FAQ</Link>
            </div>
            <div className={style.boxes1}>
              <h2>Contact</h2>
              <div className={style.icons}>
                <FaInstagram />
                <FaWhatsapp />
                <FaTwitter />
                <CiPhone />
              </div>
              <div className={style.mail}>
                <CiMail />
                <a href="mailto:mailhere@gmail.com">mailhere@gmail.com</a>
              </div>
              <div className={style.number}>
                <CiPhone />
                <span>0045 26 71 99 53</span>
              </div>
            </div>
          </div>
          <div className={style.footerfooter}>
            Copyright &copy; 2024 All Rights Reserved TelegramHolder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
