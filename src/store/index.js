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
    },
    setSkills(state,skills){
      state.skills = skills
    },
    setProjects(state,projects){
      state.projects = projects
    },
    setEducation(state,education){
      state.education = education
    }
    

  },
  actions: {
    async fetchTestimonial(context){
      try{
        let res = await fetch(dataURL)
        let {testimonials} = await res.json()
        context.commit('setTestimonial',testimonials)
      } catch (e){
        alert(e.message);
      }
    },
    async fetchSkills(context){
      try{
        let res = await fetch(dataURL)
        let {skills} = await res.json()
        context.commit('setSkills',skills)
      }catch(e){
        alert(e.message)
      }
    },
    async fetchProjects(context){
      try{
        let res = await fetch(dataURL)
        let {projects} = await res.json()
        context.commit('setProjects',projects)
      }catch(e){
        alert(e.message)
      }
    },
    async fetchEducation(context){
      try{
        let res = await fetch(dataURL)
        let {education} = await res.json()
        context.commit('setEducation',education)
      }catch(e){
        alert(e.message)
      }
    }
  },

  modules: {
  }
})
