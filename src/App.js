import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home />
        },
        {
          path: 'orders',
          element: <Orders />
        },
        {
          path: 'grandpa',
          element: <Grandpa />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
