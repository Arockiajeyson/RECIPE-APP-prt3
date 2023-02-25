import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Particular() {
    const [state, setState] = useState([])
    const [state2,setState2] =useState('')
    const par =useParams()
    const nav =useNavigate()
    useEffect(() => {
        const dat = async () => {
            const headers = { "Authorization": localStorage.getItem('token') }
            const res = await axios.get('http://localhost:3000/posts/getingDa', { headers })
            const fil = res.data.filter((e)=>par.id ===e._id)
            setState(fil)
            console.log(res.data)
        }
        dat()
    }, [])
    const handler =(e)=>{
        setState2(e)
    }
    const redir =()=>{
        nav('/home',{replace:false})
    }
  return (
    <div className='separee'>
        <h3 onClick={redir} style={{color:'blue',cursor:'pointer',marginLeft:0}}>Click Logo to Reach Home page</h3>
        {
            state.map((e,i)=>{
                return(
                    <div style={{display:'flex'}}>
                        <img src={e.Img} alt="" />
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <button style={{marginLeft:'100px',width:'200px',height:'50px'}} onClick={()=>handler(e.Ingredients)}>Ingredients</button>
                            <button style={{marginLeft:'100px',marginTop:'40px',width:'200px',height:'50px'}} onClick={()=>handler(e.Instructions)}>Instructions</button>
                        </div>
                    </div>
                )
            })
        }
        <h1>you can see Ingredients or Instructions here if you click anyone of the button</h1>
        <div>
            {state2}
        </div>
    </div>
  )
}
