import { useQuery, gql } from "../../services/hasura-client";
import { Button } from '@mui/material';
import { useState } from "react";




const Questions = (props) => {


    // ReactQuery getQuestions
    console.log(props?.questions?.data?.questions)


    const [index, setIndex]= useState(0);
    console.log(props?.questions?.data?.questions[index])
    const [disabled, setDisabled]=useState(false);


  
    const handleNext = () => {
      if(index < props?.questions?.data?.questions?.length - 1 ){
          setIndex(index+1);
          console.log(props?.questions?.data?.questions[index])
       }
       else{
        setIndex(index);
       }
  }

    const handlePrevious = () => {
      if(index >= 0){
          setIndex(index-1);
          console.log(props?.questions?.data?.questions[index])
        }
  }

    return (

      <div>

           {props?.questions?.isSuccess

              ? <div>

                          <p>{props?.questions?.data?.questions?.[index].data?.Question}</p>

                          <p>{props?.questions?.data?.questions?.[index].data?.Answers?.Answer1}</p>

                          <p>{props?.questions?.data?.questions?.[index].data?.Answers?.Answer2}</p>

                          <p>{props?.questions?.data?.questions?.[index].data?.Answers?.Answer3}</p>
                          
                          <p>{props?.questions?.data?.questions?.[index].data?.Answers?.Answer4}</p>
                      
                 </div>

              : "loading time..."}

          
          <Button variant="contained" disabled={index === 0} onClick={handlePrevious}>
          Prev
          </Button>
          <Button variant="contained" onClick={handleNext}>
          Next
          </Button>
          


      </div>



  )
   


}


export default Questions;