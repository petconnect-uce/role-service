import * as Role from '../models/roleModel.js';

export const getRoles = async (req, res) => {
  const result = await Role.getAllRoles();
  res.json(result.rows);
};

export const getRole = async (req, res) => {
  const result = await Role.getRoleById(req.params.id);
  if (result.rowCount === 0) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
};

export const create = async (req, res) => {
  const { name, description } = req.body;
  const result = await Role.createRole(name, description);
  res.status(201).json(result.rows[0]);
};

export const update = async (req, res) => {
  const { name, description } = req.body;
  const result = await Role.updateRole(req.params.id, name, description);
  res.json(result.rows[0]);
};

export const remove = async (req, res) => {
  await Role.deleteRole(req.params.id);
  res.status(204).send();
};

export const assign = async (req, res) => {
  const { userId, roleId } = req.body;
  await Role.assignRoleToUser(userId, roleId);
  res.json({ message: 'Role assigned' });
};

export const getRolesByUser = async (req, res) => {
  const result = await Role.getUserRoles(req.params.userId);
  res.json(result.rows);
};
