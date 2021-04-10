import './App.css';
import ApplicationHeader from "../ApplicationHeader/ApplicationHeader";
import Routes from "../../Routes";
import ApplicationFooter from "../ApplicationFooter/ApplicationFooter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApplicationHeader />
        <Routes />
        <ApplicationFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
