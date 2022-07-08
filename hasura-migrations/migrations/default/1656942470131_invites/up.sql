CREATE TABLE IF NOT EXISTS invites(
survey_id INT NOT NULL,
user_id INT NOT NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
CONSTRAINT "surveys_invites_pkey" PRIMARY KEY (survey_id , user_id),
CONSTRAINT "surveys_invites_survey_id_fkey" FOREIGN KEY(survey_id) REFERENCES surveys(id),
CONSTRAINT "surveys_invites_user_id_fkey" FOREIGN KEY(user_id) REFERENCES users(id)
);
