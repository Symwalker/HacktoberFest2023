import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
const Skills = {
    id :0,
    label : ""
}


const skills = ['lahore','islamabad','quetta','peshawar','karachi']
const skillOptions = skills.map((skill ,index)=>({
    id : index + 1,
    label : skill
}))
const MuiAutocomplete = () => {
    // const [value ,setValue] = useState(null)
    const [skills ,setSkills] = useState(null)
    console.log({skills});
  return (
    <Stack spacing={2} width='250px' >
        {/* array of strings */}
      {/* <Autocomplete  options={skills}
      renderInput={(params)=><TextField {...params} value={value} label='Skills'/>}
      value={value}
      onChange={(e,newValue)=>setValue(newValue)} 
      freeSolo
       /> */}


       {/* array of objects */}
      <Autocomplete  options={skillOptions}
      renderInput={(params)=><TextField {...params}  label='Skills'/>}
      value={skills}
      onChange={(e,newValue)=>setSkills(newValue)} 
      
       />

    </Stack>
  )
}

export default MuiAutocomplete
