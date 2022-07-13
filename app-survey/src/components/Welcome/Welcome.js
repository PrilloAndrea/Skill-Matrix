import { Button } from '@mui/material';
import moment from "moment";


import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


const Welcome = (props) => {


    return (

        <div >

           <h1>Welcome to our survey form</h1>

                                          <h3>You are pleased to fill this form invited by Backoffice. </h3>
                                          

                                          {props.survey?.isSuccess

                                                  ? <div>
                                                      <h3>You may fill this form within {
                                          moment(props.survey.data?.surveys[0].closes_at).fromNow()     
                                        }</h3>
                                                    </div>

                                                  : "loading time..."}

                                                  <hr/>
                                                                                          

                                          <Button variant="contained" endIcon={<PlayCircleFilledWhiteIcon /> } href="/questions">

                                            Start

                                          </Button>
                                          <h3>You can stop the proccess and return later filling this form using the same loging token.</h3>

        </div>

    )

}

export default Welcome;