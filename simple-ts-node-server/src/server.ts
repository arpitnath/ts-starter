import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!')
})

app.listen(3001, () => console.log('App listening on port 3001'))
