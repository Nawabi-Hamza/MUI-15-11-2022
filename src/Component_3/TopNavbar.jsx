import { AppBar,Toolbar,IconButton, Typography,Stack,Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
function TopNav(){
    return(<>
     <AppBar m={4} posistion="sticky" spacing={2}>
         <Toolbar sx={{
            backgroundColor:"orangered"
         }} >
            <IconButton size="large">
                <HomeIcon />
                <Typography>Blog</Typography>
            </IconButton>
            <Stack direction="row" spacing={2}>
                <Button variant="text" color="inherit">Home</Button>
                <Button variant="text" color="inherit">About</Button>
                <Button variant="text" color="inherit">Contact</Button>
            </Stack>
         </Toolbar>
     </AppBar>
    </>
    )
}
export default TopNav