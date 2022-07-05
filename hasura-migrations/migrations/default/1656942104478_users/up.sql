CREATE TABLE IF NOT EXISTS users(
user_id serial,
name TEXT NOT NULL,
CONSTRAINT "users_pkey" PRIMARY KEY(user_id)
);
