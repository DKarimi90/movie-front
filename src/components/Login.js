import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ( {setIsLoggedIn} ) => {
const [formData, setFormData]= useState({
    email: '', 
    password: ''
})
const navigate = useNavigate()
const [error, setError] = useState(false)
const [showPassword, setShowPassword] = useState('')

const handleLogin = (e) => {
    e.preventDefault()
    fetch('https://movie-myk5.onrender.com/login', {
        method: "POST", 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        else {
            throw new Error("Invalid Email or Password")
        }
    })
    .then(data => {
        console.log(data)
        setFormData({
            email: '', 
            password: ''  
        })
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('name', data.name)
        toast.success('Successful Logged In!', {
          position: 'top-right',
          autoClose: 3000,
        });
        navigate('/movies')
    })
    .catch(err => {
        console.log(err)
        setError(err.message)
    })
}
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative animate-form flex items-center">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[var(--primary)] sm:text-3xl">
              Welcome Back!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
              dolores deleniti inventore quaerat mollitia?
            </p>
            <form action className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleLogin}>
              <p className="text-center text-lg font-medium">Sign in to your account</p>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <input type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input type={showPassword? 'text': 'password'} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
                </div>
              </div>
              <div className='mt-4 w-full flex justify-center'>
                <label htmlFor="password">Show Password</label>
                <input className='ml-2' type='checkbox' checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
              </div>
              <button type="submit" className="btn" >
                Login in
              </button>
              <div className='w-full flex justify-center text-[var(--danger)]'>
                {error && <div>{error}</div>}
              </div>
              <p className="text-center text-sm text-gray-500">
                No account?
                <Link to="/register" className="underline ml-2">Register</Link>
              </p>
            </form>
          </div>
        </div>
      )
}

export default Login