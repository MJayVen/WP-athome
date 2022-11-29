import { reactive, watch } from "vue";
import { getUser, type User } from "./users";
import session from "./session";


const followList = reactive([] as User[]);

export default followList;

export function loadFollowers() {
    followList.splice(0, followList.length, ...session.user?.following || [])
}
watch(() => session.user, loadFollowers);

export function follow(id: number) {
    const followee = getUser(id);
    if(followee) {
        followList.push(followee);
        console.log("followed user " + followee.username)
    } else {
        console.log("user with id " + id + " not found");
    }
}

export function unfollow(id: number) {
    const i = followList.findIndex(followee => followee.id === id);
    if(i > -1) {
        followList.splice(i, 1)
        console.log("unfollowed user " + followList[i].username)
    } else {
        console.log("user with id " + id + " not found");
    }
}