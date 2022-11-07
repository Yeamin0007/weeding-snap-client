import './App.css';
import {RouterProvider } from 'react-router-dom';
import { routes } from './Components/Router/Routes/Routes';

function App() {
  
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
