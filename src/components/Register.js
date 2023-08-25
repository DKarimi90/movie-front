import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = ( {setIsLoggedIn} ) => {
const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    password: ''
})
const navigate = useNavigate()
const [users, setUsers] = useState([])
const [error, setError] = useState(null)

useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => {
        if(res.ok) {
            return res.json()
       }  
    })
    .then(data => {
      console.log(data)
      setUsers(data)
    })
}, [])

const handleRegister = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users/signup', {
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        else {
          return res.json().then(data => {
            throw new Error(data.errors[1])
          })
        }
    })
    .then(data => {
        console.log(data)
        setUsers([...users, data])
        setFormData({
            name: '', 
            email: '', 
            password: ''
        })
        setIsLoggedIn(true)
        navigate('/movies')
    })
    .catch(err => {
        console.log(err)
        setError(err.message)
    })
}
    return (
        <div className="mx-auto h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative animate-form flex items-center">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[var(--primary)] sm:text-3xl">
              Get started today
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
              dolores deleniti inventore quaerat mollitia?
            </p>
            <form action className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleRegister}>
              <p className="text-center text-lg font-medium">Sign up for an account</p>
              <div>
                <label htmlFor="email" className="sr-only">Name</label>
                <div className="relative">
                  <input type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                </div>
              </div>
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
                  <input type="password" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
              <button type="submit" className="btn">
                Register
              </button>
              <div className='flex justify-center text-[var(--danger)] my-8'>{error && <div>{error}</div>}</div>
              </div>
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <Link to="/login" className="underline ml-2">Login In</Link>
              </p>
            </form>
          </div>
        </div>
      )
}

export default Register