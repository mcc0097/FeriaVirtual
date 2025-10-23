-- CreateTable
CREATE TABLE "wings" (
    "id" SERIAL NOT NULL,
    "computing" VARCHAR,
    "leisure" VARCHAR,
    "commerce" VARCHAR,

    CONSTRAINT "pk_wing_id" PRIMARY KEY ("id")
);
