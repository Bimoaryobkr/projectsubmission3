class FootBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
      <p>Submission Kelas Belajar Front-End Fundamental</p>
      <p>by BIMO ARYO BRAMANTYO KR &#169; 2022</p>
        `;
    }
}
customElements.define('foot-bar', FootBar);