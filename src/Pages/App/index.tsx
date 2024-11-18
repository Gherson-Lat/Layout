import { useRoutes,BrowserRouter } from 'react-router-dom';

import Home from '../Home/'
import MyAccount from '../MyAccount/'
import MyOrder from '../MyOrder/'
import MyOrders from '../MyOrders/'
import NotFound from '../NotFound/'
import Signin from '../Signin/'

import Navbar from '../../Components/Navbar';

import './App.css'

const AppRoutes = () => {

  let routes = useRoutes ( [ 

     { path: '/', element: <Navbar /> },
     { path: '/home', element: <Home /> },
     { path: '/my-account', element: <MyAccount /> },
     { path: '/my-order', element: <MyOrder /> },
     { path: '/my-orders', element: <MyOrders /> },
     { path: '/not-found', element: <NotFound /> },
     { path: '/Signin', element: <Signin /> },

] )
  
 return routes;

}
const App = () => {
  
  return (
    
      <div className='bg-blue-100'>
 
        <BrowserRouter>
             <AppRoutes />
             <Navbar/>
        </BrowserRouter>
      
      </div> 
      
  )
}

export default App


