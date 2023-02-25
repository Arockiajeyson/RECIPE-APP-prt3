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
            return toast.error('please agree')
        }else{
            const send = await axios.post('http://localhost:3000/login',{email,password})
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
    <div>
        <h1>
            Email
        </h1>
        <input type="email" onChange={(e)=>setState({...state,email:e.target.value})}/>
        <h1>Password</h1>
        <input type="password" onChange={(e)=>setState({...state,password:e.target.value})}/>
        <div>
        <input type="radio" onChange={(e)=>setState({...state,rePass:false})}/> Remember Me
        </div>
        <div>
            <button onClick={handler}>Login</button>
        </div>
        <h4>need an Account? <span style={{color:'blue',cursor:'pointer'}} onClick={registerRe}>Register</span></h4>
    </div>
  )
}
