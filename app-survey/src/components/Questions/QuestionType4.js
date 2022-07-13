import {
    ToggleButtonGroup,
    ToggleButton
  } from "@mui/material";
const QuestionType4 = (props) => {

  console.log(props);


  return (
    <ToggleButtonGroup
                          color="primary"
                          value={props.value}
                          exclusive
                          onChange={props.handleChange}
                        >
                          <ToggleButton
                            value={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer1?.Score
                            }
                          >
                            {
                              props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer1?.Answer
                            }
                          </ToggleButton>

                          <ToggleButton
                            value={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer2?.Score
                            }
                          >
                            {
                              props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer2?.Answer
                            }
                          </ToggleButton>
                          <ToggleButton
                            value={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer3?.Score
                            }
                          >
                            {
                              props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer3?.Answer
                            }
                          </ToggleButton>
                          <ToggleButton
                            value={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer4?.Score
                            }
                          >
                            {
                              props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer4?.Answer
                            }
                          </ToggleButton>
                        </ToggleButtonGroup>
  );
};

export default QuestionType4;
