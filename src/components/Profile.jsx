import React from "react";
import styled from "styled-components";
import image from "../assets/ProfilePicture.png";
import {CgProfile} from "react-icons/cg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Marlon Stiven</h2>
        <h5>
          <CgProfile /> Auxiliar de Ventas
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Ultima Conexion</h5>
          <h3>ayer</h3>
        </div>
        <div className="container">
          <h5>Compras Hechas</h5>
          <h3>427</h3>
        </div>
        <div className="container">
          <h5>Ventas Hechas</h5>
          <h3>760</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    margin-top: 0.43rem;
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      padding-top: 0.8rem;

      width: 100%;
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;