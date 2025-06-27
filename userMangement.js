// Array of Objects
const users = [
  { id: 1, name: "ALi" },
  { id: 2, name: "Fatima" },
  { id: 3, name: "Ahmad" },
];

//  Add new user

function addUser(name) {
  const lastUser = users[users.length - 1];
  const getId = lastUser ? lastUser.id + 1 : 1;
  const newUser = { id: getId, name: name };
  users.push(newUser);
}
addUser("zara");
console.log(users);

// updateUser

function updateUser(id, newName) {
  let found = false;
  users.forEach((fetchUser) => {
    if (fetchUser.id === id) {
      fetchUser.name = newName;
      found = true;
    }
  });
  if (!found) {
    console.log("ID does not match ");
  }
}
updateUser(2, "Maria");
console.log(users);

// listUsers

console.log("This is users List: ");

function listUsers() {
  users.forEach((user) => {
    console.log(`ID: ${user.id} | Name: ${user.name}`)
  });
}
listUsers();

