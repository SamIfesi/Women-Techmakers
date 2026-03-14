import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import About from './About.jsx';
import Iwd2026 from './Iwd2026.jsx';
import ContributorsPage from './Contributors.jsx';
import Teams from './Teams.jsx';
import Spotlight from './Spotlight.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Iwd2026" element={<Iwd2026 />} />
        <Route path="/Contributors" element={<ContributorsPage />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Spotlight" element={<Spotlight />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
