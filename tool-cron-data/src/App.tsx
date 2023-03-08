import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CronDataPage from 'pages/CronDataPage';
import MainPage from 'pages/MainPage';

import 'antd/dist/reset.css';
import './index.css';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <CronDataPage />,
  },
  {
    path: "/main-page",
    element: <MainPage />,
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
