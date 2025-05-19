import "./App.css";
import "./reset.css";

function App() {
  return (
    <body>
      <div className="App">
        <nav className="App-navbar">
          <div className="navbar-left">
            <img src="/CrassTechLogoNoWords.png" alt="Logo" id="small_logo" />
          </div>
          <div className="navbar-right">
            <a href="App.js">Thing one</a>
            <a href="App.js">Thing two</a>
            <a href="App.js">Thing three</a>
            <a href="App.js">Thing four</a>
          </div>
        </nav>
        <header className="App-header">
          <img src="/CrassTechLogo3.png" alt="Logo" id="big_logo" />
        </header>
        <main className="App-main">
          <div></div>
        </main>
      </div>
    </body>
  );
}

export default App;
