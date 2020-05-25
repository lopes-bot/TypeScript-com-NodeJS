import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req:Request, res:Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req:Request, res:Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async Delete (req:Request, res:Response): Promise<Response> {
    const id = req.params
    const user = await User.deleteOne({ id: id }, (err) => {
      if (err) {
        return res.status(400).json({
          erro: true,
          messege: 'Erro ao deletar Usuario'
        })
      }
    })
    return res.json({
      erro: false,
      messege: 'Usuario deletado com sucesso!',
      user
    })
  }
}

export default new UserController()