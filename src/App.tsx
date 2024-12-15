import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { NewComplaint } from './pages/NewComplaint';
import { ComplaintSuccess } from './pages/ComplaintSuccess';
import { TrackComplaint } from './pages/TrackComplaint';
import { ComplaintDetails } from './pages/ComplaintDetails';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-complaint" element={<NewComplaint />} />
            <Route path="/complaint-success/:id" element={<ComplaintSuccess />} />
            <Route path="/track-complaint" element={<TrackComplaint />} />
            <Route path="/track-complaint/:id" element={<ComplaintDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;