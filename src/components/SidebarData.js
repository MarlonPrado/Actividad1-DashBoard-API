import React from 'react';
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
import{BsBarChartFill} from "react-icons/bs";
import{BiShoppingBag} from "react-icons/bi";
import{HiOutlineReceiptRefund} from "react-icons/hi";
import{RiRefund2Line} from "react-icons/ri";
import{HiOutlineShoppingCart} from "react-icons/hi"
import { BsArchiveFill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import {BsFillCartFill} from "react-icons/bs";


 export const SidebarData= [
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
        }
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
        }
    ]

},

{
    title: 'facturacion',
    path: '/factura',
    icon: <MdInventory2/>,
    iconClosed: <RiIcons.RiArrowDownFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
    subNav: [
        {
            title: 'Facturar Compra',
            path: '/factura/compra',
            icon: <BiShoppingBag/>,
        },
        {
            title: 'Facturar Venta',
            path: '/factura/venta',
            icon: <HiOutlineShoppingCart/>,
        },
        {
            title: 'Facturar Devolucion compra',
            path: '/factura/devcompra',
            icon: <HiOutlineShoppingCart/>,
        },
        {
            title: 'Facturar Devolucion Venta',
            path: '/factura/devventa',
            icon: <RiRefund2Line/>,
        }
    ]

},

{
    title: 'Reportes',
    path: '/reporte',
    icon: <BsBarChartFill/>,

},

{
    title: 'Pedidos',
    path: '/pedido',
    icon: <BsFillCartFill/>,

}


];

