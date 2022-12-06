import { computed, reactive } from "vue";
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
  setError(null);
  try {
    return await myFetch<T>(url, data, method);
  } catch (error) {
    setError(error as string);
  } finally {
    session.loading--;
  }

  return {} as T;
}

export const isLoading = computed(() => !!session.loading);

export async function login(username: string, password: string) {
  await api<User>("users/login", { username, password }).then((user) => {
    session.user = user;
    session.messages.push({ type: "success", text: `You logged in as ${username}` });
  });
}

export function logout() {
  session.user = null;
  session.messages.push({ type: "success", text: `You logged out` });
}

export function setError(error: string | null) {
  session.error = error;
  if (error) {
    session.messages.push({ text: error, type: "danger" });
  }
}

export interface Message {
  text: string;
  type: "danger" | "warning" | "success" | "info";
}
