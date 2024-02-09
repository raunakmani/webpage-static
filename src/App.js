import React from 'react'
import Navbar from './Component/Navbar'
import Feed from './Component/Feed'
import Rightbar from './Component/Rightbar'
import Sidebar from './Component/Sidebar'
import {Box, Stack} from '@mui/material'
import Addnew from './Component/Addnew'


function App() {
  return (
    <Box>
       
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={'space-between'}>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Addnew/>
    </Box>
  )
}

export default App
