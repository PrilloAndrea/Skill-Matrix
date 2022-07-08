CREATE TABLE IF NOT EXISTS answers(
id BIGSERIAL NOT NULL,
board_id INT NOT NULL,
survey_id INT NOT NULL,
user_id INT NOT NULL,
question_id INT NOT NULL,
question_etag TIMESTAMPTZ NOT NULL ,
created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
score SMALLINT NOT NULL,
data JSON NOT NULL DEFAULT'{}',
notes TEXT,
CONSTRAINT "answer_pkey" PRIMARY KEY ("id"),
CONSTRAINT "answers_user_id_fkey" FOREIGN KEY("user_id") REFERENCES "users"("id"),
CONSTRAINT "answers_board_id_fkey" FOREIGN KEY("board_id") REFERENCES "boards"("id"),
CONSTRAINT "answers_survey_id_fkey" FOREIGN KEY("survey_id") REFERENCES "surveys"("id"),
CONSTRAINT "answers_question_fkey" FOREIGN KEY ("question_id", "question_etag") REFERENCES "questions"("id", "etag")
);
