import React, { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/admin-panel');
        console.log(auth.currentUser)
      } catch (error) {
        setError(true)
      }

    }

  return (
    <div className='login-container'>
        <div className="login-box">
            <div className="login-box-header">
                <img src="https://i.hizliresim.com/hkwums8.png" alt="" />
                <h1>Giriş</h1>
            </div>

            <div className="login-box-body">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" id='email' />
                    <input type="password" placeholder="Şifre" id='password' />
                    <button>Giriş Yap</button>
                    {error && <p className='error'>Email veya şifre hatalı</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login