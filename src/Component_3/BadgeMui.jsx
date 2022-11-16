import { Badge, Grid,Chip, BottomNavigation, BottomNavigationAction,Box } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
function MuiBadge(){
    return(<>
    <Grid container spacing={3} p={3}>
        <Grid item xs={6}>
             <Badge badgeContent={5} color="error"><MailIcon /></Badge>
        </Grid>
        <Grid item xs={6}>
            <Chip label="Massage" color="warning" size="small" icon={<MailIcon/>}></Chip>
            <Chip label="Massage" color="info" variant="outlined"></Chip>
            <Chip label="Massage" color="error" variant="filled" icon={<MailIcon/>} onClick={()=> alert("This is the massage")}></Chip>
        </Grid>
       

    </Grid>
    <Box m={4}>
            <BottomNavigation sx={{width:"100%",position:"fixed",bottom:0}}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favoraite" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    </>
    )
}
export default MuiBadge