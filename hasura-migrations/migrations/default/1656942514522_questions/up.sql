CREATE TABLE IF NOT EXISTS questions(
id serial NOT NULL,
etag TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
survey_id INT NOT NULL,
type TEXT NOT NULL,
data JSON NOT NULL,
is_deleted BOOLEAN NOT NULL DEFAULT false ,
CONSTRAINT "questions_pkey" PRIMARY KEY(id),
CONSTRAINT "questions_board_id_fkey" FOREIGN KEY(survey_id) REFERENCES surveys(id)
);
