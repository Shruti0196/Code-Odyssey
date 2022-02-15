import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography } from '@mui/material';
export default function PatientDetails({data,setData}){
  console.log(data);
    function createData(Parameter, Information) {
        return { Parameter, Information };
      }
    
    const rows = [
       createData("Food",data.food),
       createData("Medicines",data.medicine),
       createData("Appointment(s)",data.appointment),
       createData("Health Status",data.healthstatus),
       createData("Allergie(s)",data.allergies),
       createData("Room Number Alloted",data.roomno),
       createData("Relatives Enrolled",data.relatives),
    ]
    return(<>
    <div>
    <Grid item xs={12} sm={12} md={6} lg={6} style={{marginTop:"80px", marginLeft:"80px"}}>
        <Typography style={{fontSize: "30px"}}>Patient Name: {data.name}</Typography>
        </Grid>
     <Grid container
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
              <TableCell>{row.Information}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </div>
    </>)
}