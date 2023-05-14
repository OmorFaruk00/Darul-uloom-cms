export const state = () => ({
    user: []
  })
  
  export const mutations = {
    getUser(state, user) {
      state.user = user
    }
  }
  
  export const actions = {
    async login({commit}, credentials) {
      await this.$axios.$get('sanctum/csrf-cookie')
      this.$auth.loginWith('laravelSanctum', credentials)
        .then(response => {
          //this.$router.push(`/`);
          console.log('response', this.$auth.user)
        })
        .catch(({response}) => {
          this.errors = response.data.errors
          console.log('errorrrr:', this.errors)
        })
      const user =await this.$auth.user;
      commit('getUser', user)
    }
  
  }
  
  export const getters = {
    user(state) {
      return state.user
    }
  }
  