import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"



function SwitchUI(){
    const [ dark,setDark ] = useState(false)
    console.log(dark)
    
    return(
    
    <Box style={dark? {backgroundColor:"black",color:"white"}: null }>
    <FormControlLabel label="Dark & Light" 
    control={<Switch checked={dark} 
    onChange={(e)=> setDark(e.target.checked) } />} />
    </Box>)
}
export default SwitchUI