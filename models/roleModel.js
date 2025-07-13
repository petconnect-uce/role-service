import { pool } from '../config/db.js';

export const initTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS roles (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) UNIQUE NOT NULL,
      description TEXT
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS user_roles (
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(50) NOT NULL,
      role_id INTEGER REFERENCES roles(id)
    );
  `);
};

export const getAllRoles = () => pool.query('SELECT * FROM roles');

export const getRoleById = (id) =>
  pool.query('SELECT * FROM roles WHERE id = $1', [id]);

export const createRole = (name, description) =>
  pool.query(
    'INSERT INTO roles (name, description) VALUES ($1, $2) RETURNING *',
    [name, description]
  );

export const updateRole = (id, name, description) =>
  pool.query(
    'UPDATE roles SET name = $1, description = $2 WHERE id = $3 RETURNING *',
    [name, description, id]
  );

export const deleteRole = (id) =>
  pool.query('DELETE FROM roles WHERE id = $1', [id]);

export const assignRoleToUser = (userId, roleId) =>
  pool.query(
    'INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)',
    [userId, roleId]
  );

export const getUserRoles = (userId) =>
  pool.query(
    `SELECT r.id, r.name FROM roles r
     JOIN user_roles ur ON ur.role_id = r.id
     WHERE ur.user_id = $1`,
    [userId]
  );
