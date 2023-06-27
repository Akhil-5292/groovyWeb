import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { emailValidations, passwordValidations, userValidations } from "../Helper/Validation";

function Signup(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[user,setUser]=useState('')
    const[emailError,setEmailError]=useState('')
    const[passwordError,setPasswordError]=useState('')
    const[userError,setUserError]=useState('')
    const[userDetail,setUserDetail]=useState([])
    const[dob,setDob]=useState('')

    useEffect(()=>{
    if(localStorage.getItem('userDetails')){
        let data=JSON.parse(localStorage.getItem('userDetails'));
        setUserDetail(data)
    }
    },[])

    const validateEmail=(e)=>{
        setEmail(e.target.value)
        const Validated = emailValidations(email)
        setEmailError(Validated)
    }
    const validatePassword=(e)=>{
        setPassword(e.target.value)
        setConfirmPassword(e.target.value)
        const Validated = passwordValidations(password)
        setPasswordError(Validated)
    }
    const validateUser=(e)=>{
        setUser(e.target.value)
        const Validated = userValidations(user)
        setUserError(Validated)
    }

    const handleDate=(e)=>{
        setDob(e.target.value)
    }


    const storeDetails=()=>{
        if(
        emailError === 'true' &&
        passwordError === 'true' && 
        userError === 'true' &&
        password === confirmPassword){
            const obj={
                name: user,
                password: password,
                email: email,
                dob: dob
            }
            userDetail.push(obj)
            localStorage.setItem('userDetails', JSON.stringify(userDetail))
            alert('successful')
        }else{
            alert('Enter Correct Details')
        }
    }
    return(
        <div className="wrapper">
          <input placeholder="UserName" onChange={validateUser} type="text"/>  
          <p>{userError}</p>
          <input placeholder="Email" onChange={validateEmail} type="email"/>  
          <p>{emailError}</p>
          <input placeholder="Dob" onChange={handleDate} type="date"/><br/>
          <input placeholder="Password" onChange={validatePassword} type="password"/> 
          <p>{passwordError}</p> 
          <input placeholder="Confirm Password" onChange={validatePassword} type='password'/>   
          <button onClick={storeDetails}>Signup</button>
          <Link to='/login'>Login</Link>
        </div>
    )
}
export default Signup;