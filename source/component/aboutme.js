class AboutMe extends HTMLElement {
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
          .about-info {
            padding: 100px;
            background-color: #FFF5E4;
            text-align: center;
            color: #850E35;
          }
          
          .about-info > p {
            margin: 10px auto;
            max-width: 600px;
          }

          .about-info > h2 {
            margin: 25px auto;
            font-size: 17px;
            max-width: 750px;
          }

      </style>
      
      <div class="about-info">
          <h1>Want To Drink Something?</h1>
          <p>We have any drinks for you guys and this is our menu in DeeZ Cocktail Bar. Enjoy yourself or with your friends. It's up to you.
           Remember to behave while you drink. Drink with responsible and 
          don't make any problems to another customer. </p>

          <h2> Note : We recommend you not to driving when feeling headache and/or feeling dizzy after drinking too much.</h2>
        </div>
      `;
    }
}
customElements.define('about-me', AboutMe);