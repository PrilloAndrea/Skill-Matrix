import {
    Radio,
    RadioGroup,
    FormControlLabel
  } from "@mui/material";
const QuestionType3 = (props) => {

  console.log(props);


  return (
    <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={props.handleChange}
                        >
                          <FormControlLabel
                            value={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer1?.Score
                            }
                            control={<Radio />}
                            label={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer1?.Answer
                            }
                          />
                          <FormControlLabel
                            value={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer2?.Score
                            }
                            control={<Radio />}
                            label={
                                props.questions?.data?.questions?.[props.index].data?.Answers
                                ?.Answer2?.Answer
                            }
                          />
                        </RadioGroup>
  );
};

export default QuestionType3;
