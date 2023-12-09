import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Mail from './components/Mail.js';
import EmailList from './components/EmailList.js';
import RenderComponent from './components/RenderComponent.js';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            {/* <Header />
            <Sidebar /> */}
      <Routes>
        <Route path='/' element={<RenderComponent />} />

        {/* <Route index element={<Sidebar />} /> */}

        {/* <div className='app_body'> */}

        {/* <Route path='*' element={<EmailList />} /> */}
        <Route path='/mail' element={<Mail />} />
        {/* </div> */}
      </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
