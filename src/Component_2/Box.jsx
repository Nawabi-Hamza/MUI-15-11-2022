import { Box,Stack } from "@mui/material"
// import { Button } from "bootstrap"
// import { useState } from "react"



function BoxUI(){
    
    
    return(
    // <Stack direction="row">
    <Stack direction="row-reverse" spacing={43} >
        
    <Box display="flex" height="200px" width="200px" bgcolor="orangered" padding="12px"  >This si our box </Box>
    <Box sx={{
        backgroundColor:"black",
        height:"200px",
        width:"200px",
        color:"white",
        padding:"20px",
        "&:hover":{
            backgroundColor:"green"
        },
        border:"3px solid red"
    }}>This si our second box </Box>
    </Stack>
    )
}
export default BoxUI