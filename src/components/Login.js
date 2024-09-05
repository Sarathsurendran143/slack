import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

    const SignIn = (e) => {
        e.preventDefault();

        signInWithPopup(auth,provider).then((result)=>{
            const user = result.user
            console.log(user)
        }).catch((error)=>{
            alert(error.mesage)
        })
        
        

        console.log(auth)
    };


  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWrLGI2bnF-gZZd_eGj-AM0q_oqMceDOlhg&s' alt=""/>
        <h1>Sign In to Sanoj'S Space</h1>
        <p>sanoj.slack.com</p>
        <Button type="submit" onClick={SignIn}> Sign In With Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer  = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`

const LoginInnerContainer  = styled.div`

padding: 100px;
text-align: center;
border-radius: 10px;
background-color: white;
>img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}

>button{
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}
`
