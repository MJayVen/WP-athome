import { reactive, watch } from "vue";
import { loadFollowers } from "./followers";
import session, { api } from "./session";

const users = reactive([] as User[]);

function loadUsers() {
  if (session.user) {
    api(`users`).then((data) => {
      users.splice(0, users.length, ...(data as User[]));
    });
  } else {
    users.splice(0, users.length);
  }
}
watch(() => session.user, loadUsers);

export default users;

export async function addUser(username: string, password: string) {
  api<User>(`users`, { username, password }, "POST").then((user) => {
    users.push(user);
    session.messages.push({
      type: "success",
      text: `You added user ${username}`,
    });
  });
}
export async function deleteUser(username: string) {
  await api(`users/${username}`, null, "DELETE").then(() => {
    const i = users.findIndex((user) => user.username === username);
    users.splice(i, 1);
    session.messages.push({
      type: "success",
      text: `You deleted user ${username}`,
    });
  });
}

export async function searchUsers(search: string) {
  return (await api<User[]>(`users/search/${search}`)) as User[];
}

export interface User {
  username: string;
  password: string;
}
