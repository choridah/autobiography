/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
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
    
    </style>
    <p>copyright &copy; 2022 - The Autobiografi of Choridah B.</p>
    `;
  }
}

// eslint-disable-next-line linebreak-style
customElements.define('info-app', Footer);
