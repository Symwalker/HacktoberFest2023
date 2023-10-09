import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import React from 'react'

const MuiCards = () => {
    return (
        <Box width={'300px'}>
            <Card>
                <CardMedia 
                component='img'
                height='130px'
                image='https://source.unsplash.com/random'
                alt='unsplash image'
                

                 />
                <CardContent>
                    <Typography gutterBottom variant='h5' component="div">React</Typography>
                    <Typography gutterBottom variant='body2' color={'text.secondary'}>MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.</Typography>

                </CardContent>
                <CardActions >
                    <Button variant='contained'>share</Button>
                    <Button variant='outlined'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCards
