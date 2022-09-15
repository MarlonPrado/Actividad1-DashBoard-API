import React from 'react'
import styled from 'styled-components';
import {BiSearch} from 'react-icons/bi';
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4> Hola Edinson, que tengas un excelente dia </h4>
        <h1>Bienvenido a <span>Justo y Bueno - Plataforma Principal</span></h1>
      </div>
      <div className="search">
        <BiSearch/>
        <input type="text" placeholder='¿Que buscas?'/>
      </div>
    </Nav>
  );
}



const Nav = styled.nav`
display:flex;
justify-content: space-between;
color: black;
.title{
  h1{
    span{
        margin-left: 0.5rem;
        color: #BC4749;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
    }
  }
}

.search{
  background-color: #A7C957;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 8rem 1rem 1rem;
  border-radius: 1rem;
  svg{
    color: #BC4749
  }
  input{
    background-color: transparent;
    border:none;
    color: #BC4749;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
    &:: placeholder{
      color: #121212;
    }
    &:focus{
      outline: none;
    }
  }
}`;
