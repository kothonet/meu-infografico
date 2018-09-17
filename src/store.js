import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        enfase: undefined,
        criterio: undefined,
        formato: undefined,
        ferramenta: undefined
    },
    mutations: {
        SET_ENFASE: (store, obj) => {
            store.enfase = obj;
            store.criterio = undefined;
            store.formato = undefined;
            store.ferramenta = undefined;
        },
        SET_CRITERIO (store, obj) {
            store.criterio = obj;
            store.formato = undefined;
            store.ferramenta = undefined;
        },
        SET_FORMATO (store, obj) {
            store.formato = obj;
            store.ferramenta = undefined;
        },
        SET_FERRAMENTA (store, obj) {
            store.ferramenta = obj;
        }
    }
});