import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";


function Complete(){
    const [ city,setCity ] = useState()
    const citeis = ["kabul","logar","Farah","Farkhar","Kandahar","Faizabad"]
    console.log(city)
    return(
    <Box className="w-50">
    <Autocomplete options={citeis} 
    renderInput={(pro)=> <TextField {...pro} label="Select Your City" /> }
    value={city}
    onSelect={(e)=> setCity(e.target.value)}
    />
    </Box>)
}
export default Complete;