import React, { useContext } from 'react'
import { useState } from 'react'
import Tos from './Tostss'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function RegisterRec() {
    const nav =useNavigate()
    const [state,setState] =useState({
        email:'',
        password:'',
        rePass:'',
        change:true
    })
    const handler =async()=>{

        const {email,password,rePass,change} =state
        if(change){
            return toast.error('please agree')
        }
        if(password !==rePass){
            return toast.error('ReEnter-password and Password must be same')
        }else{
            const res =await axios.post('https://recip-backend-l4aj.onrender.com/refister',{email,password})
            if(res.data =='email id is already there so please try with new one'){
                return toast.error(res.data)
            }else if(res.data =='register'){
                toast.success('register')
                nav('/',{replace:true})
                return
            }else{
                return toast.error(res.data)
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
            <h1>ReEnter-password</h1>
            <input type="password" onChange={(e)=>setState({...state,rePass:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}/>
            <div style={{marginTop:'40px'}}>
            <input type="radio" onChange={()=>setState({...state,change:false})}/>Agree with condition
            </div>
            <div>
            <button onClick={handler} style={{width:'100%',height:'40px',marginTop:'20px'}}>Register</button>
            </div>
        </div>
    )
}
