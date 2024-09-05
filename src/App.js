
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';

function App() {

  const [user, loading] = useAuthState(auth)
  return (



    
   <Router>


    {!user ? (
      <Login/>

    ) : (
      <>
       <Header/>
    <AppBody>
      <SideBar/>
    <Routes>
      <Route exact path='/' element={<Chat/>}/>
    </Routes>
    </AppBody>
      </>
    )}
   
   </Router>
  );
}

export default App;


const AppBody = styled.div`
display: flex;
height: 100vh;
`