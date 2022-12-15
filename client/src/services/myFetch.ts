export const API_ROOT = "http://127.0.0.1:3000/api/v1/";

export default function myFetch<T>(
  url: string,
  data: any = null,
  method?: string
): Promise<T> {
  const options: RequestInit = {
    method: method ?? (data ? "POST" : "GET"),
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };
  return fetch(API_ROOT + url, options).then((x) => {
    const contentType = x.headers.get("content-type");
    if (x.ok) {
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return x.json();
      } else {
        return x.text();
      }
    } else {
      return x.json().then((y) => {
        throw y;
      });
    }
  });
}
