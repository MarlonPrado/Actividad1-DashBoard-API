import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {BiSearch} from 'react-icons/bi';
import  {SidebarData}  from './SidebarData';
import  SubMenu  from './SubMenu';

const Nav = styled.div`

background: #BC4749;;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;


`;


const NavIcon= styled(Link)`

margin-left: 2rem;
font-size: 2rem;
height: 4s0px;
display:flex;
justify-content:flex-start;
align-items: center;
`;


const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar})  =>( sidebar ?  '0' : '-100%') };
transition: 350ms;
z-index: 10;

`;



const SidebarWrap = styled.div`
  width: 100%;
`;
const  SidebarHamburguer = () =>{

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  
const Nav = styled.nav`
display:flex;
justify-content: space-between;
color: black;
margin-top: 25px;
margin-right: 2.5rem;

.title{
  h1{
    span{
        margin-left: 0.5rem;
        color: #010112;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
    }
  }
}

.search{
  background-color: #17B890;
  display: flex;
  align-items: left;
  gap: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  color: white;
  
  border-radius: 1rem;
  svg{
    color: #white
  }
  input{
    background-color: transparent;
    border:none;
    color: #white;
    font-family: "Times New Roman", cursive;
    letter-spacing: 0.3rem;
    &:: placeholder{
      color: #121212;
    }
    &:focus{
      outline: none;
    }
  }
}`;



  return (
    <>
      <Nav>
         <NavIcon to = "#">
          <FaIcons.FaBars onClick={showSidebar}/> 
        </NavIcon>
        
        <div className="search">
        <br/>
        <BiSearch/>
        <input type="text" placeholder='¿Que buscas?'/>
      </div>
      </Nav>
      
      <SidebarNav sidebar={sidebar} >
        <SidebarWrap>
        <NavIcon to = "#">
          <AiIcons.AiOutlineClose onClick={showSidebar}/> 
        </NavIcon>
        {SidebarData.map ( (item, index) =>{
            return <SubMenu item={item} key = {index} /> ;
                 })}
        </SidebarWrap>
      </SidebarNav>
      
    </>
  );
};

export default SidebarHamburguer
