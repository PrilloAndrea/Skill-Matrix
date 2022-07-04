CREATE TABLE IF NOT EXISTS survey(
survey_id serial,
board_id serial,
open_since TIMESTAMPTZ DEFAULT NOW(),
open_until TIMESTAMPTZ DEFAULT NOW(),
CONSTRAINT "survey_pkey" PRIMARY KEY(survey_id),
FOREIGN KEY(board_id) REFERENCES boards(board_id)
);
