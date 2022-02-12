import * as React from 'react';
import { Grid, Card, CardContent, CardActionArea, CardMedia, Typography, Box } from '@mui/material';
import HeaderAdmin from './HeaderAdmin'
import viewPerson from '../../Assets/viewPerson.jpg';
import view from '../../Assets/view.jpg';
export default function ActionAreaCard() {
  const patients=[
    {pn:"acwjcv"},
    {pn:"lucy"},
    {pn:"sanika"},
    {pn:"jena"},
    {pn:"leo"},
  ]
  return (
    <div style={{backgroundImage: "url(" + view +")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}>
    <HeaderAdmin activePage="View" />
    <Box ml={5} mr={5} pl={7} pr={3} mt={3} pt={3} mb={1} pb={1} >
    <Grid container
          spacing={3}
          alignContent="flex-start"
          justifyContent="center"
          marginleft={40}
          marginright={40}>
     {
       patients.map((card,_)=>{
         return(
          
          <Grid item xs={12} sm={6} md={4} lg={3}>
           <CardActionArea>
             <Card variant="outlined" style={{height: "42vh", 
            //  backgroundColor:"#fb3b30"
             }}>
               <CardMedia component="img"
                      height="230"
                      image={viewPerson}/>
               <CardContent>
                 <Typography variant="h4" align="center">{card.pn}</Typography>
               </CardContent>
             </Card>
           </CardActionArea>
          </Grid>
         
         )
       })
     }
    </Grid>
     </Box>
    </div>
  );
}