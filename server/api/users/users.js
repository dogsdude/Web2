/* This file will be used to define our functionality for the routes */

import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
  /* (sends the user array as json to the res object) */
  res.status(200);
  res.json({users: users});
}

export function findOne(req, res) {
  /* Implementation here */
  /* (extracts a parameter named id from the req object
  and searches the users list for a user with a matching id) */
  let idToFind = req.params.id;
  console.log(idToFind);
  let found = 0;
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].id);
    if (users[i].id === idToFind)
    {
      console.log("TRUE");
      res.status(200);
      res.json({user_with_id: users[i]});
      found = 1;
    }
  }
  // if no matching user is found, send error
  if (found == 0) {
    res.status(404);
    res.json({message: 'Not Found!'});
  }
}

export function createUser(req, res) {
  /* Implementation here */
  /* adds a new user object to the in-memory users list */
  let _id = uuidv4();
  let user =
    {
    name : req.body.name,
    address : req.body.address,
    age : req.body.age,
    id : _id
    }
    // user = req.body
  // add id to user
  // (optional) validate name, age, address
  // name -> exists and is not null
  // address -> exists and is not null
  // age -> exists and is number greater than 0
  // add user to users array

  users.push(user);
  res.status(201)
  res.json({user: user});

  /* After adding the new user object to the list,
    the function will send the user as json to the
    res object with a status code of CREATED */
}


