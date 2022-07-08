CREATE TABLE IF NOT EXISTS boards_admins (
  board_id INT NOT NULL, 
  user_id INT NOT NULL,
  CONSTRAINT "board_admins_pkey" PRIMARY KEY ("board_id", "user_id"),
  CONSTRAINT "boards_admins_board_id_fkey" FOREIGN KEY("board_id") REFERENCES "boards"("id"),
  CONSTRAINT "boards_admins_user_id_fkey" FOREIGN KEY("user_id") REFERENCES "users"("id")
);