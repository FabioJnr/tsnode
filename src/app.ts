import cors from 'cors'
import express from 'express'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.get('/', (req, res) => {
      res.send('<strong>Online</strong>')
    })
  }
}

export default new App().express
