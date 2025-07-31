# Mi Proyecto - PrivateApi
Este es un proyecto de ejemplo que utiliza una API privada para realizar el manejo de Tokens y Roles en una base de datos de usuarios, según el rol, podrá visitar la API correspondiente.

## Tecnologías Utilizadas
Backend:
- Node.js
- Express.js
- MySQL
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv
- cors
- nodemon (para desarrollo)
Frontend:
- React.js
- Axios
- React Router
- Tailwind CSS
- jwt-decode
- Typescript

## Instalación y Configuración
1. Clona el repositorio:
- git clone url_del_repositorio
2. instalación de dependencias:
backend:
- cd server
- npm install
frontend:
- cd client
- cd privateapi
- npm install
3. correr el proyecto:
backend:
- npm run dev
frontend:
- npm run dev
4. Configuración de la base de datos:
   - Crea una base de datos MySQL llamada `privateapi`.
   - Tablas:
     - users
        columnas:
          - id (INT, AUTO_INCREMENT, PRIMARY KEY)
          - username (VARCHAR(255), UNIQUE)
          - password (VARCHAR(255))
          - role_id (INT, FOREIGN KEY (rol_id) REFERENCES roles(id))
     - roles
        columnas:
          - id (INT, AUTO_INCREMENT, PRIMARY KEY)
          - name (VARCHAR(255), UNIQUE)
5. Configuración de variables de entorno:
   - Crea un archivo `.env` en la carpeta `server` y agrega las siguientes variables:
     ```
     HOST=localhost
     USER=tu_usuario
     PASSWORD=tu_contraseña
     DATABASE=privateapi
     JWT_SECRET=tu_secreto_jwt
     PORT=3000
     ```

## Uso
- Accede al frontend en `http://localhost:5173`.
- Accede al backend en `http://localhost:3000`.

## Autor
- [Añangel]

## Proyecto en proceso
Este proyecto es un ejemplo y está en proceso de desarrollo. Se pueden agregar más características y mejoras en el futuro.