import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import{BrowserRouter,Route,Router,Routes} from 'react-router-dom'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/signin' element={<Registration/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
