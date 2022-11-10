import './App.css';
import {RouterProvider } from 'react-router-dom';
import { routes } from './Components/Router/Routes/Routes';

function App() {
  
  return (
    <div className='App'>
      <RouterProvider  router={routes}></RouterProvider>
    </div>
  );
}

export default App;
