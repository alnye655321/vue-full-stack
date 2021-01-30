import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        assignUsers(state, users) {
            state.users = users;
        },
        newUser(state, user) {
            state.users.push(user);
        }
    },
    actions: { //can be used to perform async requests
        setUsers({ commit }) {
            axios
                .get("http://localhost:8080/api/v1/users")
                .then((res) => {
                    commit('assignUsers', res.data)
                    console.log(this);

                    //test display in card-----------------------------------
                    let itemTemps = [];
                    for (let i = 0; i < res.data.length; i++) {
                        itemTemps[i] = {
                            avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                            title: res.data[i].name,
                            subtitle: res.data[i].email,
                        };
                    }
                    commit('assignItems', itemTemps);
                    console.log('setUsers finished');
                    //test display in card-----------------------------------

                })
                .catch((err) => {
                    console.log(err);
                });
        },

    },
    getters: {
        allusers: state => {
            return state.users;
        }
    },

}
);
