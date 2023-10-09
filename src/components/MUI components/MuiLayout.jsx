import { Stack, Box, Divider,Grid,Paper} from '@mui/material'
import React from 'react'

const MuiLayout = () => {
    return (
        <>
        <Paper elevation={4} >
        <Stack sx={{border : '1px solid'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />} >
        <Box sx={{
            height: "100px",
            width: "100px",
            color: "white",
            bgcolor: "blue"
            ,'&:hover' :{
                bgcolor:"black"
            }
        }}>
            shayan
        </Box>
        <Box sx={{
            height: "100px",
            width: "100px",
            color: "white",
            bgcolor: "black"
            ,'&:hover' :{
                bgcolor:"black"
            }
        }}>
            shayan
        </Box>
            </Stack>
            
            <Box sx={{margin:10}}>

<Grid container spacing={2}>
    <Grid item xs={3} md={12}>
        <Box p={2} bgcolor={"primary.main"}>item 1</Box>
    </Grid>
    <Grid item xs={9} md={6} >
        <Box p={2} bgcolor={"secondary.main"}>item 2</Box>
    </Grid>
    <Grid item xs={9} md={6}>
        <Box p={2} bgcolor={"primary.main"}>item 3</Box>
    </Grid>
    <Grid item xs={3} md={12}>
        <Box p={2} bgcolor={"secondary.main"}>item 4</Box>
    </Grid>

</Grid>
            </Box>
            </Paper>
            </>
    )
}

export default MuiLayout
