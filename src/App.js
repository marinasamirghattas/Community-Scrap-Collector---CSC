import React from 'react';
import './App.css';
import Home from './views/home/Home';
import Privacy from './views/privacy/Privacy';
import About from './views/about/About';
import ContactUs from './views/contactus/ContactUs'
import Dashboard from './views/Dashboard';
import Icons from './views/Icons';
import Notifications from './views/Notifications';
function App() {
  return (
    <>

      <Home />
      <ContactUs />
      <About />
      <Privacy />


    </>
  );
}

export default App;