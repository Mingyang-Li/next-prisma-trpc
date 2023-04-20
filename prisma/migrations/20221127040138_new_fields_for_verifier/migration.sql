-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Issuer', 'Verifier');

-- CreateTable
CREATE TABLE "AuthToken" (
    "id" TEXT NOT NULL,
    "token" TEXT,
    "tenantUrl" TEXT,

    CONSTRAINT "AuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DID" (
    "id" TEXT NOT NULL,
    "did" JSONB,
    "role" "Role",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DID_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PresentationTemplate" (
    "id" TEXT NOT NULL,
    "presentationTemplate" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PresentationTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PresentationRequest" (
    "id" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "challenge" TEXT,
    "claims" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PresentationRequest_pkey" PRIMARY KEY ("id")
);
