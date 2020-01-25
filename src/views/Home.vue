<template>
    <div class="home">
        <div class="col-centered-middle players">
            <player
                    v-for="player in players"
                    :key="player.id"
                    :id="player.id"
                    :playersNum="players.length"
                    @removePlayer="removePlayer"
                    @setPlayerName="setPlayerName"
            ></player>
            <br>
            <br>
            <button @click="addNewPlayer" :disabled="players.length > 9">add player</button>
            <button @click="startGame">start game</button>
        </div>
    </div>
</template>

<script>
    import Player from "../components/player";

    export default {
        name: 'home',
        components: {Player},
        data: () => ({
            players: [
                {
                    id: 1,
                    name: "",
                },
                {
                    id: 2,
                    name: "",
                }
            ],
        }),
        methods: {
            addNewPlayer() {
                if (this.players.length < 10) {
                    this.players.push({
                        id: this.players[this.players.length - 1].id + 1,
                        name: "",
                    });
                }
            },
            removePlayer(id) {
                if (this.players.length > 2) {
                    this.players.splice(this.players.findIndex((player) => {
                        return player.id === id;
                    }), 1);
                }
            },
            setPlayerName(data) {
                this.players.find(player => player.id === data[0]).name = data[1];
            },
            startGame() {
                this.$store.commit('setPlayers', this.players);
                this.$router.push({name: "game"});
                console.log("can go")
            },
        }
    }
</script>
<style scoped>

    .home {
        background: url("/bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100vh;
    }

    .players {
        width: 100%;
        text-align: center;
    }

    .col-centered {
        float: none;
        margin: 0 auto;
        display: block
    }

    .col-centered-middle {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>