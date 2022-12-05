export const API_ROOT = import.meta.env.VITE_API_ROOT;

export default function myFetch<T>(
  url: string,
  data: any = null,
  method?: string
): Promise<T> {
  const options: RequestInit = {
    method: method ?? (data ? "POST" : "GET"),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: data ? JSON.stringify(data) : undefined,
  };
  return fetch(API_ROOT + url, options).then((x) => {
    console.log(x);
    console.log(x.json());
    if (x.ok) {
      return x.json();
    } else {
      return x.json().then((y) => {
        throw y;
      });
    }
  });
}
