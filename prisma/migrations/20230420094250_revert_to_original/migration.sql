/*
  Warnings:

  - You are about to drop the `AuthToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DID` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PresentationRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PresentationTemplate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AuthToken";

-- DropTable
DROP TABLE "DID";

-- DropTable
DROP TABLE "PresentationRequest";

-- DropTable
DROP TABLE "PresentationTemplate";

-- DropEnum
DROP TYPE "Role";
