import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocalStorage = new VuexPersistence({
    storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        players: [],
    },
    mutations: {
        setPlayers(state, payload) {
            console.log("payload: ", payload);
            state.players = payload;
        }
    },
    actions: {
        example({commit}, payload) {

        },
    },
    plugins: [vuexLocalStorage.plugin],
})