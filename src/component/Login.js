import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

export default function Login(){
    let userDetail=JSON.parse(localStorage.getItem('userDetails'))
    const navigate=useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleEmail=(e)=>{
      setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
      setPassword(e.target.value)
    }
 
    const handleLogin=()=>{
        const matchDetails=userDetail.filter((x)=> x.email === email && x.password === password)
        if(matchDetails.length>0){
            alert('you are successfully logged in')
            navigate('/home')
        }else if(email==='' || password ===""){
            alert('fill input first')
        }else{
            alert('register first');
            navigate('/')
        }
    }

    return(
        <div className="wrapper">
            <h3>Login page</h3>
            <input type="text" placeholder="Email" onChange={handleEmail}/>
            <input type="password" placeholder="password" onChange={handlePassword}/>
            <input type="checkbox"/><p>Remember Me</p>
            <button onClick={handleLogin}>Login</button>
            <p>don't have an account</p>
            <Link to='/'>Signup</Link>
        </div>
    )
}