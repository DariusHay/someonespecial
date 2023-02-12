import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Navbar from './component/Navbar'
import './App.css';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Navbar/>
      <Home />
    </Router>
  );
}

export default App;
