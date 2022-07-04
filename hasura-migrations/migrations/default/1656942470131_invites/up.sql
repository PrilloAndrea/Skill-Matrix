CREATE TABLE IF NOT EXISTS invites(
survey_id serial,
board_id serial,
FOREIGN KEY(survey_id) REFERENCES survey(survey_id),
FOREIGN KEY(board_id) REFERENCES boards(board_id)
);
