import { useQuery, gql } from "../../services/hasura-client";

const QUESTION_ACTION_QUERY = gql`

query {

  questions(limit: 5) {

    board_id

    created_at

    data

    question_id

    is_deleted

    type

  }

}



`;



const Questions = (props) => {

     

    // ReactQuery getQuestions

    const { isSuccess, data } = useQuery("QuestionAction", QUESTION_ACTION_QUERY);

    console.log(data)



    return (

      <div>

          {data?.questions.map((item) =>

                <div key= {item?.question_id}>

                  <p>{item?.data?.question}</p>

                  <p>{item?.data?.Answers?.Ansewr1}</p>

                  <p>{item?.data?.Answers?.Answer2}</p>

                  <p>{item?.data?.Answers?.Answer3}</p>

                 

                </div>

                 

           ) }


      </div>



  )
   


}



export default Questions;