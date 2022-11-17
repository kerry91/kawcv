import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import Skills from './components/pages/Skills'
import Experience from './components/pages/Experience'
import Education from './components/pages/Education'
import Portfolio from './components/pages/Portfolio'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Education" element={<Education />} />
        <Route path="Portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
