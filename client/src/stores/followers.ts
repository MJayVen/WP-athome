import { reactive, watch } from "vue";
import { getUser, type User } from "./users";
import session, { api } from "./session";


const followList = reactive([] as User[]);

export default followList;

export function loadFollowers() {
    api(`users/followers/${session.user?.uid}`).then((data) =>{
        followList.splice(0, followList.length, ...data as User[]);
    });
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

export function unfollow(uid: number) {
    const i = followList.findIndex(followee => followee.uid === uid);
    if(i > -1) {
        followList.splice(i, 1)
        console.log("unfollowed user " + followList[i].username)
    } else {
        console.log("user with uid " + uid + " not found");
    }
}