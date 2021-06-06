
<template>
<!-- deploying dist folder for public access -->
<!-- npm run build -->
<!-- npm i -g serve -->
<!-- // serve -s  dist -->

  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask= "showAddTask"/>  
    <router-view :showAddTask = "showAddTask"></router-view>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'



export default {
  name: 'App',
  components: {
    Header,
    Footer,
   
  },
  data(){
    return {
      tasks: [],
      showAddTask:false,
    }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
  }
  
}

// import HelloWorld from './components/HelloWorld.vue'
// import Again from './components/Again.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//     Again
//   }
// }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;  
  
}
body{
  font-family: 'Poppins', sans-serif;
}
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 3px;
  border-radius: 5px;
}
.btn{
  display: inline-block;
  background: #000;
  color: #fff;
  border:none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus{
  outline: none;
}
.btn:active{
  transform: scale(0.98);
}
.btn-block{
  display: block;
  width: 100%;
}



</style>
