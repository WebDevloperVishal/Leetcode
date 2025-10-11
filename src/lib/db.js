import { PrimaClient } from "../generated/prisma/index.js"

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrimaClient({
    log: ["query", "info", "warn", "error"],
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;