

import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Fab, Input, Modal, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'

const StyleModal=styled(Modal)({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
})

const StyleBox=styled(Box)({
  display:'flex',
  justifyContent:'center',
 padding:"5"
})


function Addnew() {
 const [open, setOpen] = React.useState(false);
 const handleclose=()=>{
  setOpen(false);
 
}
 
  return (
    <Tooltip onClick={e=>setOpen(true)}  sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}, }}>
<Fab color="primary" aria-label="add">
  <AddIcon  />
  <StyleModal

        open={open}
        onClose={e=>setOpen(true)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleBox height={250 } width={250}  bgcolor={'white'} borderRadius={2}>
          <Stack direction={'column' } gap={2}>
         <Typography variant='h6' mt={3} component="span" color="gray">Create Post</Typography>

         <Input aria-label="Demo input" multiline placeholder="Type something…" />
         <Button variant="outlined" onClick={handleclose}> Submit</Button>
         </Stack>
        </StyleBox>
      </StyleModal>
</Fab>

    </Tooltip>
  
  )
}

export default Addnew
//sx={{display:'flex' , justifyContent:'center', position:'absolute', top:150, left:150}}