import './App.css'
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';
import Home from './pages/home/home.jsx';

function App() {

  return (
    <>
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        {/* <Signup /> */}
        <Home />
        {/* <Login /> */}
      </div>

    </>
  )
}

export default App;
