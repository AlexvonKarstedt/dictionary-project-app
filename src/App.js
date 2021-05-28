import './App.css';
import Dictionary from './Dictionary'
import ShecodesLogo from './ShecodesLogo.png' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <img src={ShecodesLogo} className="App-logo img-fluid"
        alt="Shecodes" />
       </div>
      </header>
      <br />
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small>
        Open source code by <a href="https://github.com/AlexvonKarstedt/dictionary-project-app" target="_">Alexandra von Karstedt</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
