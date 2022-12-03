import { reactive, watch } from "vue";
import session, { api } from "./session";

const followList = reactive([] as string[]);

export default followList;

export function loadFollowers() {
  api(`users/following/${session.user?.username}`).then((data) => {
    followList.splice(0, followList.length, ...(data as string[]));
  });
}
watch(() => session.user, loadFollowers);

export function follow(username: string) {
  if (username) {
    api(`users/follow/${username}`, null, "PATCH").then(() => {
      followList.push(username);
      console.log("followed user " + username);
    });
  } else {
    console.log("user " + username + " not found");
  }
}

export function unfollow(username: string) {
  const i = followList.findIndex((followee) => followee === username);
  if (i > -1) {
    api(`users/unfollow/${username}`, null, "PATCH").then(() => {
      followList.splice(i, 1);
      console.log("unfollowed user " + username);
    });
  } else {
    console.log("user " + username + " not found");
  }
}
