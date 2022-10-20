<script lang="ts">
import { useUsersStore } from "../stores/users"
import { useSessionStore } from "../stores/session"
import { ref } from "vue";
import router from "@/router";
// import RouterLink from "vue-router";

export default {
    data() {
        return {
            id: parseInt(this.$route.params.id as string),
            name: ref(''),
            details: ref(''),
            date: ref(''),
            curUser: useSessionStore().getUsername,
        }
    }, methods: {
        submit() {
            if(this.curUser){
                useUsersStore().addWorkout(this.curUser, {id:this.id, name:this.name, details: this.details, date: this.date})
                router.push('/');
            }
        },
    }
}

</script>

<template>
    <form @submit.prevent="submit()">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="The workout you did!" v-model="name" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Details</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Details about workout!" v-model="details" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="date" v-model="date" />
                    </div>
                </div>
                <input type="submit" value="Submit" class="button is-link"/>
            </form>
</template>

<style scoped>
label{
    color: var(--white)
}

form {
    background-color: var(--navy-blue-light);
    border-radius: 5px;
    padding: 1rem;
    width: 90%;
    margin: auto;
}
</style>