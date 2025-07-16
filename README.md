# 🛡️ Role Service - PetConnect

Este microservicio maneja la **gestión de roles de usuario** dentro de la plataforma PetConnect.

## 🚀 Endpoints principales

### 🔓 Rutas públicas

| Método | Ruta                      | Descripción                      |
|--------|---------------------------|----------------------------------|
| GET    | `/api/v1/roles`           | Lista todos los roles            |
| GET    | `/api/v1/roles/:id`       | Obtiene un rol por ID            |
| GET    | `/api/v1/roles/user/:id`  | Lista roles asignados a un usuario |

### 🔐 Rutas protegidas (requieren autenticación)

| Método | Ruta                          | Descripción                        |
|--------|-------------------------------|------------------------------------|
| POST   | `/api/v1/roles`               | Crea un nuevo rol                  |
| PUT    | `/api/v1/roles/:id`           | Actualiza un rol existente         |
| DELETE | `/api/v1/roles/:id`           | Elimina un rol                     |
| POST   | `/api/v1/roles/assign`        | Asigna un rol a un usuario         |

## ⚙️ Tecnologías utilizadas

- **Node.js** + **Express**
- **PostgreSQL**
- **JWT** para autenticación
- **dotenv**, **cors**, **pg**
- Docker (listo para producción)

## 🧪 Scripts

```bash
# Inicia el servidor
npm start

👨‍💻 Autor
Desarrollado por Diego7118 para el proyecto PetConnect.