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
  api(`users/follow/${session.user?.username}/${fusername}`, null, "PATCH").then(() => {
    followList.push(fusername);
    session.messages.push({ type: 'success', text: `You followed ${fusername}` })
  });
}

export async function unfollow(fusername: string) {
  await api(`users/unfollow/${session.user?.username}/${fusername}`, null, "PATCH").then(() => {
    const i = followList.findIndex((followee) => followee === fusername);
    followList.splice(i, 1);
    session.messages.push({ type: 'warning', text: `You unfollowed ${fusername}` })
  });
}
