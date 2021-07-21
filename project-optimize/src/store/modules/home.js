const state = {
    comName: 0
}
const mutations = {
    setComName(state, val) {
        state.comName = val
    }
}


const actions={
    setComName({commit,state},val){
        commit('setComName',val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}