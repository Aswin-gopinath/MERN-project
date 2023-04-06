import React from "react";
import Head from "../../components/navbar/navbar";
import { Avatar, Grid, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Homepage = () => {
  const paperStyle = { padding: 20, height: '40vh', width: '450px', margin: '100px auto', backgroundColor: '#003eff21' }
  const avatarStyle = { padding: 10, backgroundColor: 'blue' }
  return (
    <>
      <Head />
      <Grid>
        <Paper elevation={10} style={paperStyle}>              
          <Grid align='center'>
            <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
            <h2>Hello, Welcome</h2>
          </Grid> 
        </Paper>
      </Grid>
    </>
  )
}

export default Homepage