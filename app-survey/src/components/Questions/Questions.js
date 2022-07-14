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
  LinearProgress,
  Grid
} from "@mui/material";
import { useState } from "react";
import Page from "../Page";
import { Logout } from "../../features/app/Logout";
import axios from "axios";
import { useQuery, gql } from "../../services/hasura-client";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import * as query from "../Querys";
import QuestionType1 from "./QusetionType1";
import QuestionType2 from "./QuestionType2";
import QuestionType3 from "./QuestionType3";
import QuestionType4 from "./QuestionType4";


const BASE_URL ="https://8080-prilloandre-skillmatrix-xi6bfyo0lms.ws-eu53.gitpod.io/v1/graphql";
const ADMIN_SECRET = "hasura";

const Questions = (props) => {
  // Get Questions query
  console.log(props);
  const questions = useQuery("QuestionAction", query.QUESTION_ACTION_QUERY, {
    variables: {
      id: parseInt(
        props?.decodeToken["https://hasura.io/jwt/claims"]["x-hasura-survey-id"]
      )
    }
  });
  console.log(questions?.data);

  // ReactQuery getQuestions by props
  console.log(questions?.data?.questions);

  // Index controlling questions one by one
  const [index, setIndex] = useState(0);
  console.log(questions?.data?.questions[index]);
  const maxLength = questions?.data?.questions?.length - 1;

  const navigate = useNavigate();

  //Function go to next question
  const handleNext = () => {
    if (index < questions?.data?.questions?.length - 1) {
      setIndex(index + 1);
      console.log(questions?.data?.questions[index]);
    } else if (maxLength) {
      navigate("/results");
      window.location.reload();
    } else {
      setIndex(index);
    }
  };

  //Function go to prev question
  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1);
      console.log(questions?.data?.questions[index]);
    }
  };

  //Score value
  const [value, setValue] = useState(0);
  console.log(value);

  const handleChange = (event, newAValue) => {
    setValue(event.target.value);
    setValue(newAValue);
  };

  // Save answer function
  const save = () => {
    handleNext();
    console.log("start");
    axios({
      url: BASE_URL,
      method: "POST",
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET
      },
      data: {
        variables: {
          question_id: index + 1,
          board_id: questions?.data?.questions?.[index].survey.board_id,
          survey_id: questions?.data?.questions?.[index].survey_id,
          user_id: parseInt(
            props?.decodeToken["https://hasura.io/jwt/claims"][
              "x-hasura-user-id"
            ]
          ),
          question_etag: "2016-07-20T17:30:15+05:30",
          score: value,
          data: "temp"
        },
        query: query.ANSWER_ACTION_QUERY
      }
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    console.log("end");
    setValue(0);
  };

  //Normalise value for progres line
  const normalise = (value) => ((value - 0) * 100) / (maxLength - 0);

  return (
    <>
      <Page withPadding title={"Survey App"} actions={<Logout />}>
        {questions?.isSuccess ? (
          <Container maxWidth="sm">
            <FormControl sx={{ width: 1 }}>
              <FormLabel sx={{ lineHeight: "normal" }}>
                <Box>
                  <h1 style={{ color: "blue", textAlign: "center" }}>
                    {questions?.data?.questions?.[index].data?.Question}
                  </h1>
                </Box>
              </FormLabel>

              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                {(() => {
                  if (questions?.data?.questions?.[index].type === "type1") {
                    return (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <QuestionType1 value={value} handleChange={handleChange}/>
                      </div>
                    );
                  } else if (
                    questions?.data?.questions?.[index].type === "type2"
                  ) {
                    return (
                      <div>
                        <QuestionType2 value={value} handleChange={handleChange} questions={questions} index={index} />
                      </div>
                    );
                  } else if (
                    questions?.data?.questions?.[index].type === "type3"
                  ) {
                    return (
                      <div>
                        <QuestionType3 value={value} handleChange={handleChange} questions={questions} index={index} />
                      </div>
                    );
                  } else if (
                    questions?.data?.questions?.[index].type === "type4"
                  ) {
                    return (
                      <div>
                        <QuestionType4 value={value} handleChange={handleChange} questions={questions} index={index} />
                      </div>
                    );
                  }
                })()}
              </Grid>
            </FormControl>
            <div className="flex-btn" style={{ paddingTop: 45 }}>
              <Button
                variant="contained"
                disabled={index === 0}
                onClick={handlePrevious}
              >
                Prev
              </Button>
              <Button variant="contained" onClick={save}>
                Next
              </Button>
            </div>
            <br />
            <br />
            <hr />
            Your progress is {index + 1} / {maxLength + 1}
            <LinearProgress variant="determinate" value={normalise(index)}>  </LinearProgress>
          </Container>
        ) : (
          <Loading />
        )}
      </Page>
    </>
  );
};

export default Questions;
