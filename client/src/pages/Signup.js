import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'

function Signup() {
    const [formData,setFormData] = useState({})
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
      setFormData({
     ...formData,
        [e.target.id]: e.target.value
      })
    }

    const handleSubmit = async (e) =>{
      // console.log(formData)
      e.preventDefault()
      try{
        setLoading(true)
        setError(null)
        const res = await fetch('/auth/signup',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json()
        if(data.success === false){
          setLoading(false)
          return setError(data.message)
        }
        if(res.ok){
          navigate('/sign-in')
        }
      }
      catch(err){
        setError(err.message)
        setLoading(false)
      }
    }
    // console.log(error)
  return (
    <div className='min-h-screen '> 
      <div className=' flex flex-col md:flex-row p-3 mt-20 max-w-3xl mx-auto md:items-center gap-6'>
        {/* Left div */}
        <div className=' flex-1'>
        <Link to="/" className='text-4xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>Shivani's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
          This is demo project. You can sign up with your email and password or with Google
        </p>
        </div>
        {/* Right div */}
        <div className=' flex-1 '>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
            <Label value='Your Username'/>
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/> 
            </div>
            <div>
            <Label value='Your Email'/>
            <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/> 
            </div>
            <div>
            <Label value='Your Password'/>
            <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/> 
            </div>
            <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
              {
                  loading ? (<span><Spinner size='sm'/>Loading..</span>) : 'Sign Up'     
              }
            </Button>
          </form>
         <div className='flex gap-2 text-sm mt-5'>
          <span className=''>Have an Account?</span>
          <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
         </div>
         {
          error && (
            <Alert color='failure'>{error}</Alert>
          )
         }
        </div>
      </div>
    </div>
  )
}

export default Signup