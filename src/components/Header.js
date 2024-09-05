import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {

  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      {/* Headerleft */}
      <HeaderLeft>
        <HeaderAvatar onClick={()=> auth.signOut()} alt = {user?.displayName} src={user?.photoURL} />
        <AccessTime />
      </HeaderLeft>

      {/* HeaderSearch */}

      <HeaderSearch>
        <Search />
        <input type="search" placeholder="Search Sanoj'S Space" />
      </HeaderSearch>

      {/* HeaderRight */}

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
