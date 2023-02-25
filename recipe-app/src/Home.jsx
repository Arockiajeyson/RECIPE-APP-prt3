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
            const res = await axios.get('http://localhost:3000/posts/getingDa', { headers })
            setState(res.data)
            console.log(res.data)
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
            <h3 onClick={redir} style={{color:'blue',cursor:'pointer',marginLeft:0}}>Click Logo to log Out</h3>
            <div className='inner'>
                <input type="text" onChange={(e)=>setsearch(e.target.value)}/>
                <div style={{marginTop:'50px'}} className='new'>
                    <button onClick={hand}>New!!!</button>
                </div>
                {filter.length==0?<div className='flexes'>
                    {state.map((e, i) => {
                        return (
                            <div key={i}>
                                <a href={`/recip/${e._id}`}><img src={e.Img} /></a>
                            </div>
                        )
                    })}
                </div>:<div className='flexes'>
                    {filter.map((e, i) => {
                        return (
                            <div key={i}>
                                <a href={`/recip/${e._id}`}><img src={e.Img} /></a>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}
