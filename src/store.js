import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        enfase: undefined,
        criterio: undefined,
        formato: undefined,
        ferramenta: undefined
    },
    mutations: {
        SET_ENFASE: (state, obj) => {
            state.enfase = obj;
            state.criterio = undefined;
            state.formato = undefined;
            state.ferramenta = undefined;
        },
        SET_CRITERIO (state, obj) {
            state.criterio = obj;
            state.formato = undefined;
            state.ferramenta = undefined;
        },
        SET_FORMATO (state, obj) {
            state.formato = obj;
            state.ferramenta = undefined;
        },
        SET_FERRAMENTA (state, obj) {
            state.ferramenta = obj;
        }
    },
    actions: {
        set_enfase: (context, obj) => context.commit('SET_ENFASE', obj),
        set_criterio: (context, obj) => context.commit('SET_CRITERIO', obj),
        set_formato: (context, obj) => context.commit('SET_FORMATO', obj),
        set_ferramenta: (context, obj) => context.commit('SET_FERRAMENTA', obj)
    },
    getters: {
        enfase: state => state.enfase,
        criterio: state => state.criterio,
        formato: state => state.formato,
        ferramenta: state => state.ferramenta
    }
});

export default store;