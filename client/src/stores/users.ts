import { ref } from 'vue'

const users = ref([] as User[])

export class User {
    public username?: string;
    public password?: string;
}

export function addUser(username: string, password: string) {
    users.value.push(
        {
            username,
            password,
        }
    )
}

export default users;