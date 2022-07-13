import { Button } from '@mui/material';


import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


const Welcome = (props) => {


    return (

        <div >

           <h1>Welcome to our survey </h1>

                                          <h3>Please fill out this form</h3>

                                          {props.survey?.isSuccess

                                                  ? <div>
                                                      <p>Opens at {props.survey.data?.surveys[0].opens_at}</p> 
                                                      <p>Closes at {props.survey.data?.surveys[0].closes_at}</p>
                                                    </div>

                                                  : "loading time..."}
                                                                                          

                                          <Button variant="contained" endIcon={<PlayCircleFilledWhiteIcon /> } href="/questions">

                                            Start

                                          </Button>

        </div>

    )

}

export default Welcome;