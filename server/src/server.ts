import FatiFy from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'


const app = FatiFy()
const prisma = new PrismaClient()

/**
 * Metodos HTTP: Get, Post, Put, Patch, Delete
 */

app.register(cors)
app.get('/', async () => {
  const habits = await prisma.habit.findMany({
    where:{
      title:{
        startsWith:'Beber'
      }
    }
  })
  return habits
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})