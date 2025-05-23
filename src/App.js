import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout/MainLayout';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ContactPage from './pages/contactPage/ContactPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
