<template>
    <div>
        <span>{{id}}. </span>
        <input v-model="name" @input="setPlayerName" type="text">
        <button @click="removePlayer" :disabled="playersNum < 3">remove player</button>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "player",
        props: ["id", "playersNum"],
        data: () => ({
            name: "",
        }),
        methods: {
            removePlayer() {
                this.$emit("removePlayer", this.id);
            },
            setPlayerName() {
                this.$emit("setPlayerName", [this.id, this.name]);
            }
        }
    }
</script>

<style scoped>

</style>