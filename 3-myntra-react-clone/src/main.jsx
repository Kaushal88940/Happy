import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Bag from "./components/Bag.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/Home.jsx'
import { Provider } from "react-redux";
import myntraStore from './store/index.js'
import OrderPage from './components/orderPage.jsx'
import ProfilePage from './components/Profile.jsx'
import SignIn from './components/signIn.jsx'
import SignUp from './components/signUp.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import MenSection from './routes/MenSection.jsx'
import WomenSection from './routes/WomenSection.jsx'
import ElectronicsSection from './routes/ElectronicsSection.jsx'
import ItemDetailsSection from './routes/ItemsDetailsSection.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/placeOrder",
        element: <OrderPage/>,
      },
      {
        path: "/profile",
        element:<ProfilePage/>,
      },
      {
        path: "/signin",
        element:<SignIn/>,
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
      {
        path: "/adminPanel",
        element: <AdminPanel/>
      },
      {
        path: "/menSection",
        element: <MenSection/>
      },
      {
        path: "/WomenSection",
        element: <WomenSection/>
      },
      {
        path: "/electronics",
        element: <ElectronicsSection/>
      },
      {
        path: "/item-details",
        element: <ItemDetailsSection/>
      }
    ],
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
