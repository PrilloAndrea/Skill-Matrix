import Page from "../Page";
import { Logout } from "../../features/app/Logout";
import { useQuery, gql } from "../../services/hasura-client";
import Loading from "../Loading/Loading";

const Results = (props) => {

  console.log(props);

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
    </>
  );
};

export default Results;
