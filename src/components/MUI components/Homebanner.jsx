import React from 'react'
import { Box } from '@mui/material'
import banner from "../../images/banner Thea.png"

const HomeBanner = () => {
    return (
        <div data-aos="zoom-in" style={{textAlign:"center", width:"100%", marginLeft:"auto", marginRight:"auto", marginTop:"0px"}}>
            <Box
            
                component="img"
                sx={{
                    height:"100%",
                    width: '100%',
                    display: "flex",
                    justifyContent: "center"

                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={banner}
            />
        </div>
    )
}

export default HomeBanner
