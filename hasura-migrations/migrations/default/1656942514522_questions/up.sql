CREATE TABLE IF NOT EXISTS questions(
question_id serial NOT NULL,
board_id INT NOT NULL,
type TEXT NOT NULL,
data JSON NOT NULL,
is_deleted BOOLEAN NOT NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
CONSTRAINT "question_pkey" PRIMARY KEY(question_id , created_at),
CONSTRAINT "questions_board_id_fkey" FOREIGN KEY(board_id) REFERENCES boards(board_id)
);
