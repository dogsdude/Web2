/* This file will be used to define our functionality for the routes */

import uuidv4 from 'uuid/v4';
import User from './users.model';

//let users = [];

export function index(req, res) {
  /* (sends the user array as json to the res object) */
  res.status(200);
  res.json({users: Users.find()});
}

export function show(req, res) {

  let user = User.findById(req.params.id);
  if (user != null)
  {
    res.status(200);
    res.json({user: user});
  }
  else {
    res.status(404);
    res.json({message: 'Not Found!'});
  }

}

//TODO ADD VALIDTATION
export function create(req, res) {
  /* adds a new user object to the in-memory users list */
    let user =
      {
      name : req.body.name,
      address : req.body.address,
      age : req.body.age,
      id : _id
      }

     let newUser = User.create(user);

      // user = req.body
      // add id to user
      // (optional) validate name, age, address
      // name -> exists and is not null
      // address -> exists and is not null
      // age -> exists and is number greater than 0
      // add user to users array

      res.status(201)
      res.json({user: newUser});
}

//TODO ADD VALIDATION
export function upsert(req, res){

  let user =
    {
      name : req.body.name,
      address : req.body.address,
      age : req.body.age,
      id : req.params.id
    }
    let found = User.findOneAndUpdate(user);

  if (found) {
    res.status(200);
    res.json({updatedUser : User.findById(user.id)});
  }
  else {
    res.status(201);
    res.json({createdUser : User.findById(user.id)});
  }

}

export function destroy(req, res){
  let user =
    {
      name : req.body.name,
      address : req.body.address,
      age : req.body.age,
      id : req.params.id
    }
  let removed = User.remove(user);
  if (removed) {
    res.status(204).send();
  }
  else {
    res.status(404);
    res.json({message: 'Not Found!'});
  }
}


