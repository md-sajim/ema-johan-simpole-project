import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './componant/About/About';
import Invantory from './componant/Invantory/Invantory';
import Order from './componant/Order/Order';
import Shop from './componant/Shop/Shop';
import Main from './layout/Main';
import { productAndcard } from './lodar/productAndCard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader:()=>fetch("products.json"),
          element:<Shop></Shop>

        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:'invantory',
          element:<Invantory></Invantory>
        },
        {
          path:"order",
          loader:productAndcard,
          element:<Order></Order>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
