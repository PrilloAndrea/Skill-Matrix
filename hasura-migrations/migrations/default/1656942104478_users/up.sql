CREATE TABLE IF NOT EXISTS users(
user_id serial,
name varchar(50) NOT NULL,
settings varchar(50) NOT NULL,
CONSTRAINT "users_pkey" PRIMARY KEY(user_id)
);
