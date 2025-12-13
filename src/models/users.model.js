const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../data/users.json');

class UserModel {
  static getAll() {
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
  }

  static getById(id) {
    const users = this.getAll();
    return users.find(user => user.id === id);
  }

  static add(user) {
    const users = this.getAll();
    users.push(user);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    return user;
  }

  static update(id, newData) {
    const users = this.getAll();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...newData };
      fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
      return users[index];
    }
    return null;
  }

  static delete(id) {
    let users = this.getAll();
    users = users.filter(user => user.id !== id);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    return true;
  }
}

module.exports = UserModel;