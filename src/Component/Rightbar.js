import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import pic1 from './image/girl-2696947_1280.jpg'
import pic2 from './image/composing-2925179_1280.jpg'
import pic3 from './image/paint-2985569_1280.jpg'

function Rightbar() {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}  >
      <Box position={'fixed'}>
        <List>
          <Typography variant='h6'>Online users</Typography>
          <ListItem disablePadding>
            <ListItemButton>
              < AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
              </AvatarGroup>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ImageList >
                <ImageListItem >
                  <ListItemText primary="Latest conversation " />
                  <Stack direction="row" >
                    <img
                      src={pic1}
                      alt='pic1'
                      width={66}
                    />
                    <img
                      src={pic2}
                      alt='pic2'
                      width={66}
                    />
                    <img
                      src={pic3}
                      alt='pic3'
                      width={60}
                    />
                  </Stack>

                </ImageListItem>

              </ImageList>
            </ListItemButton>
          </ListItem>

          <List>
            <ListItemText primary="Latest conversation " />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                     
                    >
                      Ali Connors
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/5.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                    
                    >
                      Sandra Adams
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </List>
      </Box>
    </Box>
  )
}
export default Rightbar
