import * as Role from '../models/roleModel.js';

export const getRoles = async (req, res) => {
  try {
    const result = await Role.getAllRoles();
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener roles:', err.message);
    res.status(500).json({ error: 'Error al obtener roles' });
  }
};

export const getRole = async (req, res) => {
  try {
    const result = await Role.getRoleById(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Rol no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error al obtener rol:', err.message);
    res.status(500).json({ error: 'Error interno al obtener rol' });
  }
};

export const create = async (req, res) => {
  const { name, description } = req.body;

  try {
    const result = await Role.createRole(name, description);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: 'El rol ya existe' });
    } else {
      console.error('Error al crear rol:', err.message);
      res.status(500).json({ error: 'Error interno al crear rol' });
    }
  }
};

export const update = async (req, res) => {
  const { name, description } = req.body;

  try {
    const result = await Role.updateRole(req.params.id, name, description);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Rol no encontrado para actualizar' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error al actualizar rol:', err.message);
    res.status(500).json({ error: 'Error interno al actualizar rol' });
  }
};

export const remove = async (req, res) => {
  try {
    const result = await Role.deleteRole(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Rol no encontrado para eliminar' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('Error al eliminar rol:', err.message);
    res.status(500).json({ error: 'Error interno al eliminar rol' });
  }
};

export const assign = async (req, res) => {
  const { userId, roleId } = req.body;

  try {
    await Role.assignRoleToUser(userId, roleId);
    res.json({ message: 'Rol asignado correctamente' });
  } catch (err) {
    console.error('Error al asignar rol:', err.message);
    res.status(500).json({ error: 'Error interno al asignar rol' });
  }
};

export const getRolesByUser = async (req, res) => {
  try {
    const result = await Role.getUserRoles(req.params.userId);
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener roles del usuario:', err.message);
    res.status(500).json({ error: 'Error interno al obtener roles del usuario' });
  }
};
