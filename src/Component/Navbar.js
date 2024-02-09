import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import React, { useState } from 'react'
import { NotificationsActive } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'White',
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
display:"none",
gap:"15px",
justifyContent:"center",
[theme.breakpoints.up("sm")]:{
  display:"flex"
}                                                                       
}))
const UsersBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:"15px",
  justifyContent:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
  }))
function Navbar() {
  const [Opens,setOpens]=useState(false);
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}> Raunak Mani   </Typography>
        <AgricultureIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
   
        open={Opens}
        onClose={e=>setOpens(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

        
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsActive />
          </Badge>
          <Avatar alt="Remy Sharp" src="C:\Users\HP\myproject\p1\src\Component\image\photo-1494790108377-be9c29b29330.avif" sx={{height:30, width:30}}
          onClick={(e)=>setOpens(true)}
          />
        </Icons>
        <UsersBox  onClick={(e)=>setOpens(true)}>
        <Avatar alt="Remy Sharp" src="C:\Users\HP\myproject\p1\src\Component\image\photo-1494790108377-be9c29b29330.avif" sx={{height:30, width:30}} />
        <Typography>raunk</Typography>
        </UsersBox>
       
      </StyleToolbar>

    </AppBar>
  )
}

export default Navbar
