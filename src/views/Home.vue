<template>
   <!-- <div v-if="showAddTask"> -->
   
      <AddTask v-show="showAddTask" @add-task="addTask"/>   
    
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks = "tasks"/>
</template>

<script>

import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
export default {
  name: 'Home',
  props:{
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,   
  },
  data(){
    return {
      tasks:[],
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



</script>