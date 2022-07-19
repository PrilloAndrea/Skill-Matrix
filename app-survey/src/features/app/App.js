import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Questions from "../../components/Questions/Questions";
import { useEffect, useState } from "react";
import jwt from "jwt-decode";
import './App.css';
import Loading from "../../components/Loading/Loading";
import Results from "../../components/Results/Results";
import * as query from '../../components/Querys'



export const App = () => {



 // ReactQuery getPing
 const { isSuccess, data } = useQuery("PingAction", query.PING_ACTION_QUERY);
 console.log(data);


 //Decode Token
 const token = localStorage.getItem("at");
 const [decodeToken ,setDecodeToken] = useState(jwt(token))

 // Get Token from localStorage
//  useEffect(() => {

    //  const codedToken=jwt(token);
    //  setDecodeToken(codedToken);
    //  console.log(parseInt(decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id']))
//  }, []);

// useEffect(()=> {
//   console.log(decodeToken);
// }, [decodeToken]) 

//  console.log(decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id'])

 // ReactQuery getQuestions

// parseInt(decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id'])



 // ReactQuery getResults
const results = useQuery("QuestionAction", query.RESULTS_ACTION_QUERY,
 {
  variables: {
    user_id: parseInt(decodeToken['https://hasura.io/jwt/claims']['x-hasura-user-id']),
    survey_id: parseInt(decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id'])
  }
 });

  return (
    <div>

      <Routes>

        <Route element={

                        <Page withPadding title={"Survey App"} actions={<Logout />}>

                                {isSuccess

                                    ? <Welcome sx={{ mb: 50 }} />

                                    : <Loading />}

                        </Page>} path="/" default />

       

        <Route element={

                      <Questions decodeToken={decodeToken} />} path="/questions" />
        

        <Route element={

                        <Results decodeToken={decodeToken} results={results} />} path="/results" />

         

      </Routes>

       

    </div>
  );
};
