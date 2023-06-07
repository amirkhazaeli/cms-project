import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css'
import {routes} from './Router'
function App() {
  let router = useRoutes(routes)
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
