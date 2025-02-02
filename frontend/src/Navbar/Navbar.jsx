import React from "react";
import { Link, useLocation } from "react-router";
import "./Navbar.css"
import logo from "images/WEWESHOP.png"
import { TiThMenu } from "react-icons/ti";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material";

export const Navbar = () => {

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
                color: 'DarkOrange',               // 默认文字颜色
                '&:hover': {
                  color: 'DeepPink',            // Hover over the text color
                },
              },
            },
            // MuiMenu: {
            //     styleOverrides: {
            //         paper: {
            //           backgroundColor: 'DarkOrange', // 背景颜色
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
        
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
                <div className="menu-title">
                <TiThMenu />Shop
                </div>
            </Button>

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

                {['All', 'Electronics', 'HomeStore', 'Outfit'].map((category) => (
                    <MenuItem key={category} onClick={handleClose}>
                        <Link to={`/${category}`} style={{textDecoration: 'none', color:'inherit', width: '100%'}}>
                            {category} 
                        </Link>
                    </MenuItem>
                ))}

                {/* <MenuItem onClick={handleClose}>
                    <Link to="/All" style={{textDecoration: 'none', color: 'inherit' }}>All</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/Electronics" style={{textDecoration: 'none', color: 'inherit' }}>Electronics</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/HomeStore" style={{textDecoration: 'none', color: 'inherit' }}>HomeStore</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/Outfit" style={{textDecoration: 'none', color: 'inherit' }}>Outfit</Link>
                </MenuItem> */}
                
            </Menu>
            </ThemeProvider>
    </ul>
            
            <ul className="navItem">
                <li><Link to="/Login" style={{color: currentURL.pathname === '/Login' ? 'DeepPink' : ''}}>Sign in</Link></li>
                <li><Link to="/About" style={{color: currentURL.pathname === '/About' ? 'DeepPink' : ''}}>About us</Link></li>
                <li><Link to="/Contact" style={{color: currentURL.pathname === '/Contact' ? 'DeepPink' : ''}}>Contact</Link></li>
            </ul>
            
</nav>

        </div>
    )
}