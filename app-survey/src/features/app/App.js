import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Questions from "../../components/Questions/Questions";
import { useEffect, useState } from "react";
import jwt from "jwt-decode";
import './App.css';

// Ping query
const PING_ACTION_QUERY = gql`
  query {
    ping: ping_action {
      timestamp
    }
  }
`;






export const App = () => {


 

 // ReactQuery getPing
 const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);
 console.log(data);

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
  return (
    <div>

      <Routes>

         

        <Route element={

                        <Page withPadding title={"Survey App"} actions={<Logout />}>

                                {isSuccess

                                    ? <Welcome sx={{ mb: 50 }}  decodeToken={decodeToken}/>

                                    : "loading time..."}

                        </Page>} path="/" default />

       

        <Route element={

                      <Questions decodeToken={decodeToken} />} path="/questions" />

         

      </Routes>

       

    </div>
  );
};
