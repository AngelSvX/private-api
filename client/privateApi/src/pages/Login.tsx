import type { FormEvent } from "react"
import { useLogin } from '../hooks/useLogin';

function Login() {

  const { setPassword, setUsername, password, username, loginUser } = useLogin()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser()
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="w-1/4 h-auto bg-stone-800 rounded-lg">
        <form onSubmit={(e) => { handleSubmit(e) }} className="flex flex-col my-6 mx-5 h-full">
          <div className="w-full flex items-center justify-center">
            <p className="text-2xl font-bold">Formulario</p>
          </div>
          <div className="flex w-full flex-col justify-center pt-5">
            <div className="flex flex-col mb-4">
              <label htmlFor="username">Username</label>
              <input value={username} onChange={(e) => { setUsername(e.target.value) }} className="border-1 h-10 rounded-md border-white/80 outline-none pl-3" type="text" id="username" />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="border-1 h-10 rounded-md border-white/80 outline-none pl-3" type="password" id="password" />
            </div>
            <button type="submit" className="w-full bg-indigo-900 h-10 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-linear">INGRESAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
