CREATE TABLE IF NOT EXISTS questions(
question_id serial,
board_id serial,
type TEXT NOT NULL,
data JSONB NOT NULL,
etag TEXT NOT NULL,
is_deleted BOOLEAN NOT NULL,
CONSTRAINT "question_pkey" PRIMARY KEY(question_id),
FOREIGN KEY(board_id) REFERENCES boards(board_id)
);
