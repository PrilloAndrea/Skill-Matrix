CREATE TABLE IF NOT EXISTS boards(
id serial NOT NULL,
name TEXT NOT NULL,
CONSTRAINT "boards_pkey" PRIMARY KEY(id)
);
