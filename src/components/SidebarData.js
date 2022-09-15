import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FiLogOut } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import {BsShopWindow} from "react-icons/bs";
import {MdOutlineStoreMallDirectory} from "react-icons/md";
import {MdInventory2} from "react-icons/md";
import {BsBagPlusFill} from "react-icons/bs";
import {BsBagFill} from "react-icons/bs";
import {MdOutlineStoreMallDirectory} from "react-icons/md";




import { BsArchiveFill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";


export const sidebarData= [
{
    title: 'Pagina Principal',
    path: '/inicio',
    icon: <GiShop/>,
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
    subNav: [
        {
            title: 'Surcursal Principal',
            path: '/inicio/principal',
            icon: <BsShopWindow/>,
        },
        {
            title: 'Surcursal Avenida 0',
            path: '/inicio/secundario',
            icon: <MdOutlineStoreMallDirectory/>,
        },
    ]

},

{
    title: 'Inventario',
    path: '/inventario',
    icon: <MdInventory2/>,
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
    subNav: [
        {
            title: 'Ver Inventario',
            path: '/inventario/visualizar',
            icon: <BsBagFill/>,
        },
        {
            title: 'Agregar Inventario',
            path: '/inventario/agregar',
            icon: <BsBagPlusFill/>,
        },
        {
            title: 'Ajustar Inventario',
            path: '/inventario/ajuste',
            icon: <MdOutlineStoreMallDirectory/>,
        },
    ]

},



]
