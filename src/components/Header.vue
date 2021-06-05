<template>
  <header>
    <h1>{{title}}</h1>  
    <Button @btn-click ="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask? 'red' : 'green'"/>  
   
  </header>
</template>

<script>

import Button from './Button'

export default{
  name:'Header',  
  props: {
    title: String,
    showAddTask:Boolean,
  },
  // props:['title'],
  // props:{
  //   title:{
  //     type:String,
  //     default: 'Default title'
  //   }
  // }

  components:{    
    Button,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

</style>
