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
    console.log(`ID: ${user.id} | Name: ${user.name}`);
  });
}
listUsers();

// Delete User
//  Delete User with Splice method
function deleteUser(id) {
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("User not found ")
  }
  else{
    console.log(`The user ${id} will be delete successfully in array object.`)
  }
}

deleteUser(1);
console.log(users);

//  Delete User with filter method
function deleteUsers(){
  const indexBox = users.length;
  const updateUser = users.filter((user)=> user.id !==id);

  if(updateUser.length === indexBox){
    console.log("User will not be found!")
  }
  else{
    console.log(`User with ID ${id} has been deleted successfully`)
  }

  users.length = 0;
  users.push(...updateUser)
}

deleteUser(2)
console.log(users)