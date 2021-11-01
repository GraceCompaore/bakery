import './Footer.css';

function Footer() {
  return (
    <footer className="bp-footer">
      <div className="bp-footer-elem">
        <ul className="mentions">
          <li>
            <a href="#">Mentions Légales</a>
          </li>
          <li>
            <a href="#">Politiques de cookies</a>
          </li>
          <li>
            <a href="#">Politiques de confidentialité</a>
          </li>
          <li>
            <a href="#">Conditions d'utilisation</a>
          </li>
        </ul>
      </div>
      <div className="bp-footer-elem">
        <ul className="socials-network">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="bp-footer-elem">
        <ul className="adress">
          <li>YASOMA, la qualité dans le pain</li>
          <li>33 Rue Marcel, 35700 Rennes</li>
          <li>02 00 00 00 00</li>
        </ul>
      </div>
      <div>
        <p className="footer-bottom">copyright &copy; 2021 YASOMA</p>
      </div>
    </footer>
  );
}

export default Footer;
