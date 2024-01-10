import React from 'react';
import {Button,Card,CardMedia,CardContent,Typography,CardActions} from '@mui/material';
import Tree from '../assets/images/tree.jpg'
const CustomCard=()=>
{
    return(
      <Card sx={{maxWidth:345}}>
        <CardMedia
           sx={{height:140}}
           image={Tree}
           title={Tree}>
             </CardMedia>
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom >Nature</Typography>
            <Typography variant="body2" color="text.secondary">In the embrace of nature, the symphony of chirping birds and the gentle caress of a breeze paint a serene canvas of tranquility.</Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button sixe="small">Learn More</Button>
        </CardActions>
       
      </Card>
    )
}

export default CustomCard;