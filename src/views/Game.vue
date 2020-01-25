<template>
    <div class="game">
        <div class="col-centered-middle">
            <div class="header" style="width: 100px" v-for="player in players">{{player.name}}</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Game",
        components: {},
        data: () => ({}),
        computed: {
            ...mapState({
                players: state => state.players,
            }),
        },
        created() {
            // this.players.length % 2 ------ 0 paran
        },
        methods: {}
    }
</script>
<style scoped>

    .game {
        background: url("/bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100vh;
    }

    .col-centered {
        float: none;
        margin: 0 auto;
        display: block
    }

    .col-centered-middle {
        position: absolute;
        left: 50%;
        top: 10%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .header {
        display: inline-block;
    }
</style>