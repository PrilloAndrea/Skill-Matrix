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
import { useNavigate } from "react-router-dom";



const BASE_URL = "https://8080-prilloandre-skillmatrix-okqhuy4swbm.ws-eu53.gitpod.io/v1/graphql";
const ADMIN_SECRET = "hasura";

const Questions = (props) => {

  // Get Questions query
const QUESTION_ACTION_QUERY = gql`
query getQuestions($id: Int!) {
  questions(where: {survey_id: {_eq: $id}}) {
    data
    etag
    id
    is_deleted
    type
    survey_id
    survey {
      board_id
    }
  }
}

`;

console.log(props)

const questions = useQuery("QuestionAction", QUESTION_ACTION_QUERY,
 {
  variables: {
    id: parseInt(props?.decodeToken['https://hasura.io/jwt/claims']['x-hasura-survey-id'])
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
    }
    else {
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

  //Rating value
  const [value, setValue] = useState(0);
  console.log(value);

  const handleChange = (event ,newAValue) => {
    setValue(event.target.value);
    setValue(newAValue);
  };

  

  const save = () =>{

    handleNext();
    console.log("start")
    axios({
      url: BASE_URL,
      method: "POST",
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET,
      },
      data: {
        variables: {
          question_id: index + 1,
          board_id: questions?.data?.questions?.[index].survey.board_id,
          survey_id: questions?.data?.questions?.[index].survey_id,
          user_id: parseInt(props?.decodeToken['https://hasura.io/jwt/claims']['x-hasura-user-id']),
          question_etag: "2016-07-20T17:30:15+05:30",
          score: value,
          data:"temp"
        },
        query: `
        mutation createAnswer($question_id: Int!, $board_id: Int!, $survey_id: Int!, $user_id: Int!, $question_etag: timestamptz, $score: smallint!, $data: json) {
  
          insert_answers_one(object: {question_id: $question_id, board_id: $board_id, survey_id: $survey_id, question_etag: $question_etag, user_id: $user_id, score: $score, data: $data}, on_conflict: {constraint: answer_pkey, update_columns: score, where: {question_id: {_is_null: false}}}) {
            board_id
            data
            question_id
            survey_id
            user_id
            score
          }
        }
        `,
      },
    })
    .then(res => console.log(res.data))
    .catch((err)=>{
      console.log(err);
    });

    console.log("end")
    setValue(0)

  }

  return (
    <>
      <Page withPadding title={"Survey App"} actions={<Logout />}>
        {questions?.isSuccess ? (
          <Container maxWidth="sm">
            <FormControl sx={{ width: 1 }}>
              <FormLabel sx={{ lineHeight: 'normal' }}>
                <Box >
                  <h1 style={{ color: "blue", textAlign: "center" }}>
                    {questions?.data?.questions?.[index].data?.Question}
                  </h1>
                </Box>
              </FormLabel>

              <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center">
                {(() => {
                  if (
                    questions?.data?.questions?.[index].type === "type1"
                  ) {
                    return (
                      <div style={{display: "flex", alignItems: "center"}}>
                        <Box
                          sx={{
                            "& > legend": { mt: 2 }
                          }}
                        >
                          <Typography component="legend"></Typography>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={handleChange}
                            defaultValue={0} 
                          />
                        </Box>
                      </div>
                    );
                  } else if (
                    questions?.data?.questions?.[index].type === "type2"
                  ) {
                    return (
                      <div>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Score
                            }
                            control={<Radio />}
                            label={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Score
                            }
                            control={<Radio />}
                            label={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Score
                            }
                            control={<Radio />}
                            label={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Score
                            }
                            control={<Radio />}
                            label={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Answer
                            }
                          />
                        </RadioGroup>
                      </div>
                    );
                  } else if (
                    questions?.data?.questions?.[index].type === "type3"
                  ) {
                    return (
                      <div>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Score
                            }
                            control={<Radio />}
                            label={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Score
                            }
                            control={<Radio />}
                            label={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Answer
                            }
                          />
                        </RadioGroup>
                      </div>
                    );
                  } else if (
                    questions?.data?.questions?.[index].type === "type4"
                  ) {
                    return (
                      <div>
                        <ToggleButtonGroup
                          color="primary"
                          value={value}
                          exclusive
                          onChange={ handleChange }
                        >
                          <ToggleButton
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Score
                            }
                          >
                            {
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Answer
                            }
                          </ToggleButton>

                          <ToggleButton
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Score
                            }
                          >
                            {
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Answer
                            }
                          </ToggleButton>
                          <ToggleButton
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Score
                            }
                          >
                            {
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Answer
                            }
                          </ToggleButton>
                          <ToggleButton
                            value={
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Score
                            }
                          >
                            {
                              questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Answer
                            }
                          </ToggleButton>
                        </ToggleButtonGroup>
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
            <br/>
            <br/>
            <hr/>
            Your progress is {index + 1 } / {maxLength + 1}
          </Container>
        ) : (
          <Loading />
        )}
      </Page>
    </>
  );
};

export default Questions;