class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        nav {
            background-color: #850E35;
            padding: 10px;
        }
        
        nav li {
            display: inline;
            margin-right: 20px;
            padding-top: 5px;
        }
        
        nav a {
            text-decoration: none;
            padding-right: 20px;
            font-size: 20px;
            color: #FFFFFF;
        }
        
        nav a:hover {
            font-weight: bold;
        }

        .navtitle {
            color: #FFFFFF;
            font-size: 30px;
            font-weight: bold;
        }
        @media screen and (max-width: 1000px) {

            nav li {
                display: inline;
                padding-top: 0px;
                margin-right: 0px;
            }

            nav a {
                font-size: 10px;
                padding-right: 5px;
                margin-right: 10px;
            }

            .navtitle {
                font-size: 15px;
            }
        }
      </style>
      
      <nav>
            <ul>
                <li ><a class="navtitle">DeeZ Cocktail</a></li>
                <li style="float:right"><a href="https://www.themealdb.com/api.php">API</a></li>
                <li style="float:right"><a href="https://linkedin.com/in/bimo-aryo-bramantyo-kr">About Me</a></li>
                <li style="float:right"><a href="">Home</a></li>
            </ul>
        </nav>
      `;
    }
}
customElements.define('nav-bar', NavBar);