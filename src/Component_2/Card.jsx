import { Box, CardContent, CardMedia, Typography, Card, CardActions ,Rating, Button } from "@mui/material"
// import { Button } from "bootstrap"
import { useState } from "react"



function CardhUI(){
    const [ rate,setRating ] = useState()
    console.log(rate)
    
    return(
    <Box >
        <div className="row p-5">
            <div className="col">
                <Card elevation={24} >
                <CardMedia component="img" 
                image="data:image/jpeg;base64,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" 
                />
                    <CardContent>
                        <Typography variant="h4">
                            This is Card Header
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Doloribus, repudiandae.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small' href="http://www.google.com">READ MORE</Button>
                        <Rating onChange={(e)=> setRating(e.target.value)} precision={0.5} size="large"/>
                    </CardActions>
                {/* </CardMedia> */}
                </Card>
            </div>
            <div className="col">
                <Card elevation={9} >
                <CardMedia component="img" 
                image="data:image/jpeg;base64,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" />
                    <CardContent>
                        <Typography variant="h4">
                            This is Card Header
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Doloribus, repudiandae.
                        </Typography>
                    </CardContent>
                {/* </CardMedia> */}
                </Card>
            </div>
        </div>
    </Box>
    )
}
export default CardhUI