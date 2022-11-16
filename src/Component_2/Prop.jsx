import { MenuItem, TextField } from "@mui/material"
import { useState } from "react"

function PropMUI(){
    const [ city,setCity ] = useState('')
    console.log({city})
    // alert(city)

    return(<>
    <TextField 
    label="City" select className="w-50 my-3" 
    onChange={(e)=> setCity(e.target.value)} >
    <MenuItem>Select Your City</MenuItem>
    <MenuItem value="Kabul">Kabul</MenuItem>
    <MenuItem value="Mazar">Mazar</MenuItem>
    <MenuItem value="Herat">Herat</MenuItem>
    <MenuItem value="Farah">Farah</MenuItem>
    <MenuItem value="Zabul">Zabul</MenuItem>
    <MenuItem value="Logar">Logar</MenuItem>
    </TextField>
    <hr className="my-3" />
    
   </>)
}
export default PropMUI