import React from 'react';
import NavPanel from './components/NavPanel.js'
import FirstPage from './components/FirstPage.js'
import Technologies from './components/Technologies.js'

import AboutMe from './components/AboutMe.js'
import ProjectsSector from './components/ProjectsSector.js'

import './css/App.css';

function App(){  
        
  return (
    <div className="App" id="mainPagesFlow">
      <NavPanel />      
      <FirstPage />   
      <AboutMe />    
      <Technologies />         
      <ProjectsSector />      
       
    </div>

  );
  
}

export default App;
