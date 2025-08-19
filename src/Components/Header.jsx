import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { IoSearchOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import logoicon from '../assets/Media/matcha.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div>
                <h5 className='text-center text-white p-2' style={{ backgroundColor: "#7cb342", margin: 0 }}>Welcome to TheGreenWhisk cafe</h5>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" elevation={0} sx={{ backgroundColor: "white", margin: 1 }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="logo"
                                sx={{ mr: 2 }}
                            >
                                <Link to={'/'}><img src={logoicon} alt="" style={{width: 57, height:50}} /></Link>
                            </IconButton>

                            <Box sx={{ display: "flex", gap: 4 }}>
                                <Link style={{textDecoration:"none"}} to={'/'} ><Typography variant="h6" sx={{ color: "#7cb342", fontFamily: "Roboto Mono" }}>
                                    Home
                                </Typography></Link>
                                <Link style={{textDecoration:"none"}} to={'/menu'} ><Typography variant="h6" sx={{ color: "#7cb342", fontFamily: "Roboto Mono" }}>
                                    Menu
                                </Typography></Link>
                                <Link style={{textDecoration:"none"}} to={'/location'}><Typography variant="h6" sx={{ color: "#7cb342", fontFamily: "Roboto Mono" }}>
                                    Location
                                </Typography></Link>
                            </Box>
                            <Box sx={{ flexGrow: 1 }} />
                            <IconButton sx={{ color: "#7cb342"}} aria-label="search">
                                <IoSearchOutline />
                            </IconButton>
                            <Link to={'/cart'}><IconButton sx={{ color: "#7cb342", marginLeft:"10px"}} aria-label="cart">
                                <CiViewList />
                            </IconButton></Link>
                            
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </>
    )
}

export default Header
