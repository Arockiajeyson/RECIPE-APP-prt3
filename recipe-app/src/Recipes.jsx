import axios from 'axios'
import React, { useState } from 'react'
import  FileBase64 from 'react-file-base64'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function Recipes() {
    const nav =useNavigate()
    const [state,setState] =useState({
        Title:'',
        Author:'',
        Img:'',
        Ingredients:'',
        Instructions:''
    })
    const handler =async()=>{
        const headers ={"Authorization":localStorage.getItem('token')}
        const {Title,Img,Ingredients,Instructions,Author} =state
        const send =await axios.post('https://recip-backend-l4aj.onrender.com/posts/postingData',{Title,Img,Ingredients,Instructions,Author},{headers})
        if(send.data ==='created'){
            toast.success(send.data)
            nav('/home',{replace:true})
        }else{
            toast.error(send.data)
        }
    }
  return (
    <div className='appss'>
        <h1>Create Recipe :</h1>
        <h1>Title :</h1>
        <input type="text" onChange={(e)=>setState({...state,Title:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}/>
        <h1>Author :</h1>
        <input type="text" onChange={(e)=>setState({...state,Author:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}/>
        <h1>Img :</h1>
        <FileBase64 onDone={(file)=>setState({...state,Img:file.base64})}/> 
        <h1>Ingredients :</h1>
        <textarea  id="" cols="30" rows="5" onChange={(e)=>setState({...state,Ingredients:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}></textarea>
        <h1>Instructions :</h1>
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setState({...state,Instructions:e.target.value})} style={{width:'100%',height:'30px',borderRadius:'10px'}}></textarea>
        <div>
            <button onClick={handler} style={{width:'100%',height:'40px',marginTop:'20px'}}>Upload</button>
        </div>
    </div>
  )
}
