/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Attribute` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `division` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userTypeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `CharacterFeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CharacterSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventCharacter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MissionCharacter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Attribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appearance` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moralAlignment` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personality` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trivias` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `village` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rank` on the `Character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `alignment` on the `Character` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `CharacterAttribute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Village" AS ENUM ('KONOHA', 'SUNA', 'KIRIGAKURE', 'IWA', 'KUMOGAKURE', 'UZUSHIO');

-- CreateEnum
CREATE TYPE "CharacterRank" AS ENUM ('CHUNIN', 'JOUNIN', 'ANBU', 'NUKENIN', 'KAGE');

-- CreateEnum
CREATE TYPE "TechiniqueRank" AS ENUM ('D', 'C', 'B', 'A', 'S');

-- CreateEnum
CREATE TYPE "TechiniqueType" AS ENUM ('NINJUTSU', 'GENJUTSU', 'TAIJUTSU', 'FUUINJUTSU', 'FIGHTING_STYLE');

-- CreateEnum
CREATE TYPE "TraitType" AS ENUM ('POSITIVE', 'NEGATIVE', 'NEUTRAL');

-- CreateEnum
CREATE TYPE "Alignment" AS ENUM ('GOOD', 'NEUTRAL', 'EVIL');

-- CreateEnum
CREATE TYPE "MoralAlignment" AS ENUM ('LAWFUL', 'NEUTRAL', 'CHAOTIC');

-- CreateEnum
CREATE TYPE "AttributeType" AS ENUM ('STRENGTH', 'AGILITY', 'DEXTERITY', 'VITALITY', 'STAMINA', 'PERCEPTION', 'CHARISMA', 'KNOWLEDGE', 'FOCUS', 'JUTSU', 'CHAKRA', 'CHAKRA_CONTROL');

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_authorId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterFeature" DROP CONSTRAINT "CharacterFeature_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterFeature" DROP CONSTRAINT "CharacterFeature_featureId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterSkill" DROP CONSTRAINT "CharacterSkill_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterSkill" DROP CONSTRAINT "CharacterSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "EventCharacter" DROP CONSTRAINT "EventCharacter_characterId_fkey";

-- DropForeignKey
ALTER TABLE "EventCharacter" DROP CONSTRAINT "EventCharacter_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Mission" DROP CONSTRAINT "Mission_authorId_fkey";

-- DropForeignKey
ALTER TABLE "MissionCharacter" DROP CONSTRAINT "MissionCharacter_characterId_fkey";

-- DropForeignKey
ALTER TABLE "MissionCharacter" DROP CONSTRAINT "MissionCharacter_missionId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userTypeId_fkey";

-- AlterTable
ALTER TABLE "Attribute" DROP COLUMN "deletedAt",
ADD COLUMN     "type" "AttributeType" NOT NULL;

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "age",
DROP COLUMN "authorId",
DROP COLUMN "deletedAt",
DROP COLUMN "division",
ADD COLUMN     "appearance" TEXT NOT NULL,
ADD COLUMN     "clanId" INTEGER,
ADD COLUMN     "expertiseId" INTEGER,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "kuchiyoseId" INTEGER,
ADD COLUMN     "moralAlignment" "MoralAlignment" NOT NULL,
ADD COLUMN     "personality" TEXT NOT NULL,
ADD COLUMN     "specializationId" INTEGER,
ADD COLUMN     "traitId" INTEGER,
ADD COLUMN     "trivias" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "village" "Village" NOT NULL,
DROP COLUMN "rank",
ADD COLUMN     "rank" "CharacterRank" NOT NULL,
DROP COLUMN "alignment",
ADD COLUMN     "alignment" "Alignment" NOT NULL;

-- AlterTable
ALTER TABLE "CharacterAttribute" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "type",
DROP COLUMN "userTypeId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "CharacterFeature";

-- DropTable
DROP TABLE "CharacterSkill";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "EventCharacter";

-- DropTable
DROP TABLE "Feature";

-- DropTable
DROP TABLE "Mission";

-- DropTable
DROP TABLE "MissionCharacter";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "UserType";

-- CreateTable
CREATE TABLE "Technique" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "rank" "TechiniqueRank" NOT NULL,
    "description" TEXT NOT NULL,
    "type" "TechiniqueType" NOT NULL,
    "clanExclusive" BOOLEAN NOT NULL,
    "villageExclusive" BOOLEAN NOT NULL,
    "characterExclusive" BOOLEAN NOT NULL,
    "clanId" INTEGER,
    "specializationId" INTEGER,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Technique_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clan" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "village" "Village" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Clan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialization" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "maxVacancy" INTEGER NOT NULL,
    "currentVacancy" INTEGER NOT NULL,

    CONSTRAINT "Specialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kuchiyose" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Kuchiyose_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "TraitType" NOT NULL,
    "cost" INTEGER NOT NULL,
    "maxVacancy" INTEGER NOT NULL,
    "currentVacancy" INTEGER NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expertise" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "image" TEXT,

    CONSTRAINT "Expertise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterTechnique" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "characterId" INTEGER NOT NULL,
    "techniqueId" INTEGER NOT NULL,

    CONSTRAINT "CharacterTechnique_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Technique" ADD CONSTRAINT "Technique_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technique" ADD CONSTRAINT "Technique_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "Specialization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technique" ADD CONSTRAINT "Technique_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "Specialization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_kuchiyoseId_fkey" FOREIGN KEY ("kuchiyoseId") REFERENCES "Kuchiyose"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_expertiseId_fkey" FOREIGN KEY ("expertiseId") REFERENCES "Expertise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterTechnique" ADD CONSTRAINT "CharacterTechnique_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterTechnique" ADD CONSTRAINT "CharacterTechnique_techniqueId_fkey" FOREIGN KEY ("techniqueId") REFERENCES "Technique"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
