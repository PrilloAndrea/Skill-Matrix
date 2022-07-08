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


 INSERT INTO "public"."questions" ("etag","board_id","type","data")

 VALUES (clock_timestamp() , 1 , "type1" , { "Question": "How are you?", "Answers" : { "Answer1" : "I'm good", "Answer2" : "Not good", "Answer3" : "Bad", "Answer4" : "Really bad"}} ),
 (clock_timestamp() , 1 , "type2" , { "Question" : "Whats day is today?", "Answers" : { "Answer1" : "Monday", "Answer2":"Tuesday", "Answer3": "Saturday","Answer4":"Sunday"}} ),
 (clock_timestamp() , 1 , "type3" , { "Question" : "Who is your hero?", "Answers" : { "Answer1":"Spiderman", "Answer2":"Superman", "Answer3": "Hulk","Answer4":"CaptainAmerica"}} ),
 (clock_timestamp() , 1 , "type4" , { "Question" : "If you could live anywhere, where would it be?", "Answers": { "Answer1": "America", "Answer2": "Germany", "Answer3": "Australia","Answer4": "China"}} ),
