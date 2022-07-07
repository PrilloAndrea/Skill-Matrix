import { Button } from '@mui/material';

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';



const Welcome = (props) => {

   

    return (

        <div >

           <h1>Welcome to our survey </h1>

                                          <h3>Please fill out this form</h3>

                                          <Button variant="contained" endIcon={<PlayCircleFilledWhiteIcon /> } href="/questions">

                                            Start

                                          </Button>

        </div>

    )

}

export default Welcome;