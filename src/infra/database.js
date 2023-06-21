const prisma = require('@prisma/client')

const conn = new prisma.PrismaClient()

module.exports = conn
