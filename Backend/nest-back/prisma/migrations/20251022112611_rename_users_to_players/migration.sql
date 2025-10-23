/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."users" DROP CONSTRAINT "fk_role_code";

-- DropTable
DROP TABLE "public"."users";

-- CreateTable
CREATE TABLE "players" (
    "code" SERIAL NOT NULL,
    "user_id" VARCHAR(10),
    "name" VARCHAR,
    "surname" VARCHAR,
    "birthdate" TIMESTAMP(6),
    "role_code" INTEGER,
    "phone" INTEGER,
    "dni" VARCHAR(9),

    CONSTRAINT "pk_user_code" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "fk_role_code" FOREIGN KEY ("role_code") REFERENCES "roles"("code") ON DELETE NO ACTION ON UPDATE NO ACTION;
