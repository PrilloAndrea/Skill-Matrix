BEGIN;
SELECT plan(3);

-- Seed required data:


INSERT INTO "public"."boards" VALUES (1, 'foobar');




-- Add some questions:
INSERT INTO "public"."questions" VALUES 
  (1, 1, 'star', '{"v":1}')
, (2, 1, 'star', '{"v":1}')
;


-- Verify that there is only one version for question n.1
SELECT results_eq(
  'SELECT COUNT(*) FROM "public"."questions" WHERE "question_id" = 1',
  $$VALUES ( 1::bigint )$$,
  'QuestionID=1 should have only on record'
);


-- Add a write-only modification to such question:
INSERT INTO "public"."questions" VALUES (1, 1, 'star', '{"v":2}');
SELECT results_eq(
  'SELECT COUNT(*) FROM "public"."questions" WHERE "question_id" = 1',
  $$VALUES ( 2::bigint )$$,
  'QuestionID=1 should have two record'
);

-- Try to get the latest result for a specific question:
SELECT results_eq(
  $$
    SELECT DISTINCT ON ("question_id") "question_id", ("data"->>'v')::int AS "v" 
    FROM "questions" 
    WHERE "question_id" = 1 
    ORDER BY "question_id", "created_at" DESC
  $$,
  $$VALUES ( 1, 2 )$$,
  'It should return the latest version of a given record'
);

SELECT * FROM finish();
ROLLBACK;