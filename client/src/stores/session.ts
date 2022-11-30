import { reactive } from 'vue';
import myFetch from '@/services/myFetch';
import { getNewUID, type User } from './users';

const session = reactive({
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[]
})

export default session;

export async function api<T>(url: string, data: any = null, method?: string) {
    session.loading++;
    // setError(null);
    try {
        return await myFetch(url, data, method);
    } catch (error) {
        // setError(error as string);
        console.log(error);
    } finally {
        session.loading--;
    }

    return {} as T;
}

export function login(username: string, password: string){
    const uid = getNewUID();
    session.user = {
        uid,
        username,
        password
    }
}

export function logout() {
    session.user = null;
}

export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}
