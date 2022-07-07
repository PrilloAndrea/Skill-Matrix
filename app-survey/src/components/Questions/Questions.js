import { useQuery, gql } from "../../services/hasura-client";



const QUESTION_ACTION_QUERY = gql`

query QuestionAction {

  questions {

    board_id

    created_at

    data

    is_deleted

    question_id

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



           Test



        </div>



    )



}



export default Questions;