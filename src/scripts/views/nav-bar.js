/* eslint-disable linebreak-style */
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      @media screen and (max-width: 600px) {
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Quicksand:wght@500&family=Source+Code+Pro&display=swap');

        * {
          font-family: 'Quicksand', sans-serif;
        }

        div .drawer-btn {
          display: block; 
          border: none;
          min-width: 44px;
          min-height: 44px;
          border-radius: 25px;
          padding: 16px;
        }

        div nav {
          position: fixed;
          top: 79px;
          left: 0;
          padding-inline-start: 0px;
          background-color: white;
          min-height: 55px;
          width: 25px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          box-shadow: 4px 3px 15px -3px rgb(0 0 0 / 10%);
          transform: translateX(-210px);
          transition: transform 0.3s ease-out;
        }

        div nav.open {
          transform: translateX(0);
        }

        div nav ul li,
        div nav ul li a {
          display:block;
        }

        div nav ul li a {
          padding: 16px 3px;
          text-decoration: none; 
          color: lightcoral;
          font-weight: bold;
          font-size: 15px;
        }

        a:hover {
          color: white;
        }
    }
    @media screen and (min-width: 601px) {
      div .drawer-btn {
        padding: 8px;
        margin-right: 16px;
        font-weight: bold;
        color: #141e16;
        background-color: transparent;
        border: 0; 
        display: none; 
        cursor: pointer; 
      }
      
      div nav ul li {
          list-style: none; 
          display: inline;
          padding: 9px;
      }
      
      div nav ul li a {
          text-decoration: none;
          color: babyblue;
      }

      ul .col-3 {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        text-align: center;
        width: 100%;
      }
    }    
  </style>
  <div>
    <button class="drawer-btn">☰&nbsp&nbsp&nbsp<b>Myself</b></button>
    <nav>
      <ul>
        <li><a href="#/" id="home">Home</a></li>
        <li><a href="#about-me">Introduce Myself</a></li>
        <li><a href="#learning-at">Learning at</a></li>
        <li><a href="https://www.linkedin.com/in/choridatul-bahiyyah-66a3551ab/">Contact Me</a></li>
      </ul>
    </nav>
  </div>
    `;

    // membuka sidebar
    this.shadowRoot.querySelector('.drawer-btn').addEventListener('click', () => {
      this.shadowRoot.querySelector('nav').classList.toggle('open');
    });

    this.shadowRoot.querySelector('#home').addEventListener('click', () => {
      this.shadowRoot.querySelector('nav').classList.remove('open');
    });
  }
}

// eslint-disable-next-line linebreak-style
customElements.define('app-bar', Navbar);
