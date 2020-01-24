import uuidv4 from 'uuid/v4';

class User {
  users = [];

  find() {
    return this.users;
    // to reference member variables inside a class, you must use the "this" keyword
    // IMPORTANT
  }

  findById(userId) {
    // Find user by Id
    // Returns user, or null if not present

    let found = 0;
    let user;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === userId) {
        user = this.users[i];
        found = 1;
      }
    }
    // if no matching user is found, send error
    if (found) {
      return user;
    } else {
      return null;
    }

  }

  create(user) {
    // Create a new user
    // Return created user
    // Generate the id and overwrite any id that may be present in user

    /* adds a new user object to the in-memory users list */
    let _id = uuidv4();
    let created_user =
      {
        name: user.name,
        address: user.address,
        age: user.age,
        id: _id
      }

    this.users.push(created_user);
    return created_user;
  }

  findOneAndUpdate(user) {
    // Find user and update
    // If user does not exist, create it using Id provided
    // Return true if user was updated, false if user was created

    let found_user = this.findById(user.id);
    if (found_user != null) {
      found_user = {
        name: user.name,
        address: user.address,
        age: user.age,
        id: user.id
      };
      return true;
    }
    else {
      found_user =
        {
          name: user.name,
          address: user.address,
          age: user.age,
          id: user.id
        }
      this.users.push(found_user);
      return false;
    }
  }

  remove(user) {
    // Remove user if exists with the Id provided
    // Return true if removed
    // Return false if did user not exist
    let userIndex = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === user.id) {
        userIndex = i;
      }
    }
    if (userIndex != -1) {
      this.users.splice(userIndex, 1);
      return true;
    } else {
      return false;
    }

  }
}
export default new User();

