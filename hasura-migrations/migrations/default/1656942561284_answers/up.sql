CREATE TABLE IF NOT EXISTS answers(
answer_id serial,
user_id serial,
survey_id serial,
question_id serial,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW(),
score INT CHECK (SCORE BETWEEN 0 AND 100),
CONSTRAINT "answer_pkey" PRIMARY KEY (answer_id),
FOREIGN KEY(user_id) REFERENCES users(user_id)
);
