import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const [state, setState] = useState([])
    const [filter,setFilter] =useState([])
    const [search ,setsearch] =useState('')
    const nav = useNavigate()
    useEffect(() => {
        const dat = async () => {
            const headers = { "Authorization": localStorage.getItem('token') }
            const res = await axios.get('https://recip-backend-l4aj.onrender.com/posts/getingDa', { headers })
            if(res.data ==='jwt must be provided'){
                nav('/')
            }else{
                setState(res.data)
            }
        }
        dat()
    }, [])
    const hand = () => {
        nav('/create',{replace:false})
    }
    useEffect(()=>{
        if(search !==''){
            const fil =state.filter((e)=>e.Title==search)
            setFilter(fil)
        }
    },[search])
    const redir =()=>{
        localStorage.clear()
        nav('/',{replace:true})
    }
    return (
        <div>
            <h3 onClick={redir} style={{color:'darkblue',cursor:'pointer',marginLeft:'30px',marginTop:'40px'}}>Click here to log Out</h3>
            <div className='inner'>
                <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder="Search by Full Title Name..." style={{fontSize:'30px'}}/>
                <div style={{marginTop:'50px'}} className='new'>
                    <button onClick={hand}>New!!!</button>
                </div>
                <h1 style={{marginLeft:'40px'}}>All Recipes</h1>
                {filter.length==0?<div className='flexes'>
                    {state.map((e, i) => {
                        return (
                            <div key={i} style={{position:'relative',marginTop:'20px'}}>
                                <a href={`/recip/${e._id}`}><img src={e.Img} />
                                 <p style={{textAlign:'center',position:'absolute',top:"200px",left:'200px',color:'whitesmoke',fontSize:'30px'}}>{e.Title}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>:<div className='flexes'>
                    {filter.map((e, i) => {
                        return (
                            <div key={i} style={{position:'relative'}}>
                                <a href={`/recip/${e._id}`} ><img  src={e.Img} />
                                <p style={{textAlign:'center',position:'absolute',top:"200px",left:'230px',color:'whitesmoke',fontSize:'30px'}}>{e.Title}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}
