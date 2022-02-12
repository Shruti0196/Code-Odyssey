import * as React from 'react';
import {useState, useEffect} from 'react';
import { Grid, Card, CardContent, CardActionArea, CardMedia, Typography, Box } from '@mui/material';
import HeaderAdmin from './HeaderAdmin'
import viewPerson from '../../Assets/viewPerson.jpg';
import view from '../../Assets/view.jpg';
export default function View(props) {
  // const patients=[
  //   {pn:"acwjcv"},
  //   {pn:"lucy"},
  //   {pn:"sanika"},
  //   {pn:"jena"},
  //   {pn:"leo"},
  // ]

  const [card, setCard] = useState([]);
   
  useEffect(() => {
    (async () => {
      // console.log(props.match.params.item_id)
      let patientName;
      try {
        //let token = localStorage.getItem("itemName");
        //let idi = props.match.params.name;
        // setOrderitem(id);
        let response = await fetch(
          "http://hackathonwork.pythonanywhere.com/updates/list",
          {
            method: "GET",
            headers: {
              // Authorization: `token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        patientName = (await response.json());
         console.log(patientName);
        //  setCard(patientName);
      } catch (error) {
        console.log("Error" + error);
        patientName = [];
      }
      
      setCard(patientName.data);
      })(); 
  }, []);
     // let id = props.match.params.name;
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
       card.map((card,_)=>{
         return(
          
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
           <CardActionArea>
             <Card variant="outlined" style={{height: "42vh", 
            //  backgroundColor:"#fb3b30"
             }}>
               <CardMedia component="img"
                      height="230"
                      image={viewPerson}/>
               <CardContent>
                 <Typography variant="h4" align="center">{card.name}</Typography>
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