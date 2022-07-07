import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Routes, Route } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Questions from "../../components/Questions/Questions";
import { spacing } from '@mui/system';



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

                      <Questions />} path="/questions" />

         

      </Routes>

       

    </div>
  );
};
