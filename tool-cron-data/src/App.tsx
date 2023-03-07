import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CronDataPage from './page/CronDataPage';
import MainPage from '@page/MainPage';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <CronDataPage />,
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
