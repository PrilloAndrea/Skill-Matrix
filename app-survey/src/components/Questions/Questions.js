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
  Container
} from "@mui/material";
import { useState } from "react";
import Page from "../Page";
import { Logout } from "../../features/app/Logout";
import axios from 'axios';

const BASE_URL = "https://8080-prilloandre-skillmatrix-4tgr2at8u12.ws-eu53.gitpod.io/v1/graphql";
const ADMIN_SECRET = "hasura";

const Questions = (props) => {
  // ReactQuery getQuestions by props
  console.log(props?.questions?.data?.questions);

  // Index controlling questions one by one
  const [index, setIndex] = useState(0);
  console.log(props?.questions?.data?.questions[index]);

  //Function go to next question
  const handleNext = () => {
    if (index < props?.questions?.data?.questions?.length - 1) {
      setIndex(index + 1);
      console.log(props?.questions?.data?.questions[index]);
    } else {
      setIndex(index);
    }
  };

  //Function go to prev question
  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1);
      console.log(props?.questions?.data?.questions[index]);
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
          board_id: 1,
          survey_id: 1,
          user_id: 1,
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
        {props?.questions?.isSuccess ? (
          <Container maxWidth="sm">
            <FormControl sx={{ width: 1 }}>
              <FormLabel>
                <Box>
                  <h1 style={{ color: "blue", textAlign: "center" }}>
                    {props?.questions?.data?.questions?.[index].data?.Question}
                  </h1>
                </Box>
              </FormLabel>

              <div>
                {(() => {
                  if (
                    props?.questions?.data?.questions?.[index].type === "type1"
                  ) {
                    return (
                      <div>
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
                          />
                        </Box>
                      </div>
                    );
                  } else if (
                    props?.questions?.data?.questions?.[index].type === "type2"
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
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Score
                            }
                            control={<Radio />}
                            label={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Score
                            }
                            control={<Radio />}
                            label={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Score
                            }
                            control={<Radio />}
                            label={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Score
                            }
                            control={<Radio />}
                            label={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Answer
                            }
                          />
                        </RadioGroup>
                      </div>
                    );
                  } else if (
                    props?.questions?.data?.questions?.[index].type === "type3"
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
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Score
                            }
                            control={<Radio />}
                            label={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Score
                            }
                            control={<Radio />}
                            label={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Answer
                            }
                          />
                        </RadioGroup>
                      </div>
                    );
                  } else if (
                    props?.questions?.data?.questions?.[index].type === "type4"
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
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Score
                            }
                          >
                            {
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer1?.Answer
                            }
                          </ToggleButton>

                          <ToggleButton
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Score
                            }
                          >
                            {
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer2?.Answer
                            }
                          </ToggleButton>
                          <ToggleButton
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Score
                            }
                          >
                            {
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer3?.Answer
                            }
                          </ToggleButton>
                          <ToggleButton
                            value={
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Score
                            }
                          >
                            {
                              props?.questions?.data?.questions?.[index].data
                                ?.Answers?.Answer4?.Answer
                            }
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    );
                  }
                })()}
              </div>
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
          </Container>
        ) : (
          "loading time..."
        )}
      </Page>
    </>
  );
};

export default Questions;