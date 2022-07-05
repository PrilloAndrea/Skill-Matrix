CREATE TABLE IF NOT EXISTS survey(
survey_id serial NOT NULL,
board_id INT NOT NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
opens_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
closes_at TIMESTAMPTZ NOT NULL DEFAULT NOW() + '1w'::interval,
CONSTRAINT "survey_pkey" PRIMARY KEY(survey_id),
CONSTRAINT "survey_board_id_fkey" FOREIGN KEY(board_id) REFERENCES boards(board_id)
);


