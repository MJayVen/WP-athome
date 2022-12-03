import { reactive, watch } from "vue";
import session, { api } from "./session";

const followList = reactive([] as string[]);

export default followList;

export function loadFollowers() {
  if (session.user) {
    api(`users/following/${session.user?.username}`).then((data) => {
      followList.splice(0, followList.length, ...(data as string[]));
    });
  } else {
    followList.splice(0, followList.length);
  }
}
watch(() => session.user, loadFollowers);

export async function follow(fusername: string) {
  if (fusername) {
    await api(`users/follow/${session.user?.username}/${fusername}`, null, "PATCH").then(() => {
      followList.push(fusername);
      console.log("followed user " + fusername);
    });
  } else {
    console.log("user " + fusername + " not found");
  }
}

export async function unfollow(fusername: string) {
  const i = followList.findIndex((followee) => followee === fusername);
  if (i > -1) {
    await api(`users/unfollow/${session.user?.username}/${fusername}`, null, "PATCH").then(() => {
      followList.splice(i, 1);
      console.log("unfollowed user " + fusername);
    });
  } else {
    console.log("user " + fusername + " not found");
  }
}
