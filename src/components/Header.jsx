import React, { useEffect } from 'react'

const Header = ({app}) => {
    useEffect(()=>{
        console.log('Header rendered for the first time');
    },[])
  return (
    <div style={{padding:'16px' ,background:'#282c34',color:'white'}}>{app}</div>
  )
}

export default Header