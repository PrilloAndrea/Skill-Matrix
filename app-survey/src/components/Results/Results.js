import Page from "../Page";
import { Logout } from "../../features/app/Logout";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { Button , Box} from "@mui/material";
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
                    <td>{results.score}</td>
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
          <Box>
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
          </Box>
        </Page>
      )}
    </>
  );
};

export default Results;