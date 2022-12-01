import { reactive } from "vue";
import myFetch from "@/services/myFetch";
import type { User } from "./users";

const session = reactive({
  user: null as User | null,
  loading: 0,
  error: null as string | null,
  messages: [] as Message[],
});

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

export function login(username: string, password: string) {
  api(`users/username/${username}`).then((data) => {
    if (data as { uid: number }) {
      session.user = {
        uid: uid,
        username: username,
        password: password,
      };
    } else {
      console.log("incorrect username or password");
      //   session.error = "Invalid username or password";
    }
  });
}

export function logout() {
  session.user = null;
}

export interface Message {
  text: string;
  type: "danger" | "warning" | "success" | "info";
}
