import { Button } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import { serverTimestamp } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

const ChatInput = ({channelName, channelId, chatRef}) => {
  const [user] = useAuthState(auth)

const [Input, setInput] = useState("")

    const sendMessage =(e)=>{
        e.preventDefault();

        if(!channelName){
          return false
        }

        // db.collection("rooms").doc(channelId).collection("messages").add({
        //   message: inputRef.current.value
        // })

        const messageCollectionRef = collection(db, "rooms", channelId, "messages")
        addDoc(messageCollectionRef, {
          message: Input,
          timestamp: serverTimestamp(),
          user:user.displayName,
          userImage:user.photoURL
        })

        chatRef?.current?.scrollIntoView({
          behaviour:"smooth"
        });

        setInput("")

    }
  return (
    <ChatInputContainer>
      <form action="">
        <input value={Input} onChange={(e) => setInput(e.target.value)} placeholder={`Message ${channelName}`}/>
        <Button hidden type='submit' onClick={sendMessage}>SEND</Button>

      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
  position: relative;
  display: flex;
  justify-content: center;
}

>form >input{
  position: fixed;
  bottom: 30px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 20px;
  outline: none;
}

>form >button{
  display: none;
}
`
