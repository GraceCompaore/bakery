import { useState } from 'react'

import './Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        <ul className="mentions">
          <li>Mentions Légales</li>
          <li>Politiques de cookies</li>
          <li>Politiques de confidentialité</li>
          <li>Conditions d'utilisation</li>
        </ul>
      </div>
      <div className="lmj-footer-elem">
        <ul className="socials-network">
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-youtube-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="lmj-footer-elem">
        <ul className="adress">
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  )
}

export default Footer
