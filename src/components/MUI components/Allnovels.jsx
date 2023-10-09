import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import book1 from "../../images/book1over.png"
import "./allnovels.css"
import { Link } from 'react-router-dom'

const AllNovels = () => {
    return (
        <Grid container spacing={3} justifyContent={"center"} alignItems={"center"} >
            <Grid item md={3} sm={6} xs={12}  width={270} >
            <Link to={"/theft-of-fire"} width={270}>
            <Card className=' zoom' sx={{marginX: "auto",marginTop:"60px", maxWidth: 270, background:"none" }} >
                <CardActionArea sx={{ padding: 0 }}>
                    <CardMedia
                        component='img'
                        sx={{ width: 270}}
                        image={book1}
                        alt='unsplash image'
                    />
                    
                </CardActionArea>
                <CardContent sx={{ marginTop: 0, padding: 0, width: 270 }}>
                <Typography gutterBottom variant='body1' component="div" color={"#ff9b02"} sx={{fontFamily:"heebo", fontSize:"18px", marginTop:1}}>Orbital Space</Typography>
                    <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{ marginBottom: "0px", fontFamily: 'Playfair Display, serif', fontSize:"30px" }}>Theft of Fire</Typography>
            
                    {/* <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{}}>price</Typography> */}
                </CardContent>
            </Card>
            </Link>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
            <Link to={"/theft-of-fire"}>
            <Card className=' zoom' sx={{marginX: "auto",marginTop:"60px", textAlign: 'left', maxWidth: 270, background:"none" }} >
                <CardActionArea sx={{ padding: 0 }}>
                    <CardMedia
                        component='img'
                        sx={{ width: 270}}
                        image={book1}
                        alt='unsplash image'
                    />
                    
                </CardActionArea>
                <CardContent sx={{ marginTop: 0, padding: 0, width: 270 }}>
                <Typography gutterBottom variant='body1' component="div" color={"#ff9b02"} sx={{fontFamily:"heebo", fontSize:"18px", marginTop:1}}>Orbital Space</Typography>
                    <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{ marginBottom: "0px", fontFamily: 'Playfair Display, serif', fontSize:"30px" }}>Theft of Fire</Typography>
            
                    {/* <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{}}>price</Typography> */}
                </CardContent>
            </Card>
            </Link>
</Grid>
<Grid item md={3} sm={6} xs={12}>
            <Link to={"/theft-of-fire"}>
            <Card className=' zoom' sx={{marginX: "auto",marginTop:"60px", textAlign: 'left', maxWidth: 270, background:"none" }} >
                <CardActionArea sx={{ padding: 0 }}>
                    <CardMedia
                        component='img'
                        sx={{ width: 270}}
                        image={book1}
                        alt='unsplash image'
                    />
                    
                </CardActionArea>
                <CardContent sx={{ marginTop: 0, padding: 0, width: 270 }}>
                <Typography gutterBottom variant='body1' component="div" color={"#ff9b02"} sx={{fontFamily:"heebo", fontSize:"18px", marginTop:1}}>Orbital Space</Typography>
                    <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{ marginBottom: "0px", fontFamily: 'Playfair Display, serif', fontSize:"30px" }}>Theft of Fire</Typography>
            
                    {/* <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{}}>price</Typography> */}
                </CardContent>
            </Card>
            </Link>
</Grid>
<Grid item md={3} sm={6} xs={12}>
            <Link to={"/theft-of-fire"}>
            <Card className=' zoom' sx={{marginX: "auto",marginTop:"60px", textAlign: 'left', maxWidth: 270, background:"none" }} >
                <CardActionArea sx={{ padding: 0 }}>
                    <CardMedia
                        component='img'
                        sx={{ width: 270}}
                        image={book1}
                        alt='unsplash image'
                    />
                    
                </CardActionArea>
                <CardContent sx={{ marginTop: 0, padding: 0, width: 270 }}>
                <Typography gutterBottom variant='body1' component="div" color={"#ff9b02"} sx={{fontFamily:"heebo", fontSize:"18px", marginTop:1}}>Orbital Space</Typography>
                    <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{ marginBottom: "0px", fontFamily: 'Playfair Display, serif', fontSize:"30px" }}>Theft of Fire</Typography>
            
                    {/* <Typography gutterBottom variant='body1' component="div" color={"#fff"} sx={{}}>price</Typography> */}
                </CardContent>
            </Card>
            </Link>
            </Grid>
        </Grid>
    )
}

export default AllNovels
