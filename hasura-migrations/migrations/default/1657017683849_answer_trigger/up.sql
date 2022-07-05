CREATE TRIGGER "set_public_answers_updated_at"
BEFORE UPDATE ON "public"."answers"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();

COMMENT ON TRIGGER "set_public_answers_updated_at" ON "public"."answers" 
IS 'Trigger to set value of column "updated_at" to current timestamp on row update';