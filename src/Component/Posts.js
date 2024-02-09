import * as React from 'react';
import pic from './image/thomas-bennie-1jlJrr4XGkU-unsplash.jpg';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder} from '@mui/icons-material';


export default function Posts() {
  return (
    <Box  m={3}>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Raunak mani"
        subheader="November 11, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={pic}
        alt="nature"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is my dream to 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
     
    </Card>
    </Box>
  );
}
