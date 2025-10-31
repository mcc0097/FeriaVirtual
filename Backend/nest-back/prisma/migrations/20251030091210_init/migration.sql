-- CreateTable
CREATE TABLE "companies" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "CIF" VARCHAR(9),
    "description" VARCHAR,
    "phone" INTEGER,
    "email" VARCHAR,
    "website" VARCHAR,
    "wing_id" INTEGER,

    CONSTRAINT "pk_companie_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,

    CONSTRAINT "pk_role_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wings" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,
    "max people" INTEGER,

    CONSTRAINT "pk_wing_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "surname" VARCHAR,
    "birthdate" TIMESTAMP(6),
    "phone" INTEGER,
    "dni" VARCHAR(9),
    "role_id" INTEGER,
    "password" VARCHAR,

    CONSTRAINT "pk_player_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "fk_wing_id" FOREIGN KEY ("wing_id") REFERENCES "wings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "fk_role_id" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
