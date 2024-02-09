import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'

function Feed() {
  return (
    <Box

     p={2} flex={4}
    >  <Posts/>
       <Posts/>
       <Posts/>
       <Posts/>
       <Posts/>

    
    </Box>
  )
}

export default Feed
