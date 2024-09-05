import React from 'react'
import styled from 'styled-components'

const Message = ({message, timestamp, user, userImage}) => {

    const { seconds, nanoseconds } = timestamp || {};

    const date = seconds ? new Date(seconds * 1000 + (nanoseconds || 0) / 1000000) : null;

    const formattedTimestamp = date ? new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(date) : '';

  return (
    <MessageContainer>
      <img src={userImage} alt=""/>
      <MessageInfo>
        <h4>
            {user}{' '}
            <span>{formattedTimestamp}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
      
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;

>img{
    height: 50px;
    border-radius: 8px;
}
`
const MessageInfo = styled.div`

padding-left: 10px;

> h4 > span {
    color: gray;
    font-weight: 300;
    margin-left:4px;
    font-size: 10px;
}

`
