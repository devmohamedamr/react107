import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
        <Outlet />
    </>
  );
}

export default App;
