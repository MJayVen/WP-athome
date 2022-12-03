import { reactive, watch } from "vue";
import { loadFollowers } from "./followers";
import session, { api } from "./session";

const users = reactive([] as User[]);

function loadUsers() {
  api(`users/`, null, "GET").then((data) => {
    users.splice(0, users.length, ...(data as User[]));
  });
}
watch(() => session.user, loadUsers);

export default users;

export function addUser(username: string, password: string) {
  if (username === "" || password === "") {
    throw new Error("username or password cannot be empty");
  }
  if (users.find((user) => user.username === username)) {
    throw new Error("user already exists");
  }
  api(`users/`, { username, password }, "POST").then((data) => {
    users.push(data as User);
    console.log("user added");
  });
}
export function deleteUser(username: string) {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error("user does not exist");
  }
  api(`users/${user.username}`, null, "DELETE").then(() => {
    users.splice(users.indexOf(user), 1);
    console.log("user deleted");
  });
}

export interface User {
  username: string;
  password: string;
}
