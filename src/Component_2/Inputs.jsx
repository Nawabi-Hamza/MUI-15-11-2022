import { InputAdornment , Stack , TextField }  from "@mui/material"
import { useState } from "react";
// import * as mui from "@mui/material"

function InputUI(){
    const [ name,setName ] = useState()
    const [ pass,setPass ] = useState()
    console.log(name)
    console.log({name})
    
    return(
    <Stack display="block" spacing={2} direction="row">
        <TextField label="Your Name..." variant="outlined" color="error" size="large"/>
        <TextField label="Your Name..." variant="filled" color="success" />
        <TextField label="Your Name..." variant="standard" color="info" />
        <hr className="my-3"/>
        <TextField label="Your Name..." variant="standard" color="info" required />
        <TextField label="Your Name..." variant="standard" color="info" required size="small" />
        <TextField label="Password..."
         variant="standard"
         color="warning"
         required
         type="password"
         helperText="do not shere this to others.."
         size="small" />
        <hr className="my-3" />
        <TextField lebal="Read Only" variant="outlined" value="I am not writable" InputProps={{readOnly:true}} />
        <TextField label="Amount" InputProps={{startAdornment:<InputAdornment  position="start">AF</InputAdornment >}} size="small"/>
        <TextField label="Wieght" type="number" 
        size="small" className="my-2" InputProps={{endAdornment:<InputAdornment  position="end">Kg</InputAdornment>}} />
        <hr className="my-3" />
        <p>Validation</p>
        <TextField label="Your Name..." variant="filled" color="success" 
        value={name} onChange={(e)=> setName(e.target.value)}/>
        <TextField label="password" color="success" 
        value={pass} onChange={(e)=> setPass(e.target.value)}
        variant="outlined"
        error={!pass}
        required
        type="password"
        helperText={!pass? "required":"do not shere this to others.."}
        size="small" />
    </Stack>)
}  
export default InputUI;