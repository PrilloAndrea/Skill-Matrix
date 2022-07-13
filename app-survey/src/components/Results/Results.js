import {
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
    Typography,
    Rating,
    Container,
    Grid
  } from "@mui/material";
  import { useState } from "react";
  import Page from "../Page";
  import { Logout } from "../../features/app/Logout";
  import axios from 'axios';
  import { useQuery, gql } from "../../services/hasura-client";
  import Loading from "../Loading/Loading";
  

  
  const Results = (props) => {
  
    // Get Results query
  const RESULTS_ACTION_QUERY = gql`
  query getResults($user_id: Int!) {
    results(where: {user_id: {_eq: $user_id}}) {
      question_id
      survey_id
      user_id
      data
      score
      type
    }
  }
  
  `;
  
  console.log(props)
  
  const results = useQuery("QuestionAction", RESULTS_ACTION_QUERY,
   {
    variables: {
      user_id: parseInt(props?.decodeToken['https://hasura.io/jwt/claims']['x-hasura-user-id'])
    }
   });

    console.log(props.results?.data);

  
    return (
      <>
        <Page withPadding title={"Survey App"} actions={<Logout />}>
          {props.results?.isSuccess ? (
              
                <table className="styled-table">
                <thead>
                  <tr>
                    <th className="header">Survey ID</th>
                    <th className="header">User ID</th>
                    <th className="header">Question ID</th>
                    <th className="header">Question</th>
                    <th className="header">Score</th>
                  </tr>
                </thead>
                <tbody>
                { props.results?.data?.results.map((results,i) => (
        
        <tr key={i}>
        <td>{results.survey_id}</td>
        <td>{results.user_id}</td>
        <td>{results.question_id}</td>
        <td>{results.data.Question}</td>
        <td>{results.score}</td>
        </tr>
                
                )) }
                  
                </tbody>
              </table>
              
          ) : (
            <Loading />
          )}
        </Page>
      </>
    );
  };
  
  export default Results;