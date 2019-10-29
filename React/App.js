import React,{useEffect,useState} from 'react';
import axios from 'axios'
const App=()=>{
    const [item,setitem]=useState([]);
    useEffect(()=>{
    axios.get("http://localhost:3000/contacts").then(result=>{
    console.log(result)
    setitem(result.data[0].Name)
    // setitem(JSON.stringify(data))****error****
})
    })

    return(
        <div><h1>Hi Guvi</h1>
        <div>{item}</div></div>
    )
}
export default App;