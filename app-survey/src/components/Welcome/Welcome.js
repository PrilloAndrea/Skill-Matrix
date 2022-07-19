import { Button } from '@mui/material';
import moment from "moment";
import { useQuery, gql } from "../../services/hasura-client";
import { Link } from 'react-router-dom';

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Loading from '../Loading/Loading';



const Welcome = (props) => {


  const SURVEY_ACTION_QUERY = gql`
  query GetSurvey {
    surveys{
      opens_at
      closes_at
      id
    }
  }

`;

// ReactQuery getSyrvey
const survey = useQuery("SurveyAction", SURVEY_ACTION_QUERY);
console.log(survey.isSuccess)
console.log(survey.data)


    return (

        <div >

           <h1>Welcome to our survey form</h1>

                                          <h3>You are pleased to fill this form invited by Backoffice. </h3>
                                          

                                          {survey?.isSuccess

                                                  ? <div>
                                                      <h3>You may fill this form {
                                          moment(survey.data?.surveys[0].closes_at).fromNow()     
                                        }</h3>
                                                    </div>

                                                  : <Loading/>}

                                                  <hr/>
                                                                                          

                                          <Button component={Link} to="/questions" variant="contained" endIcon={<PlayCircleFilledWhiteIcon /> } onClick={() => {window.location.href="/questions"}}>

                                            Start

                                          </Button>
                                          <h3>You can stop the proccess and return later filling this form using the same loging token.</h3>

        </div>

    )

}

export default Welcome;