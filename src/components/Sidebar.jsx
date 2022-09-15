import React, {useEffect, useState} from 'react'
import styled from 'styled-components';


import { FiLogOut } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { BsArchiveFill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
    <Section>
    <div className="top">
      <div className="brand">
        <BsBuilding/>
        <span>Tiendas Bam Bam</span>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li   className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}>
            <a href="#">
              <GiShop/>
              <span>Pagina Principal</span>
            </a>
            </li>
            <li   className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}>
            <a href="#">
              <BsArchiveFill/>
              <span>Inventario</span>
            </a>
            </li>
            <li   className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}>
            <a href="#">
              <RiBillFill/>
              <span>Facturacion</span>
            </a>
            </li>
            <li   className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}>
            <a href="#">
              <BsBarChartFill/>
              <span>Reportes</span>
            </a>
            </li>
            <li   className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}>
            <a href="#">
              <BsFillCartFill/>
              <span>Pedidos</span>
            </a>
            </li>
            <li   className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}>
            <a href="#">
              <BsFillPersonBadgeFill/>
              <span>Mi Perfil</span>
            </a>
            </li>
        </ul>
      </div>
    </div>
    <div className="logout">
      <a href="#">
        <FiLogOut/>
        <span className="logout">Cerrar sesion</span>
        </a>

    </div>
    </Section>
    </>
  )
}

const Section = styled.section`
position: fixed;
left: 0;
background-color: #386641;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;
 .top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  .toggle {
    display: none;
  }
  .brand {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    svg {
      color: #A7C957;
      font-size: 2rem;
    }
    span {
      font-size: 2rem;
      color: #A7C957;
      font-family: "Permanent Marker", cursive;
    }
  }
  .links {
    display: flex;
    justify-content: center;
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #A7C957;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #A7C957;
        a {
          color: black;
        }
      }
    }
  }
}

.logout {
  padding: 0.3rem 1rem;
  border-radius: 0.6rem;
  &:hover {
    background-color: #BC4749;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
  }
}


`;
