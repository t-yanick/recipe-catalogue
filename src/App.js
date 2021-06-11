import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
