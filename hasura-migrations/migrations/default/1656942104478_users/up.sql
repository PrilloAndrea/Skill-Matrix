CREATE TABLE IF NOT EXISTS users(
id serial,
name TEXT NOT NULL,
CONSTRAINT "users_pkey" PRIMARY KEY(id)
);
