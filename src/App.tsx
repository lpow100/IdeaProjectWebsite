import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './Home.tsx';
import AboutMe from './AboutMe.tsx';
import Navbar from './Navbar.tsx';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { KoFiWidget } from 'react-kofi';
import MyIdeaProject from './MyIdeaProject.tsx';
import Methodology from './Methodology.tsx';
import Conclusion from './Conclusion.tsx';
import DataAnalysisDelivery from './DataAnalysisDelivery.tsx';
import Recommendations from './Recommendations.tsx';

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return (
    <>
      <h1>References</h1>
      <p><a href="https://docs.google.com/document/d/1hdMpcm2mGx8FIpmJ-gWIkxwAGlu0i0PpcxJDcbcJEVE">Works Cited</a><br/>
      -<br/>
      <a href="https://docs.google.com/document/d/1yBJJFLYm_ND2DjxY9jA_zGQ3HampDvQCqR_iopFoDCw">Annotated Bibliography</a>
      </p>
      <h1>Contact</h1>
      <p>You can contact me at lpowyt3@gmail.com for any inquiries, please do not email me if you do not have anything important</p>
    </>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
      {/* Navigation */}
      { Navbar() }

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/extras" element={<Contact />} />
        <Route path="/my-idea-project" element={<MyIdeaProject />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/data-analysis-delivery" element={<DataAnalysisDelivery />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
    <KoFiWidget
        user="trinary" // Replace with your username
        id="trinary" // Replace with your username
        color="#794bc4"
        label="Support Me"
      />
    </>
  )
}

export default App
