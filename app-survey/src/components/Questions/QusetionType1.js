import {
    Box,
    Typography,
    Rating,
  } from "@mui/material";
const QuestionType1 = (props) => {

  console.log(props);


  return (
    <Box
                          sx={{
                            "& > legend": { mt: 2 }
                          }}
                        >
                          <Typography component="legend"></Typography>
                          <Rating
                            name="simple-controlled"
                            value={props.value}
                            onChange={props.handleChange}
                            defaultValue={0}
                          />
                        </Box>
  );
};

export default QuestionType1;
