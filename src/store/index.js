import { createStore } from 'vuex'


const dataURL = ('https://jason-barron07.github.io/VueInfoJSON/index.json')
export default createStore({
  state: {
    skills:null,
    projects:null,
    education:null,
    testimonials:null,


  },
  getters: {
  },
  mutations: {
    setTestimonial(state,testimonials){
      state.testimonials = testimonials
    }

  },
  actions: {
    async fetchTestimonial(context){
      try{
        let res = await fetch(dataURL)
        console.log(res);
        let {testimonials} = await res.json()
        console.log(testimonials);
        context.commit('setTestimonial',testimonials)
      } catch (e){
        console.log(e.message);
      }
    }
  },
  modules: {
  }
})
