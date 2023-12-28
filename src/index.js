import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from './components/Sidenav';
import "rsuite/dist/rsuite.min.css";
import Test from './components/Test';
import Mainpage from './components/Mainpage';
import Firstpage from './components/Firstpage';
import Initial from './components/Initial';
import Student from './components/Student';
import Registeration from './components/Registeration';
function MainContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Mainpage' element={<Mainpage />} />
        <Route path='Sidenav' element={<Sidenav />} />
        <Route path='Test' element={<Test />} />
        <Route path='Firstpage' element={<Firstpage />} />
        <Route path='Initial' element={<Initial />} />
        <Route path='Registeration/:studentMail?' element={<Registeration />} />
        <Route path='Student/:studentMail?' element={<Student />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>
);