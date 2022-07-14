
import { gql } from "../../services/hasura-client";


// Results query
export const RESULTS_ACTION_QUERY = gql`
query getResults($user_id: Int!) {
  results(where: {user_id: {_eq: $user_id}}) {
    question_id
    survey_id
    user_id
    data
    score
    type
  }
}

`;


// Ping query
export const PING_ACTION_QUERY = gql`
query {
  ping: ping_action {
    timestamp
  }
}
`;



  // Get Questions query
  export const QUESTION_ACTION_QUERY = gql`
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



  // Post Answer query
  export const ANSWER_ACTION_QUERY = gql`
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
        `