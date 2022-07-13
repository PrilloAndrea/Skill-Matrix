
CREATE VIEW "public"."results" AS
SELECT a.question_id , a.survey_id, q.data, q.type , a.user_id , a.score
FROM answers AS a
INNER JOIN questions AS q
ON a.question_id = q.id;

