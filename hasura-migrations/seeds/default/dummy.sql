--/////////////////////////////////////////////////////////////////////////////////////--
--Inserted values into users table.

INSERT INTO "public"."users" ("id", "name")

SELECT

u AS "id",
CONCAT('User', "u") AS "name"

FROM generate_series(1, 5) AS "u"

ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET
"name" = EXCLUDED."name";

--//////////////////////////////////////////////////////////////////////////////////////////////--
--Inserted values into table boards.

INSERT INTO "public"."boards" ("id", "name")

SELECT

b AS "id",
CONCAT('Board', "b") AS "name"

FROM generate_series(1, 2) AS "b"

ON CONFLICT ON CONSTRAINT "boards_pkey"
DO UPDATE SET
"name" = EXCLUDED."name";

--//////////////////////////////////////////////////////////////////////////////////////////////--
--Inserted into values into Admins table
INSERT INTO "public"."boards_admins" ("board_id", "user_id")
 
SELECT 
  b AS "board_id",
  (floor(random() * (2 - 1 + 1) + 1)) AS "user_id"
 
FROM generate_series(1, 2) AS "b" ;


--//////////////////////////////////////////////////////////////////////////////////////////////--
--Inserted into table surveys.

INSERT INTO "public"."surveys" ("board_id", "created_at", "updated_at", "opens_at" , "closes_at")
 
SELECT
 
  (floor(random() * 2 - 1 +1) +1) AS "board_id",
 
  now() - '30d'::INTERVAL * random() AS "created_at",
 
now() - '30d'::INTERVAL * random() AS "updated_at",
 
now() - '30d'::INTERVAL * random() AS "opens_at",
 
now() + '7d'::INTERVAL * random() AS "closes_at"
 
 
 
  FROM generate_series(1, 2) AS "surveys"
 
 
 
ON CONFLICT ON CONSTRAINT "surveys_pkey"
 
DO UPDATE SET  
 
  "created_at" = EXCLUDED."created_at",
 
"updated_at" = EXCLUDED."updated_at",
 
"opens_at" = EXCLUDED."opens_at",
 
"closes_at" = EXCLUDED."closes_at" ;


--///////////////////////////////////////////////////////////////////////////////////////////--
--Insert into table questions


 INSERT INTO "public"."questions" ("etag","survey_id","type","data")

 VALUES (clock_timestamp() , 1 , 'type1' , '{ "Question": "How was this experience?"}' ),
 (clock_timestamp() , 1 , 'type2' , '{ "Question" : "Whats favourite programming language?", "Answers" : { "Answer1" : {"Answer":"Javascript","Score":25},"Answer2" : {"Answer":"Java","Score":50},"Answer3":{"Answer":"C++","Score":75},"Answer4":{"Answer":"Python","Score":100}}}' ),
 (clock_timestamp() , 1 , 'type3' , '{ "Question" : "Did you liked react?", "Answers" : { "Answer1":{"Answer":"Yes","Score":100},"Answer2":{"Answer":"No","Score":0}}}' ),
 (clock_timestamp() , 1 , 'type4' , '{ "Question" : "Whats your favourite javascript library?", "Answers": { "Answer1" : {"Answer":"jQuery","Score":25}, "Answer2" : {"Answer":"React","Score":50}, "Answer3" : {"Answer":"Lodash","Score":75},"Answer4" : {"Answer":"Chart","Score":100}}}' ),
 (clock_timestamp() , 1 , 'type1' , '{ "Question": "How was your project?"}' ),
 (clock_timestamp() , 1 , 'type2' , '{ "Question" : "Whats your favourite part of the project?", "Answers" : { "Answer1" : {"Answer":"Backend","Score":25},"Answer2" : {"Answer":"Hasura","Score":50},"Answer3":{"Answer":"Postgres","Score":75},"Answer4":{"Answer":"React","Score":100}}}' ),
 (clock_timestamp() , 1 , 'type3' , '{ "Question" : "Do you feel cofident to go on with the project?", "Answers" : { "Answer1":{"Answer":"Yes","Score":100},"Answer2":{"Answer":"No","Score":0}}}' ),
 (clock_timestamp() , 1 , 'type4' , '{ "Question" : "What part do you feel more cofident?", "Answers": { "Answer1" : {"Answer":"Backend","Score":25}, "Answer2" : {"Answer":"Postgres","Score":50}, "Answer3" : {"Answer":"Hasura","Score":75},"Answer4" : {"Answer":"React","Score":100}}}' ),
 (clock_timestamp() , 1 , 'type1' , '{ "Question": "Rate your teammates?"}' ),
 (clock_timestamp() , 2 , 'type1' , '{ "Question": "Survey 2 questions?"}' )
 

 ;
