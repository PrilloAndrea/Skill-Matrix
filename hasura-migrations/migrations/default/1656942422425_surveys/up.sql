CREATE TABLE IF NOT EXISTS surveys(
id serial NOT NULL,
board_id INT NOT NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
opens_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
closes_at TIMESTAMPTZ NOT NULL DEFAULT  clock_timestamp() + '1w'::interval,
CONSTRAINT "surveys_pkey" PRIMARY KEY(id),
CONSTRAINT "surveys_board_id_fkey" FOREIGN KEY(board_id) REFERENCES boards(id)
);


