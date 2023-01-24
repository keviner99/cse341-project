const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('user')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createUser = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    onlineStudent: req.body.onlineStudent,
    campusStudent: req.body.campusStudent,
    semester: req.body.semester,
    theme_name: req.body.theme_name,
    
  };
  const response = await mongodb.getDb().db().collection('user').insertOne(user);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    onlineStudent: req.body.onlineStudent,
    campusStudent: req.body.campusStudent,
    semester: req.body.semester,
    theme_name: req.body.theme_name
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('user')
    .replaceOne({ _id: userId }, user);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('user').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, getSingle, createUser, updateUser, deleteUser };