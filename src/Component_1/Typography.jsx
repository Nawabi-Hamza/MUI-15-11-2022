import { Typography } from "@mui/material";
function MyTypography(){
    return(
        <>
            <Typography variant="h1" gutterBottom>This is header one</Typography>
            <Typography variant="h2">This is header two</Typography>
            <Typography variant="h3">This is header three</Typography>
            <Typography variant="h4">This is header four</Typography>
            <Typography variant="h5">This is header five</Typography>
            <Typography variant="h6">This is header six</Typography>

            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <Typography variant="body1">body 1</Typography>
            <Typography variant="body2">body 2</Typography>

            <Typography variant="subtitle1" component="h1">subtitle value h1</Typography>
            <Typography variant="subtitle2" component="h5">subtitle value h5</Typography>
        </>
    )
}
export default MyTypography;