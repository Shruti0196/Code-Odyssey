import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography } from '@mui/material';
import { FiEdit } from "react-icons/fi";
import {useState, useEffect} from 'react';
export default function PatientDetails(/*{card,setData}*/){
  // console.log(card);
  useState(()=>{
    getPatients()
  },[]);
  const [card, setCard] = useState([])
  function getPatients(){
    (async () => {
      
      let patientName;
      try {
        
        let response = await fetch(
          "http://hackathonwork.pythonanywhere.com/updates/list",
          {
            method: "GET",
            headers: {
              
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        patientName = await response.json();
        console.log(patientName);
      } catch (error) {
        console.log("Error" + error);
        patientName = [];
      }

      setCard(patientName.card);
    })();
  }
  // function selectPatient(id)
  // {
  //   let card=rows[id-1];
  //   setName(card.name)
  //       setEmail(card.email)
  //       setMobile(card.mobile);
  //       setUserId(card.id)
  // }
    function createData(Parameter, Information, Edit) {
        return { Parameter, Information, Edit };
      }
    const editIcon = <FiEdit/>;
    const rows = [
       createData("Food",card.food, editIcon),
       createData("Medicines",card.medicine, editIcon),
       createData("Appointment(s)",card.appointment, editIcon),
       createData("Health Status",card.healthstatus, editIcon),
       createData("Allergie(s)",card.allergies, editIcon),
       createData("Room Number Alloted",card.roomno, editIcon),
       createData("Relatives Enrolled",card.relatives, editIcon),
    ]
    return(<>
    <div>
    <Grid item xs={12} sm={12} md={6} lg={6} style={{marginTop:"80px", marginLeft:"80px"}}>
        <Typography style={{fontSize: "30px"}}>Patient Name: {card.name}</Typography>
        </Grid>
        <Grid
          container
          width="100vh"
          display="flex"
          alignContent="center"
          justifyContent="center"
          marginTop={5}
          marginLeft={10}>
     <TableContainer>
      <Table sx={{ maxWidth: 700 }} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor:"#888bd2"}}>
          <TableRow>
          <TableCell >Parameter</TableCell>
          <TableCell >Information</TableCell>
          <TableCell >Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Parameter}
              </TableCell>
              <TableCell align="center">{row.Information}</TableCell>
              <TableCell align="center">{row.Edit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </div>
    </>)
}
