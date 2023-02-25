import React, { createContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Tos =createContext()
export  function Tostss({children}) {
  return (
    <div>
        <Tos.Provider value={{toast}}>
            <Toaster 
            position='top-center'
            reverseOrder={false}
            gutter={8}
            containerClassName=''
            containerStyle={{}}
            toastOptions= {{
                className:'',
                duration:5000,
                style:{
                    background:'#363636',
                    color:'#fff',
                },
                success:{
                    duration:5000,
                    theme:{
                        primary:'green',
                        secondary:'black'
                    }
                }
            }}
            />
        </Tos.Provider>
        {children}
    </div>
  )
}
export default Tos