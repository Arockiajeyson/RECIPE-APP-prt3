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
            const res =await axios.post('http://localhost:3000/refister',{email,password})
            if(res.data =='email id is already there so please try with new one'){
                return toast.error(res.data)
            }else if(res.data =='register'){
                toast.success('register')
                nav('/',{replace:false})
                return
            }else{
                return toast.error(res.data)
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
            <h1>ReEnter-password</h1>
            <input type="password" onChange={(e)=>setState({...state,rePass:e.target.value})}/>
            <div>
            <input type="radio" onChange={()=>setState({...state,change:false})}/>Agree with condition
            </div>
            <div>
            <button onClick={handler}>Register</button>
            </div>
        </div>
    )
}
