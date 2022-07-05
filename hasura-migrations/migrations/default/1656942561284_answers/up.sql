CREATE TABLE IF NOT EXISTS answers(
answer_id BIGSERIAL NOT NULL,
board_id INT NOT NULL,
user_id INT NOT NULL,
question_id serial,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW(),
score SMALLINT NOT NULL,
data JSON NOT NULL DEFAULT'{}',
notes TEXT,
CONSTRAINT "answer_pkey" PRIMARY KEY (answer_id),
CONSTRAINT "answers_board_id_fkey" FOREIGN KEY(user_id) REFERENCES users(user_id),
CONSTRAINT "answers_user_id_fkey" FOREIGN KEY("board_id") REFERENCES "boards"("board_id")
);
