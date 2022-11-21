import express, { Express, Request, Response } from 'express'

const PORT = 3001
const app: Express = express()

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: '"Hi from server"' })
})

app.listen(PORT, () => {
  console.log('Now listening port', PORT)
})
