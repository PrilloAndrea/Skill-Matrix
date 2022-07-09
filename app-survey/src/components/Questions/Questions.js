import { Button, Container , Box , Radio , RadioGroup , FormControlLabel, FormControl, FormLabel, ButtonGroup , Typography,Rating} from "@mui/material";
import { useState } from "react";


const Questions = (props) => {
  // ReactQuery getQuestions
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
  const [value, setValue] = useState(2);

  //Radio Image value 
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <Container >
      {props?.questions?.isSuccess ? (
        <div>
          

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              <Box
              sx={{
                mt: 30
              }}
            >
              <h1 style={{ color: 'blue', textAlign: "center",  paddingBottom: 45 }}
              >{props?.questions?.data?.questions?.[index].data?.Question}</h1>
              </Box>
            </FormLabel>

            <div>
              {(() => {
                        if (props?.questions?.data?.questions?.[index].type === "type1") {
                          return (
                            <div>
                              <Box
                                sx={{
                                  '& > legend': { mt: 2 },
                                }}
                              >
                                <Typography component="legend"></Typography>
                                <Rating
                                  name="simple-controlled"
                                  value={value}
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                />
                              </Box>
                            </div>
                          )
                        } else if (props?.questions?.data?.questions?.[index].type === "type2") {
                          return (
                            <div>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                
                              >
                                <FormControlLabel
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer1}
                                  control={<Radio />}
                                  label={props?.questions?.data?.questions?.[index].data?.Answers?.Answer1}
                                />
                                <FormControlLabel
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer2}
                                  control={<Radio />}
                                  label={props?.questions?.data?.questions?.[index].data?.Answers?.Answer2}
                                />
                                <FormControlLabel
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer3}
                                  control={<Radio />}
                                  label={props?.questions?.data?.questions?.[index].data?.Answers?.Answer3}
                                />
                                <FormControlLabel 
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer4} 
                                  control={<Radio />} 
                                  label={props?.questions?.data?.questions?.[index].data?.Answers?.Answer4} />
                              </RadioGroup>
                            </div>
                          )
                        } else if (props?.questions?.data?.questions?.[index].type === "type3") {
                          return (
                            <div>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                
                              >
                                <FormControlLabel
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer1}
                                  control={<Radio />}
                                  label={ <img
                                    src='https://assets.reedpopcdn.com/marvels-spider-man-1533217236862.jpg/BROK/thumbnail/1200x1200/quality/100/marvels-spider-man-1533217236862.jpg'
                                    className='img-fluid'
                                    alt='tst'
                                  />}
                                />
                                <FormControlLabel
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer2}
                                  control={<Radio />}
                                  label={ <img
                                    src='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_41/3513181/211017-superman-2x1-mn-1355.jpg'
                                    className='img-fluid'
                                    alt='tst'
                                  />}
                                />
                                <FormControlLabel
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer3}
                                  control={<Radio />}
                                  label={ <img
                                    src='https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png'
                                    className='img-fluid'
                                    alt='tst'
                                  />}
                                />
                                
                                <FormControlLabel 
                                  value={props?.questions?.data?.questions?.[index].data?.Answers?.Answer4} 
                                  control={<Radio />} 
                                  label={ <img
                                    src='https://e7.pngegg.com/pngimages/75/572/png-clipart-captain-america-captain-america.png'
                                    className='img-fluid'
                                    alt='tst'
                                  />} />
                              </RadioGroup>
                            </div>
                          )
                        } else if (props?.questions?.data?.questions?.[index].type === "type4") {
                          return (
                            <div>otherCase</div>
                          )
                        } 
                      }
                )()}

            </div>
            
            
            
          </FormControl>
        </div>
      ) : (
        "loading time..."
      )}
      <div className="flex-btn" style={{paddingTop: 45,}}>
        <Button
          variant="contained"
          disabled={index === 0}
          onClick={handlePrevious}
        >
          Prev
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>

      </div>
      
      </Container>
  );
};

export default Questions;
