import { Alert, Grid } from "@mui/material";

function MuiAlert(){
    return(<>
    <Grid container p={3} columnSpacing={4}>
        {/* <Alert>This is Alert</Alert> */}
        <Grid item xs={4} spacing={2}>
        <Alert severity="error">This is Error Alert</Alert>
        <Alert severity="success">This is Success Alert</Alert>
        <Alert severity="info">This is Info Alert</Alert>   
        <Alert severity="warning">This is Warning Alert</Alert>
        </Grid>
        <hr/>
        <Grid item xs={4} spacing={2}>
        <Alert severity="error" variant="outlined">This is Error Alert</Alert>
        <Alert severity="success" variant="outlined">This is Success Alert</Alert>
        <Alert severity="info" variant="outlined">This is Info Alert</Alert>   
        <Alert severity="warning" variant="outlined">This is Warning Alert</Alert>
        </Grid>
        <hr/>
        <Grid item xs={4} spacing={2}>
        <Alert severity="error" variant="filled">This is Error Alert</Alert>
        <Alert severity="success" variant="filled">This is Success Alert</Alert>
        <Alert severity="info" variant="filled">This is Info Alert</Alert>   
        <Alert severity="warning" variant="filled">This is Warning Alert</Alert>
        </Grid>

    </Grid>
   </>)
}
export default MuiAlert;