import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css'
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
      </div>
    </div>
  );
}

export default App;
