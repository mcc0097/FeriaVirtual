-- CreateTable
CREATE TABLE "companies" (
    "code" INTEGER NOT NULL,
    "name" VARCHAR,
    "CIF" VARCHAR(9),
    "description" VARCHAR,
    "phone" INTEGER,
    "email" VARCHAR,
    "website" VARCHAR,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "roles" (
    "code" SERIAL NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,

    CONSTRAINT "pk_role_code" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "users" (
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
ALTER TABLE "users" ADD CONSTRAINT "fk_role_code" FOREIGN KEY ("role_code") REFERENCES "roles"("code") ON DELETE NO ACTION ON UPDATE NO ACTION;

