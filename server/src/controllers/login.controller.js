import { login } from "../services/login.service.js"

export const loginController = async (req, res) => {
  try {

    const { username, password } = req.body

    const response = await login({username, password})

    if(!response.found){
      return res.status(404).json("Usuario no encontrado")
    }

    if(!response.isMatch){
      return res.status(403).json("Contraseña Incorrecta")
    }

    return res.status(200).json({token: response.token})
    
  } catch (error) {
    return res.status(500).json(error)
  }
}