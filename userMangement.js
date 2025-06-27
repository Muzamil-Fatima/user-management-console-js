// Array of Objects
const users = [
  { id: 1, name: "ALi" },
  { id: 2, name: "Fatima" },
  { id: 3, name: "Ahmad" },
];

function addUser(name) {
  const lastUser = users[users.length - 1];
  const getId = lastUser ? lastUser.id + 1 : 1;
  const newId = { id: getId, name: name };
  users.push(newId);
}
addUser("zara");
console.log(users);
