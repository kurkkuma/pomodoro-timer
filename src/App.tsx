import Info from "./components/Info";
import Navbar from "./components/Navbar";
import TomatoBranch from "./components/TomatoBranch";

function App() {
  return (
    <main>
      <Navbar />
      <div className="main-container">
        <TomatoBranch />
        <Info />
      </div>
    </main>
  );
}

export default App;
