import React from 'react'
import styled from 'styled-components'
import { FiberManualRecord, Create, InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add } from "@mui/icons-material";
import SidebarOption from './SidebarOption';
import { db } from '../firebase'
import {  collection } from 'firebase/firestore'
import {useCollection} from 'react-firebase-hooks/firestore'


const SideBar = () => {
    const [channels, loading, error] = useCollection(collection(db, "rooms"))
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>SANOJ'S SPACE</h2>
                <h3><FiberManualRecord/>
                Sanoj S
                </h3>
            </SidebarInfo>
            <Create/>

        </SidebarHeader>

        <SidebarOption Icon ={InsertComment} title="Threads"/>
        <SidebarOption Icon ={Inbox} title="Mentions & Reactions"/>
        <SidebarOption Icon ={Drafts} title="Saved Items"/>
        <SidebarOption Icon ={BookmarkBorder} title="Channel Browser"/>
        <SidebarOption Icon ={PeopleAlt} title="People & User groups"/>
        <SidebarOption Icon ={Apps} title="Apps"/>
        <SidebarOption Icon ={FileCopy} title="File Browser"/>
        <SidebarOption Icon ={ExpandLess} title="Show less"/>
        <hr/>
        <SidebarOption Icon ={ExpandMore} title="Channels"/>
        <hr/>
        <SidebarOption Icon ={Add} addChannelOption title="Add Channels"/>

        {channels?.docs.map((doc)=>(
            <SidebarOption key={doc.id} id={doc.id}  title={doc.data().name}/>
        ))}
     
    </SidebarContainer>
  )
}

export default SideBar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
color: white;
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;

> hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
}
`

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root{
    background-color: white;
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    border-radius: 999px;
}
`

const SidebarInfo = styled.div`
flex: 1;

> h2 {
    display: flex;
     font-size: 15px;
     font-weight: 900;
     margin-bottom: 5px;
}

> h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}  

> h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-right: 2px;
    margin-top: 1px;
}

`
