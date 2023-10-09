import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Button_stack = () => {
    return (
        <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'stretch' }} spacing={1} >
                {/* // <Stack direction='column' justifyContent="flex-start" alignItems='flex-start' spacing={1} > */}
                <Button variant='text'>btn</Button>
                <Button href='https://www.youtube.com' target='_blank' variant='outlined'>btn</Button>
                <Button variant='contained' disableElevation disableRipple>btn</Button>
            </Stack>
            <IconButton><AccountCircleIcon color='black' sx={{ fontSize: 40 }} /></IconButton>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'stretch' }} spacing={1} >
                <ButtonGroup
                    variant='outlined'
                    disableFocusRipple
                    disableElevation 
                    >
                    <Button onClick={() => alert('1')}>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                </ButtonGroup>
            </Stack>
        </>
    )
}

export default Button_stack
