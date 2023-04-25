import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ComponentsPage from 'pages/ComponentsPage';
import MainPage from 'pages/MainPage';

import 'antd/dist/reset.css';
import './index.css';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/test-component",
    element: <ComponentsPage/>
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
