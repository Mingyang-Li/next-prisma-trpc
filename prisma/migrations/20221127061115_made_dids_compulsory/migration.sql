/*
  Warnings:

  - Made the column `did` on table `DID` required. This step will fail if there are existing NULL values in that column.
  - Made the column `presentationTemplate` on table `PresentationTemplate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DID" ALTER COLUMN "did" SET NOT NULL;

-- AlterTable
ALTER TABLE "PresentationTemplate" ALTER COLUMN "presentationTemplate" SET NOT NULL;
