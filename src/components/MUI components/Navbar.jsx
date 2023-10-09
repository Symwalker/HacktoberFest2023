import React, { useEffect } from 'react';
import "./navbar.css"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  // Menu,
  Grid,
  Typography,
  Divider,
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
// import Dropdownn from './dropdown';
import { BsChevronDown } from 'react-icons/bs';


const settings = ['First Page', 'Latest Page', 'Archive'];



const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isDraweropem, setDrawerOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { pathname } = useLocation()
  // const active = location.pathname 
  // console.log(location.pathname);
  return (
    <>
      <Box width={{ md: "100%", xs: "100%" }} sx={{ marginLeft: "auto", marginRight: "auto", width: "100%" }} >

        <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: 'none' }}>
          <Toolbar sx={{ backgroundColor: "transparent", color: "#FFFFFF" }}>
            <Box display={{ xs: "flex", md: "none" }} sx={{ width: "100%", alignItems: "center" }}  >

              <IconButton
                size='large'
                edge="start"
                sx={{ color: "white" }}
                aria-label='meniIcon'
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>


              <Typography variant="h4" sx={{ color: "white", width: "100%", textAlign: "center", fontFamily: "Dancing Script, cursive" }}>Devon Eriksen  </Typography>


            </Box>
            <Drawer anchor='left' open={isDraweropem} onClose={() => setDrawerOpen(false)} PaperProps={{
              sx: {
                backgroundColor: "#000",
                border: "1px solid #0a291cd6"
              }
            }} >
              <Stack >
                <IconButton
                  size='large'
                  // edge= "end"
                  htmlColor="white"
                  aria-label='meniIcon'
                  onClick={() => setDrawerOpen(false)}
                  sx={{ marginLeft: "auto", marginRight: 0.5, color: "white", position: "absolute", right: 0 }}
                >
                  <CloseIcon htmlColor='white' />
                </IconButton>

              </Stack>
              <Stack direction={"column"} width="330px" height={"100%"} role="presentation" >

                {/* <Link to={"/"} sx={{textDecoration:"none"}}> */}
                <Typography variant="h4" sx={{ color: "white", marginTop: 6, marginBottom: 3, textAlign: "center", fontFamily: "Dancing Script, cursive" }}>Devon Eriksen</Typography>
                {/* <img src={logo} sx={{padding:2}} alt="" height={100} width={90} /> */}
                {/* </Link> */}


                <Link to='/'>
                  <Button className={`${pathname === "/" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Home</Button>
                </Link>
                <Link to={"/novels"}>
                  <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins",           fontWeight: 300, px: 1 }} >
                    <div className="antialiased">
                      <div className="group">
                        <div
                          className={`${pathname === "/novels" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                        >
                          <span className="mr-1 ">NOVELS</span>
                          <BsChevronDown />
                        </div>
                        <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                          <li className="">
                            <Link
                              to={"/orbital-space"}
                              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"

                            >
                              Orbital Space
                            </Link>
                          </li>
                          <li className="">
                            <a
                              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              2nd Category
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Box>
                </Link>
                <Link to='/writing'>
                  <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300, px: 1,py:1 }}><div className="antialiased">
                    <div className="group">
                      <div
                        className={`${pathname === "/writing" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                      >
                        <span className="mr-1 ">WRITING</span>
                        <BsChevronDown />
                      </div>
                      <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                        <li className="">
                          <Link
                            to={"/writingarticles"}
                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"

                          >
                            Articles
                          </Link>
                        </li>
                        <li className="">
                          <Link to={"/writingfiction"}
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Fiction
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </Box>
                </Link>
                <Link to='/events'>
                  <Button className={`${pathname === "/events" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Events</Button>
                </Link>
                <Link to='/media'>
                  <Button className={`${pathname === "/media" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Media</Button>
                </Link>
                <Link to='/about'>
                  <Button className={`${pathname === "/about" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>About</Button>
                </Link>

                <Link to='/contact'>
                  <Button className={`${pathname === "/contact" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Contact</Button>
                </Link>

              </Stack>
            </Drawer>

            <Grid style={{ marginTop: "35px", marginBottom: "35px" }} container alignItems={"center"} display={{ xs: "none", md: "flex" }}>
              <Grid md={12} item lg={4.3}>
                <NavLink to={"/"} className={"hover:text-white"}>
                  <Typography textAlign={{ md: "center", lg: "start" }} variant="h4" sx={{ paddingLeft: "33px", fontFamily: "Dancing Script, cursive" }}>Devon Eriksen</Typography>
                </NavLink>
              </Grid>
              <Grid item md={12} lg={7.7} >
                <Stack direction='row' justifyContent={{ md: "center" }} width={"100%"} alignItems={"center"} spacing={4}>

                  {/* <Link to={"/"} > 
<img src={logo} sx={{padding:2}} alt="" height={80} width={70} />
</Link>
*/}
                  <Link to='/'>
                    <Button className={`${pathname === "/" ? "activeClass" : "noActiveClass"} font-style`} sx={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Home</Button>
                  </Link>
                  <Link to='/novels'>
                    <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}><div className="antialiased">
                      <div className="group">
                        <div
                          className={`${pathname === "/novels" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                        >
                          <span className="mr-1 ">NOVELS</span>
                          <BsChevronDown />
                        </div>
                        <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                          <li className="">
                            <Link
                              to={"/orbital-space"}
                              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"

                            >
                              Orbital Space
                            </Link>
                          </li>
                          <li className="">
                            <a
                              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              2nd Category
                            </a>
                          </li>
                          {/* <li className="">
                              <a
                                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                              >
                                Three
                              </a>
                            </li> */}
                        </ul>
                      </div>
                    </div></Box>
                  </Link>
                  <Link to='/writing'>
                    <Box sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}><div className="antialiased">
                      <div className="group">
                        <div
                          className={`${pathname === "/writing" ? "activeClass" : "noActiveClass"} font-style  dropdown rounded inline-flex items-center`}
                        >
                          <span className="mr-1 ">WRITING</span>
                          <BsChevronDown />
                        </div>
                        <ul className="absolute z-10 hidden text-gray-700 pt-1 group-hover:block">
                          <li className="">
                            <Link
                              to={"/writingarticles"}
                              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"

                            >
                              Articles
                            </Link>
                          </li>
                          <li className="">
                            <Link to={"/writingfiction"}
                              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              href="#"
                            >
                              Fiction
                            </Link>
                          </li>
                          {/* <li className="">
                              <a
                                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                              >
                                Three
                              </a>
                            </li> */}
                        </ul>
                      </div>
                    </div></Box>
                  </Link>
                  {/* <Link to='/writing'>
                  <Button className={`${pathname === "/writing" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Writing</Button>
                  </Link> */}
                  <Link to='/events'>
                    <Button className={`${pathname === "/events" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Events</Button>
                  </Link>
                  <Link to='/media'>
                    <Button className={`${pathname === "/media" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Media</Button>
                  </Link>
                  <Link to='/about'>
                    <Button className={`${pathname === "/about" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>About</Button>
                  </Link>


                  {/* <NavLink to='/articles' style={{backgroundColor:"black", color:"white"}}> */}

                  {/* <Dropdownn/> */}
                  {/* <Button className={`${pathname === "/about" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>articles */}

                  {/* </Button> */}



                  {/* </NavLink> */}
                  <Link to='/contact'>
                    <Button className={`${pathname === "/contact" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Contact</Button>
                  </Link>

                  {/* end here */}
                </Stack>



              </Grid>

            </Grid>



          </Toolbar>
        </AppBar>

      </Box>

    </>
  )
}
export default Navbar
