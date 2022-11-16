import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/material";
import CardIt from "./CardItem";


function ShowUIGrid(){
    return(<>
    <Paper sx={{padding:"30px",margin:"20px"}} elevation={4} >
    <Grid container spacing={3} columnspacing={5} rowspacing={3}>
    <Grid item xs={2} >
         <Box bgcolor="yellow" p={2}>
            Item Number 1
        </Box>      
    </Grid>
    <Grid item xs={2} >
         <Box bgcolor="orangered" p={2}>
            Item Number 1
        </Box>
    </Grid>
    <Grid item xs="auto" >
        <Box bgcolor="yellow" p={2}>
            Item Number 1
        </Box>
    </Grid>
    </Grid>
 </Paper>
        <Grid container spacing={2} columnSpacing={5}>
            <Grid item xs={3}>
            <CardIt/>
            </Grid>
            <Grid item xs={3}>
                <CardIt/>
            </Grid>
            <Grid item xs={3}>
                <CardIt/>
            </Grid>
            <Grid item xs={3}>
                <CardIt/>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={3}>
              
            </Grid>
        </Grid>
    </>)
}
export default ShowUIGrid;