//import './Footer.css';

function Footer() {
  return (
    <footer className="font-serif w-full bg-black p-8 text-white">
      <div className="flex flex-row space-x-4 justify-evenly  ">
        <ul className=" ">
          <li className="">
            <a href="#">Mentions Légales</a>
          </li>
          <li>
            {' '}
            <a href="#">Politiques de cookies</a>{' '}
          </li>
          <li>
            <a href="#">Politiques de confidentialité</a>
          </li>
          <li>
            {' '}
            <a href="#">Conditions d'utilisation</a>
          </li>
        </ul>

        <ul className="flex flex-row space-x-4 p-8">
          <li>
            <a href="#">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube-square fa-2x"></i>
            </a>
          </li>
        </ul>

        <ul className="space-4">
          <li>YASOMA, la qualité dans le pain</li>
          <li>10 Rue des plantes, 35700 Rennes</li>
          <li>02 00 00 00 00</li>
        </ul>
      </div>
      <p className="flex justify-center mx-8 text-white text-opacity-50">
        copyright &copy; 2021 YASOMA
      </p>
    </footer>
  );
}

export default Footer;
