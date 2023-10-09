import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const MiSpeedDial = () => {
  return (
   <>
   <SpeedDial
    ariaLabel='Navigation speed dial'
    sx={{position:"absolute" ,bottom:19,right:19 }}
    icon={<SpeedDialIcon openIcon={<EditIcon/>} /> }
    >
        <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" tooltipOpen />
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" tooltipOpen/>
   </SpeedDial>
   </>
  )
}

export default MiSpeedDial

