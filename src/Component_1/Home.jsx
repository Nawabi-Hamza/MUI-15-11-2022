// import { Button } from "bootstrap";
import { Button
    ,ButtonGroup
    ,FormControlLabel
    ,Box
    ,FormControl
    ,FormGroup
    ,Checkbox
    ,RadioGroup
    ,Radio
 } from "@mui/material"
import { AccessAlarm, ThreeDRotation, } from '@mui/icons-material';
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
function UIButton(){
    return(<>
    <div>
        <>
            <Button variant="text">Text</Button>
            <Button variant="outlined">OutLined</Button>
            <Button variant="contained" >Contained</Button>
            <Button variant="text" href="https://www.google.com">Text Link</Button>
            <Button variant="contained" color="warning" >Contained</Button>
            <Button variant="contained" color="info" >Contained</Button>
            <Button variant="contained" color="error">Contained</Button>
            <Button variant="contained" color="success" size="small">Contained</Button>
            <Button variant="outlined" color="error" size="large" startIcon={<AccessAlarm />}>Contained</Button>
            <Button variant="contained" size="large" endIcon={<ThreeDRotation />}>Contained</Button>
            <Button variant="outlined" color="error" size="large" startIcon={<SendIcon />}>Contained</Button>
            <Button variant="contained" size="large" startIcon={<LocalPhoneIcon />}>Contained</Button>
            <hr />
            <ButtonGroup>
            <Button variant="contained" onClick={()=> alert("Hello World")} color="info" size="small">Contained</Button>
            <Button variant="contained" color="error" size="large" startIcon={<AccessAlarm />}>Contained</Button>
            <Button variant="contained" size="large" endIcon={<ThreeDRotation />}>Contained</Button>
            <Button variant="contained" color="error" size="large" startIcon={<SendIcon />}>Contained</Button>
            <Button variant="contained" size="large" startIcon={<LocalPhoneIcon />}>Contained</Button>
            </ButtonGroup>
            <hr />
            <ButtonGroup orientation="vertical">
            <Button variant="contained" onClick={()=> alert("Hello World")} color="info" size="small">Contained</Button>
            <Button variant="contained" color="error"  startIcon={<AccessAlarm />}>Contained</Button>
            <Button variant="contained"  endIcon={<ThreeDRotation />}>Contained</Button>
            <Button variant="contained" color="info"  startIcon={<SendIcon />}>Contained</Button>
            <Button variant="contained" color="inherit" startIcon={<LocalPhoneIcon />}>Contained</Button>
            </ButtonGroup>
            <hr/>
            <div className="row">
                <div className="col">
                <Box>
                    <FormControl>
                        <RadioGroup>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel control={<Checkbox size="small" color="error"/>}  label="Do You Know React" />
                                
                        </RadioGroup>
                    </FormControl>
                </Box>
                </div>
                <div className="col">
                <Box>
                   <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Are you in WEB Development" />
                    <FormControlLabel control={<Checkbox/>} label="Do You Know React" />
                    <FormControlLabel control={<Checkbox/>} size="small" color="error" label="Do You Know React" /><hr/>
                    <FormControlLabel control={<Checkbox size="large" defaultChecked disabled/>} label="Are you in WEB Development" />
                    <FormControlLabel control={<Checkbox color="warning" />} label="Do You Know React" />
                    {/* <FormControlLabel control={<Checkbox size="small" sx={{color: pink[800]}}/>}  label="Do You Know React" /> */}
                   
                   </FormGroup>
                </Box>
                </div>

            </div>
        </>
    </div>
    </>)
}
export default UIButton;