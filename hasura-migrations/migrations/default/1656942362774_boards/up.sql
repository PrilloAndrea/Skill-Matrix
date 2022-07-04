CREATE TABLE IF NOT EXISTS boards(
board_id serial,
name varchar(50) NOT NULL,
CONSTRAINT "boards_pkey" PRIMARY KEY(board_id)
);
