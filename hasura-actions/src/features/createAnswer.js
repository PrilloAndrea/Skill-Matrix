const routeHandler = (request, reply) => {
    request.log.info(JSON.stringify(request.body, null, 7));
    reply.send({
        answer_id: request.body.answer_id,
        board_id: request.body.board_id,
        data: request.body.data, 
        question_id: request.body.question_id,
        score: request.body.score,
        survey_id: request.body.survey_id,
        user_id: request.body.user_id
    });
  };
  
  module.exports = [
    {
      name: "createAnswer",
      target: "$FASTIFY_ROUTE",
      handler: {
        method: "POST",
        url: "/act/createAnswer",
        handler: routeHandler
      }
    }
  ];
  