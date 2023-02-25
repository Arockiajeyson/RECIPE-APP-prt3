import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'
export default function LoginReci() {
    const nav =useNavigate()
    const [state,setState] =useState({
        email:'',
        password:'',
        rePass:true
    })
    const registerRe =()=>{
        nav('/register',{replace:true})
    }
    const handler =async()=>{
        const {email,password,rePass} =state
        if(rePass){
            return toast.error('Remember Me')
        }else{
            const send = await axios.post('https://recip-backend-l4aj.onrender.com/login',{email,password})
            if(send.data == 'register first'){
                return toast.error(send.data)
            }else if(send.data[0] ==="logged-in"){
                toast.success(send.data[0])
                localStorage.setItem('token',send.data[1])
                nav('/home',{replace:true})
            }else{
                return toast.error(send.data)
            }
        }
    }
  return (
    <div className='apps'>
        <h1>
            Email
        </h1>
        <input type="email" onChange={(e)=>setState({...state,email:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}/>
        <h1>Password</h1>
        <input type="password" onChange={(e)=>setState({...state,password:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}/>
        <div style={{marginTop:'40px'}}>
        <input type="radio" onChange={(e)=>setState({...state,rePass:false})}/> Remember Me
        </div>
        <div>
            <button onClick={handler}  style={{width:'100%',height:'40px',marginTop:'20px'}}>Login</button>
        </div>
        <h4 style={{marginLeft:'140px'}}>need an Account? <span style={{color:'blue',cursor:'pointer'}} onClick={registerRe}>Register</span></h4>
    </div>
  )
}
