-- CreateTable
CREATE TABLE "Issuance" (
    "id" TEXT NOT NULL,
    "issuedTo" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "courceLevel" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Issuance_pkey" PRIMARY KEY ("id")
);
