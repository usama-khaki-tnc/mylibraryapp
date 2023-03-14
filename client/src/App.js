import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Routes>
            <Route path= "/" element = { <Home/> }> </Route>
            <Route path= "/login" element = { <Login/> }> </Route>
            <Route path= "/register" element = { <Register/> }> </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
