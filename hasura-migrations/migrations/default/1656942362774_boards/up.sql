CREATE TABLE IF NOT EXISTS boards(
board_id serial NOT NULL,
name TEXT NOT NULL,
CONSTRAINT "boards_pkey" PRIMARY KEY(board_id)
);
