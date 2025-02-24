import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";
import "./Navbar.css"
import logo from "images/WEWESHOP.png"
import { SlArrowDown } from "react-icons/sl";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, IconButton, ThemeProvider } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {useAuthContext} from "useContext/useAuthContext"

export const Navbar = () => {

    const {userID, user} = useAuthContext();

    useEffect(() => {
        console.log("user id: ", userID)
    }, [userID]);
    // check wether login success or not, check it by user in useAuthContext component

    const currentURL = useLocation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const theme = createTheme({
        components: {
          MuiMenuItem: {
            styleOverrides: {
              root: {
                fontFamily: 'monospace', // 设置字体
                fontSize: '16px',               // 字体大小
                color: 'tomato',               // 默认文字颜色
                '&:hover': {
                  color: 'DeepPink',            // Hover over the text color
                },
              },
            },
            // MuiMenu: {
            //     styleOverrides: {
            //         paper: {
            //           backgroundColor: 'tomato', // 背景颜色
            //           border: '2px solid #3498db', // 边框样式
            //           borderRadius: '8px', // 圆角边框
            //           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // 阴影效果
            //         },
            //       },
            // },
          },
        },
      });

    console.log(currentURL.pathname);
    //console.log(pathname);

    return(
        <div>

<nav className="navigation">

    <ul className="leftSide">
        <li>
        <Link to="/">
            <img className="logo" src={logo} alt="WEWESHOP"></img>
        </Link>
       </li>
        
        <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{padding:'1px', width:'auto', height:'auto'}}
            >
                <div className="menu-title">
                <SlArrowDown />Shop
                </div>
            </IconButton>

            <ThemeProvider theme={theme}>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                sx={{
                    '& .MuiPaper-root': { // select Menu Paper component
                        borderRadius: '25px', // set border-radius
                        //backgroundColor: 'LightCyan', // set background-color
                    },
                }}
            >

                {/* {['Electronics', 'HomeStore', 'Outfit', 'Pet'].map((category) => (
                    <MenuItem key={category} onClick={handleClose}>
                        <Link to={`/${category}`} style={{textDecoration: 'none', color:'inherit', width: '100%'}}>
                            {category} 
                        </Link>
                    </MenuItem>
                ))} */}

                <MenuItem onClick={handleClose}>
                    <Link to="/Electronics" style={{textDecoration: 'none', color: 'inherit', width: '100%' }}>Electronics</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/HomeStore" style={{textDecoration: 'none', color: 'inherit', width: '100%' }}>Home&Living</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/Outfit" style={{textDecoration: 'none', color: 'inherit', width: '100%' }}>Outfit</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/Pet" style={{textDecoration: 'none', color: 'inherit', width: '100%' }}>Pet</Link>
                </MenuItem>
                
            </Menu>
            </ThemeProvider>
    </ul>
            
            <ul className="navItem">
                {
                    user === null ? 
                    <li>
                    <Link to="/Login" style={{color: currentURL.pathname === '/Login' ? 'DeepPink' : '', display: 'flex', alignItems: 'center'}}><PersonIcon />Sign in</Link>
                    </li>
                    :
                    <li>
                    <Link to="/Profile" style={{color: currentURL.pathname === '/Profile' ? 'DeepPink' : '', display: 'flex', alignItems: 'center'}}><PersonIcon />Profile</Link>
                    </li>
                }
                

                <li><Link to="/About" style={{color: currentURL.pathname === '/About' ? 'DeepPink' : ''}}>About us</Link></li>
                <li><Link to="/Contact" style={{color: currentURL.pathname === '/Contact' ? 'DeepPink' : ''}}>Contact</Link></li>
            </ul>
            
</nav>

        </div>
    )
}