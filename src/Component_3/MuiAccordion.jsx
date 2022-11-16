import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Button } from "@mui/material"


function Accordio(){
    return(<div className='p-5'>
    <Accordion elevation={5}>
      <AccordionSummary>
        <Typography>
            This is the title
                <Button>...more</Button>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion elevation={5}>
      <AccordionSummary>
        <Typography>
            This is the title
                <Button>...more</Button>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rem?
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>)
}
export default Accordio