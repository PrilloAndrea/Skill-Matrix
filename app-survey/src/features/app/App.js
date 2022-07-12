import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Questions from "../../components/Questions/Questions";
import './App.css';



const PING_ACTION_QUERY = gql`
  query {
    ping: ping_action {
      timestamp
    }
  }
`;

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


export const App = () => {
 // ReactQuery getPing
 const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);
 console.log(data);


 // ReactQuery getQuestions
 const questions = useQuery("QuestionAction", QUESTION_ACTION_QUERY);
 console.log(questions.data);


 console.log(data)
  return (
    <div>

      <Routes>

         

        <Route element={

                        <Page withPadding title={"Survey App"} actions={<Logout />}>

                                {isSuccess

                                    ? <Welcome sx={{ mb: 50 }}  />

                                    : "loading time..."}

                        </Page>} path="/" default />

       

        <Route element={

                      <Questions questions = {questions} />} path="/questions" />

         

      </Routes>

       

    </div>
  );
};
