import React, { useContext } from 'react';
import Home from './page/Home';
import About from './page/About';
import Contact from '../src/components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GunubirlikTurlar from './page/GunubirlikTurlar';
import YurtdışıTurlar from './page/YurtdışıTurlar';
import KonaklamalıTurlar from './page/KonaklamalıTurlar';
import AdminPanel from './page/AdminPanel';
import Login from './page/Login';
import { AuthContext } from './Context/AuthContext';



function App() {


  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Login />
    }

    return children;
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/gunubirlik-turlar/*" element={<GunubirlikTurlar />} />
          <Route path="/yurtdisi-turlar" element={<YurtdışıTurlar />} />
          <Route path="/konaklamali-turlar" element={<KonaklamalıTurlar />} />
          <Route path="/iletişim" element={<Contact />} />
          <Route path="/admin-panel/*" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
