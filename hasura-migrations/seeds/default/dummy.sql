--/////////////////////////////////////////////////////////////////////////////////////--
--Inserted values into users table.
INSERT INTO "public"."users" ("user_id", "name")

SELECT

u AS "user_id",
CONCAT('User', "u") AS "name"

FROM generate_series(1, 10) AS "u"

ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET
"name" = EXCLUDED."name";

--//////////////////////////////////////////////////////////////////////////////////////////////--
--Inserted values into table boards.

INSERT INTO "public"."boards" ("board_id", "name")

SELECT

b AS "board_id",
CONCAT('Board', "b") AS "name"

FROM generate_series(1, 10) AS "b"

ON CONFLICT ON CONSTRAINT "boards_pkey"
DO UPDATE SET
"name" = EXCLUDED."name";

--//////////////////////////////////////////////////////////////////////////////////////////////--
--Inserted into values into Admins table
INSERT INTO "public"."boards_admins" ("board_id", "user_id")
 
SELECT 
  b AS "board_id",
  (floor(random() * (10 - 1 + 1) + 1)) AS "user_id"
 
FROM generate_series(1, 2) AS "b"
;


--//////////////////////////////////////////////////////////////////////////////////////////////--
--Inserted into table surveys.

INSERT INTO "public"."survey" ("board_id", "created_at", "updated_at", "opens_at" , "closes_at")
 
SELECT
 
  (floor(random() * (10 - 1 +1) +1)) AS "board_id",
 
  now() - '30d'::INTERVAL * random() AS "created_at",
 
now() - '30d'::INTERVAL * random() AS "updated_at",
 
now() - '30d'::INTERVAL * random() AS "opens_at",
 
now() + '7d'::INTERVAL * random() AS "closes_at"
 
 
 
  FROM generate_series(1, 5) AS "survey"
 
 
 
ON CONFLICT ON CONSTRAINT "survey_pkey"
 
DO UPDATE SET  
 
  "created_at" = EXCLUDED."created_at",
 
"updated_at" = EXCLUDED."updated_at",
 
"opens_at" = EXCLUDED."opens_at",
 
"closes_at" = EXCLUDED."closes_at" ;


--///////////////////////////////////////////////////////////////////////////////////////////--
--Insert into table questions


INSERT INTO "public"."questions" ("board_id", "type", "data", "created_at")
 
 
 
SELECT
 
  (floor(random() * (10 - 1 +1) +1)) AS "board_id",
 
  'checkbox' AS "type",
 
'{"question":"WHo","Answers":["1","2"]}' AS "data",
 
 
  now() - '30d'::INTERVAL * random() AS "created_at"
 
 
 
 FROM generate_series(1, 50) AS "question"
 
ON CONFLICT ON CONSTRAINT "question_pkey"
 
DO UPDATE SET  
 
  "board_id" = EXCLUDED."board_id",
 
  "created_at" = EXCLUDED."created_at",
 
"type" = EXCLUDED."type",
 
    "is_deleted" = EXCLUDED."is_deleted",
 
    "data" = EXCLUDED."data";


    --///////////////////////////////////////////////////////////////////////////////////////////--
    --Inserted values into aswers

INSERT INTO "public"."answers" ("user_id", "board_id", "question_id", "created_at", "updated_at", "score", "notes", "data")
 
SELECT
 
  (floor(random() * (10 - 1 +1) +1)) AS "user_id",
 
  (floor(random() * (10 - 1 +1) +1)) AS "board_id",
 
  (floor(random() * (10 - 1 +1) +1)) AS "question_id",
 
  now() - '30d'::INTERVAL * random() AS "created_at",
 
  now() - '30d'::INTERVAL * random() AS "updated_at",
 
  '1' AS "score",
 
  CONCAT('answer', "answer") AS "notes",
 
 '{"Car":"BMW"}' AS "data"
 
 
 
    FROM generate_series(1, 50) AS "answer"
 
 
 
ON CONFLICT ON CONSTRAINT "answer_pkey"
 
DO UPDATE SET  "user_id" = EXCLUDED."user_id",
 
  "board_id" = EXCLUDED."board_id",
 
  "question_id" = EXCLUDED."question_id",
 
  "created_at" = EXCLUDED."created_at",
 
  "updated_at" = EXCLUDED."updated_at",
 
  "score" = EXCLUDED."score",
 
"notes" = EXCLUDED."notes",
 
"data" = EXCLUDED."data";

