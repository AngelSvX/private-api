import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { LoginProvider } from "./context/LoginContext"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginProvider>
              <Login />
            </LoginProvider>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
