import FatiFy from 'fastify'
import cors from '@fastify/cors'
import { appRouter } from './routes'

const app = FatiFy()

app.register(cors)
app.register(appRouter)


app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})