import logo from './logo.svg';
import './App.css';
import "./index.css";

function App() {
  return (
    <div className="App">
      <head>

      </head>
      <body class="body">
      <div id="grain" className="grain-container-2" style={{ position: "relative", overflow: "hidden" }}></div>

        <div class="navbar w-nav">
          <div class="nav-container w-container">
            <a class="logo w-nav-brand w--current">
              <div class="name-text">Adam Gough</div>
            </a>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <div class="nav-div-left">
                <div class="nav-text">Case Studies:</div>
                <a href= "google.com" class="nav-text-link">/ Brown CS</a>
                <a href= "google.com" class="nav-text-link">/ IFC</a>
                <a href= "google.com" class="nav-text-link">/ Lifestyle</a>
              </div>
            </nav>
          </div>
          <div class="w-nav-overlay"></div>
        </div>
        <section class="hero-wrapper">
          <div class="hero-div">
            <h1 class="hero-text">
              <span class="word">
                <span class="char">T</span>
                <span class="char">H</span>
                <span class="char">E </span>
              </span>
              <span class="word">
                <span class="char">V</span>
                <span class="char">I</span>
                <span class="char">S</span>
                <span class="char">I</span>
                <span class="char">O</span>
                <span class="char">N</span>
                <span class="char">A</span>
                <span class="char">R</span>
                <span class="char">Y </span>
              </span>
              <span class="word">
                <span class="char">W</span>
                <span class="char">O</span>
                <span class="char">R</span>
                <span class="char">K </span>
              </span>
            </h1>
            <h1 class="hero-text">
              <span class="word">
                <span class="char">& </span>
                <span class="char">P</span>
                <span class="char">A</span>
                <span class="char">S</span>
                <span class="char">S</span>
                <span class="char">I</span>
                <span class="char">O</span>
                <span class="char">N</span>
                <span class="char">A</span>
                <span class="char">T</span>
                <span class="char">E </span>
              </span>
              <span class="word">
                <span class="char">L</span>
                <span class="char">I</span>
                <span class="char">F</span>
                <span class="char">E </span>
              </span>
            </h1>
            <h1 class="hero-text">
              <span class="word">
                <span class="char">O</span>
                <span class="char">F </span>
              </span>
              <span class="word">
                <span class="char">A</span>
                <span class="char">D</span>
                <span class="char">A</span>
                <span class="char">M </span>
              </span>
              <span class="word">
                <span class="char">G</span>
                <span class="char">O</span>
                <span class="char">U</span>
                <span class="char">G</span>
                <span class="char">H</span>
              </span>
            </h1>
          </div>
        </section>

        <section class="selected-work-section">
          <div class="selected-work-div">
            <div class="selected-work-wrapper">
              <div class="selected-work-colum w-row">
                <div class="column-1 w-col w-col-5 w-col-stack w-col-tiny-tiny-stack">
                  <div class="selected-work-heading-div">
                    <h5 class="heading-2">● Case Study 01</h5>
                  </div>
                </div>
                <div class="column-2 w-col w-col-7 w-col-stack w-col-tiny-tiny-stack">
                  <a></a>
                </div>
              </div>
            </div>
            <div class="selected-work-wrapper"></div>
            <div class="selected-work-wrapper"></div>
          </div>
        </section>

        <section class="about-container"></section>
        <section class="past-projects"></section>
        <section class="contact-section"></section>
        <div class="footer-container"></div>
      </body>
    </div>
  );
}

export default App;
