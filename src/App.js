import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css'
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Categories />
      </Router>
    </div>
  );
}

export default App;
