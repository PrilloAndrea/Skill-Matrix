CREATE TABLE IF NOT EXISTS board_admins(
admin_id serial ,
board_id serial,
CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_id"),
FOREIGN KEY(board_id) REFERENCES boards(board_id)
);
