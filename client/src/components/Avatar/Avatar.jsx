//import { Cursor } from 'mongoose'
import React from 'react'

const Avatar = ({children, backgroundColor,
  color,borderRadius,fontSize, Cursor}) => {
   
   const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || 'black',
    borderRadius,
    fontSize,
    textAlign:"center",
    Cursor:Cursor || null,
    textDecoration: "none"
   }
    return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Avatar
