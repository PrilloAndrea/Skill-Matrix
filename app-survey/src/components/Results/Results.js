import Page from "../Page";
import { Logout } from "../../features/app/Logout";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { Button , Box,Grid} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const Results = (props) => {
  console.log(props);

  console.log(props.results?.data);

  const [btn, setBtn] = useState(false);

  return (
    <>
      {btn ? (
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
                {props.results?.data?.results.map((results, i) => (
                  <tr key={i}>
                    <td>{results.survey_id}</td>
                    <td>{results.user_id}</td>
                    <td>{results.question_id}</td>
                    <td>{results.data.Question}</td>
                    {
                      results.type === "type1"
                      ?<td>{results.score}/5</td>
                      :<td>{results.score}/100</td>
                    }
                    
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Loading />
          )}
        </Page>
      ) : (
        <Page withPadding title={"Survey App"} actions={<Logout />}>
          <Grid container

spacing={0}

direction="column"

alignItems="center"

justifyContent="center">

<h1>You have submited with success this survey</h1>

<Button

  variant="contained"

  endIcon={<PlayCircleFilledWhiteIcon />}

  onClick={() => {

    setBtn(true);

  }}

>

  View Results

</Button>

</Grid>
        </Page>
      )}
    </>
  );
};

export default Results;
