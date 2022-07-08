CREATE TABLE IF NOT EXISTS questions(
id serial NOT NULL,
etag TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
board_id INT NOT NULL,
type TEXT NOT NULL,
data JSON NOT NULL,
is_deleted BOOLEAN NOT NULL DEFAULT false ,
CONSTRAINT "questions_pkey" PRIMARY KEY(id , etag),
CONSTRAINT "questions_board_id_fkey" FOREIGN KEY(board_id) REFERENCES boards(id)
);
