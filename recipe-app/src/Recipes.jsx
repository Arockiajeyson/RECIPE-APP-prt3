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
        const send =await axios.post('http://localhost:3000/posts/postingData',{Title,Img,Ingredients,Instructions,Author},{headers})
        if(send.data ==='created'){
            toast.success(send.data)
            nav('/home',{replace:false})
        }else{
            toast.error(send.data)
        }
    }
  return (
    <div>
        <h1>Create Recipe</h1>
        <h1>Title</h1>
        <input type="text" onChange={(e)=>setState({...state,Title:e.target.value})}/>
        <h1>Author</h1>
        <input type="text" onChange={(e)=>setState({...state,Author:e.target.value})}/>
        <h1>Img</h1>
        <FileBase64 onDone={(file)=>setState({...state,Img:file.base64})}/> 
        <h1>Ingredients</h1>
        <textarea  id="" cols="30" rows="5" onChange={(e)=>setState({...state,Ingredients:e.target.value})}></textarea>
        <h1>Instructions</h1>
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setState({...state,Instructions:e.target.value})}></textarea>
        <div>
            <button onClick={handler}>Upload</button>
        </div>
    </div>
  )
}
