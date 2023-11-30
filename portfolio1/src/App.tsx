import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import MyAvatar from './components/MyAvatar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <MyAvatar />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
