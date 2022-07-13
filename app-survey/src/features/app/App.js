import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Questions from "../../components/Questions/Questions";
import './App.css';

// Ping query
const PING_ACTION_QUERY = gql`
  query {
    ping: ping_action {
      timestamp
    }
  }
`;

// Get Questions query
const QUESTION_ACTION_QUERY = gql`

query {

  questions {

    board_id

    data

    id

    is_deleted

    type

  }

}

`;

// Get Survey query
const SURVEY_ACTION_QUERY = gql`
query GetSurvey($id : Int!) {
  surveys(where: {id: {_eq: $id}}) {
    opens_at
    closes_at
  }
}

`;


export const App = () => {

 // ReactQuery getPing
 const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);
 console.log(data);


 // ReactQuery getQuestions
 const questions = useQuery("QuestionAction", QUESTION_ACTION_QUERY);
 console.log(questions.data);

// ReactQuery getQuestions
const survey = useQuery("SurveyAction", SURVEY_ACTION_QUERY,
{
 variables: {
   id: 1
 }
});
console.log(survey.isSuccess)
console.log(survey.data)



  return (
    <div>

      <Routes>

         

        <Route element={

                        <Page withPadding title={"Survey App"} actions={<Logout />}>

                                {isSuccess

                                    ? <Welcome sx={{ mb: 50 }} survey={survey} />

                                    : "loading time..."}

                        </Page>} path="/" default />

       

        <Route element={

                      <Questions questions = {questions} />} path="/questions" />

         

      </Routes>

       

    </div>
  );
};
