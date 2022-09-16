import React from 'react'
import styled from "styled-components";
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import SidebarHamburguer from './components/SidebarHamburguer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <SidebarHamburguer/>
      <Dashboard/>
    </Router>
  )
}

const Div = styled.div``; 