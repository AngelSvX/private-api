import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { LoginProvider } from "./context/LoginContext"
import Programador from "./pages/Programador"
import Diseñador from "./pages/Diseñador"
import Analista from "./pages/Analista"
import TestRoute from "./pages/TestRoute"
import ProtectedRoute from "./Route/ProtectedRoute"
import Unauthorized from "./pages/Unauthorized"

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Login />
            }
          />
          <Route
            path="/programmer"
            element={
              <ProtectedRoute allowedRoles={["Programador"]}>
                <div style={{ color: "green", fontSize: "2rem" }}>¡Bienvenido Programador!</div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/designer"
            element={
              <ProtectedRoute allowedRoles={["Diseñador"]}>
                <Diseñador />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analist"
            element={
              <ProtectedRoute allowedRoles={["Analista"]}>
                <Analista />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <TestRoute />
            }
          />
          <Route
            path="/unauthorized"
            element={
              <Unauthorized />
            }
          />
        </Routes>

      </LoginProvider>
    </BrowserRouter>
  )
}

export default App