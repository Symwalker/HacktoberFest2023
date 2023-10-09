import { Box, Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

const MuiRating = () => {
    const [value , setValue] = useState(null)
    // when you want to show product rating to the user
    // const [value , setValue] = useState(3)
    console.log({value});
    const handleChange = (e,newValue) =>{
        setValue(newValue)
    }
  return (
    <Box>
      <Stack>
        <Rating value={value} onChange={handleChange} precision={0.5}
        // highlightSelectedOnly =>sirf wohi jo slect kara hoga
         />
      </Stack>

    {/* // when you want to show product rating to the user */}
      {/* <Stack>
        <Rating value={value} onChange={handleChange} precision={0.5}
        readOnly
         />
      </Stack> */}
    </Box>
  )
}

export default MuiRating
