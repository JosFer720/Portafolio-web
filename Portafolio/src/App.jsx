import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
