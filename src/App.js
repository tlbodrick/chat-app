import { Routes, Route, Link } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        < Route path="/" element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />          </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <ToastContainer />

    </div>

  );
}

export default App;
