import Navbar from "./Views/Navbar";
import Main from "./Routes";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
