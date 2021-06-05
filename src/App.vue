
<template>
<!-- deploying dist folder for public access -->
<!-- npm run build -->
<!-- npm i -g serve -->
<!-- // serve -s  dist -->

  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask= "showAddTask"/>
    <!-- <div v-if="showAddTask"> -->
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks = "tasks"/>
  </div>
</template>

<script>

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


export default {
  name: 'App',
  components: {
    Header,
    Tasks ,
    AddTask
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
    async addTask(task){
      const req = await fetch('api/tasks',{
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = await req.json();
      // this.tasks = [...this.tasks,task]
      this.tasks = [...this.tasks,data];
    },
    async deleteTask(id){
      if(confirm("Are you sure? ")){
        const req = await fetch(`api/tasks/${id}`,{
          method: 'DELETE',          
        });
        req.status == 200 ? (this.tasks = this.tasks.filter((task)=>
        task.id !== id)) : alert("Error deleting tasks")
        // this.tasks = this.tasks.filter((task)=>
        // task.id !== id
      // );
      }      
    },
    async toggleReminder(id){
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle,reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`,{
        method: 'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()


     this.tasks = this.tasks.map((task)=>task.id === id ? {...task,reminder: data.reminder}: task);     
    //  this.tasks = this.tasks.map((task)=>task.id === id ? {...task,reminder: !task.reminder}: task);     
    },
    async fetchTasks(){
      const res = await fetch(`api/tasks`)
      const data = await res.json();
      return data
    },
    async fetchTask(id){
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json();
      return data
    }
  }, 
  async created(){
    this.tasks = await this.fetchTasks();
    // this.tasks = [
    //   {
    //     id:1,
    //     text:'Doctors Appointment',
    //     day: 'March 1st at 2:30pm',
    //     reminder: false
    //   },
    //   {
    //     id:2,
    //     text:'Gyms Meeting',
    //     day: 'March 5th at 2:30pm',
    //     reminder: true
    //   },
    //   {
    //     id:3,
    //     text:'School Friends Meeting',
    //     day: 'March 4th at 2:30pm',
    //     reminder: true
    //   },
    //   {
    //     id:4,
    //     text:'Football Appointment',
    //     day: 'March 11th at 4:30pm',
    //     reminder: false
    //   },
    // ]
  },
  
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
