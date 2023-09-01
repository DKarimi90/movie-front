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
const [showPassword, setShowPassword] = useState('')

useEffect(() => {
    fetch('https://movie-myk5.onrender.com/users')
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
    fetch('https://movie-myk5.onrender.com/users/signup', {
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
            throw new Error(data.errors[0])
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
        localStorage.setItem('name', data.name)
        localStorage.setItem('isLoggedIn', true)
        navigate('/movies')
    })
    .catch(err => {
        console.log(err)
        setError(err.message)
    })
}
    return (
        <div className="mx-auto h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative animate-form flex items-center pt-44">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[var(--primary)] sm:text-3xl">
              Get started today
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
              dolores deleniti inventore quaerat mollitia?
            </p>
            <form action className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleRegister}>
              <p className="text-center text-lg font-medium">Register for an account</p>
              <div>
                <label htmlFor="email" className="sr-only">Name</label>
                <div className="relative">
                  <input type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <input type="email" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input type={showPassword? 'text': 'password'} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                </div>
              </div>
              <div className='mt-4 w-full flex justify-center'>
                <label htmlFor="password">Show Password</label>
                <input className='ml-2' type='checkbox' checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
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