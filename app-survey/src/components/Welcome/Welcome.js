import { Button } from '@mui/material';
import moment from "moment";
import { useQuery, gql } from "../../services/hasura-client";


import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';



const Welcome = (props) => {


  const SURVEY_ACTION_QUERY = gql`
query GetSurvey($id : Int!) {
  surveys(where: {id: {_eq: $id}}) {
    opens_at
    closes_at
    id
  }
}

`;
console.log(props?.decodeToken)
// console.log(props.decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id'])


// ReactQuery getSyrvey
const survey = useQuery("SurveyAction", SURVEY_ACTION_QUERY,
{
 variables: {
   id: parseInt(props?.decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id'])
 }
});
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