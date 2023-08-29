import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    fetch('http://localhost:3000/login', {
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
                  <input type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input type={showPassword? 'text': 'password'} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
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