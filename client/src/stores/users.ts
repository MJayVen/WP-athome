import { reactive } from 'vue';

const users = reactive([] as User[]);

export function getUsers() {
    return users;
}
export function getUser(uid: number) {
    return users.find((user) => user.uid === uid);
}
export function addUser(username: string, password: string) {
    if (username === '' || password === '') {
        throw new Error('username or password cannot be empty')
    }
    if (users.find((user) => user.username === username)) {
        throw new Error('user already exists');
    }
    users.push({
        uid: getNewUID(),
        username,
        password,
    });
}
export function deleteUser(uid: number) {
    const user = getUser(uid);
    if (!user) {
        throw new Error('user does not exist');
    }
    users.filter((user) => user.uid !== uid);
}

export function getNewUID() {
    if (users.length === 0) {
        return 1;
    }
    return users.length + 1;
}

export interface User {
    uid: number;
    username: string;
    password: string;
}
