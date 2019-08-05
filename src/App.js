import React, { useEffect } from 'react';
import NavPanel from './components/NavPanel.js'
import FirstPage from './components/FirstPage.js'
import Technologies from './components/Technologies.js'

import AboutMe from './components/AboutMe.js'
import ProjectsSector from './components/ProjectsSector.js'

import './css/App.css';

class App extends React.Component{  
  constructor(props, context) { 
    super(props, context); 
      
  } 
    

  render(){ 
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
}

export default App;
