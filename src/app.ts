import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.router()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb://localhost/tsapi', {
        useNewUrlParser: true
      })
    }

    private router (): void {
      this.express.get('/', (req, res) => {
        return res.send('Hello wolrd')
      })
    }
}

export default new App().express
