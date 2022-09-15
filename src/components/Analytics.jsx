import React from "react";
import styled from "styled-components";
import {cardStyle} from "./ReusableStyles";
import {BsPeopleFill} from 'react-icons/bs';
import {BsFillBagPlusFill} from 'react-icons/bs';
import {BsFileArrowDownFill} from 'react-icons/bs';
import {BsFillCartCheckFill} from 'react-icons/bs';
export default function Analytics() {
  return  <Section>
    <div className="analytic">
      <div className="content">
        <h5>Ventas</h5>
        <h2>118</h2>
      </div>
      <div className="logo">
        <BsFillCartCheckFill/>

      </div>
    </div>
    <div className="analytic2">
      
       
        <div className="logo">
        <BsFillBagPlusFill/>
        
      </div>
      <div className="content">
        <h5>Compras</h5>
        <h2>57</h2>
        </div>
    </div>
    <div className="analytic3">
      <div className="content">
      <h5>Nuevos Clientes</h5>
        <h2>67</h2>
        </div>
        <div className="logo">
        <BsPeopleFill/>
        
      </div>
    </div>
    <div className="analytic4">
      <div className="logo">
        <BsFileArrowDownFill/>
        </div>
        <div className="content">
        <h5>Devoluciones</h5>
        <h2>48</h2>
          
        
      </div>
    </div>
  </Section>;
  
}

const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 1rem;
.analytic{
  ${cardStyle};
  padding: 1rem;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover{
      background-color: #A7C957;
      color:black;
      svg{
        color: white;
      }
  }
  .logo{
    background-color: black;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-size: 1.5rem;
  }

}


.analytic2{
  ${cardStyle};
  padding: 1rem;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover{
      background-color: #bc4749;
      color:white;
      svg{
        color: white;
      }
  }
  .logo{
    background-color: black;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-size: 1.5rem;
  }

}



.analytic3{
  ${cardStyle};
  padding: 1rem;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover{
      background-color: #34a0a4;
      color:white;
      svg{
        color: white;
      }
  }
  .logo{
    background-color: black;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-size: 1.5rem;
  }

}


.analytic4{
  ${cardStyle};
  padding: 1rem;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover{
      background-color: #3c1642;
      color:white;
      svg{
        color: white;
      }
  }
  .logo{
    background-color: black;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-size: 1.5rem;
  }

}



`;