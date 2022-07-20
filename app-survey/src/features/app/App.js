import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Questions from "../../components/Questions/Questions";
import { useEffect, useState } from "react";
import './App.css';
import Loading from "../../components/Loading/Loading";
import Results from "../../components/Results/Results";
import * as query from '../../components/Querys'



export const App = () => {



 // ReactQuery getPing
 const { isSuccess, data } = useQuery("PingAction", query.PING_ACTION_QUERY);
 console.log(data);


  // Get UserLOgin query
  const user = useQuery("UserAction", query.User_ACTION_QUERY);
  console.log(user?.data);
 
  // ReactQuery getSyrvey
  const survey = useQuery("SurveyAction", query.SURVEY_ACTION_QUERY);
  console.log(survey.isSuccess)
  console.log(survey.data);


 // ReactQuery getResults
const results = useQuery("QuestionAction", query.RESULTS_ACTION_QUERY,
 {
  variables: {
    user_id: user?.data?.users[0]?.id,
    survey_id: survey.data?.surveys[0].id
  }
 });

 
  return (
    <div>

      <Routes>

        <Route element={

                        <Page withPadding title={"Survey App"} actions={<Logout />}>

                                {isSuccess

                                    ? <Welcome survey={survey} sx={{ mb: 50 }} />

                                    : <Loading />}

                        </Page>} path="/" default />

       

        <Route element={

                      <Questions user={user} />} path="/questions" />
        

        <Route element={

                        <Results  results={results} />} path="/results" />

         

      </Routes>

       

    </div>
  );
};
