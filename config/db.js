import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import 'dotenv/config'

const databaseurl = process.env.DB_URL
const adapter = new PrismaMariaDb(databaseurl)

export const prisma = new PrismaClient ({adapter})