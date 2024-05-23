import React from 'react';
import { Box, Grid, CircularProgress } from '@mui/material'
import Eletronic from '../Assets/Image/Electronics.png'

const Dashboard = () => {
  return (

    <>
  <Grid container>
<Grid item lg={12}>
  <Box style={{display: "flex", justifyContent: "space-between", padding: "20px 30px", alignItems: "center"}}>
<Box> <img src={Eletronic} alt="" /></Box>


<Box style={{display: "flex"}}><Box>
  <input type="text" />
  </Box></Box>


<Box>User</Box>
  </Box>


</Grid>
  </Grid>
    <Box></Box>
    
    <div onClick={() => sessionStorage.clear()}>Dashboard</div>
    </>


  
  );
};

export default Dashboard;
