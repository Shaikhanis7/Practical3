import React from 'react';
import {toggletheme}  from '../redux/ThemeAction'
import {useDispatch,useSelector}  from 'react-redux'
const Theme=()=>
{
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.theme)
    const style=
    {
        backgroundColor:theme,
        // width:'100%',
        // height:'100vh',
        // display:'flex',
        // alignItems:'center',
        // justifyContent:'center'
    }
    return(
        <div style={style}>
            <button style={{color:'gray',padding:'10px',cursor:'pointer',width:'120px'}}  onClick={()=>{dispatch(toggletheme())}}>Theme</button>
        </div>
    )

}

export default Theme;