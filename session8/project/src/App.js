import logo from './logo.svg';
import './App.css';
import {Outlet,Link} from 'react-router-dom'
function App() {

  return (
    <>
        <h1>app component</h1>
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>


        <Outlet />
    </>
  );
}

export default App;
