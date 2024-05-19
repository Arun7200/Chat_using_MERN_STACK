import './App.css'
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';
import Home from './pages/home/home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </div>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: "1px solid #8AEAEE",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#292E38',
            padding: '10px 40px 10px 40px',
            color: '#8AEAEE',

          },
        }}
      />
    </>
  )
}

export default App;
