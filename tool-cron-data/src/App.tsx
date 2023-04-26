import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ComponentsPage from 'pages/ComponentsPage';
import MainPage from 'pages/MainPage';
import SettingPage from 'pages/SettingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'antd/dist/reset.css';
import './index.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
          <Route path="/test-component" element={<ComponentsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
