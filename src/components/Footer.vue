<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <!-- <a href="/about">About</a> -->
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>

// import Button from './Button'

export default{
  // name:'Header',  
  // props: {
  //   title: String,
  //   showAddTask:Boolean,
  // },
  // props:['title'],
  // props:{
  //   title:{
  //     type:String,
  //     default: 'Default title'
  //   }
  // }

  // components:{    
  //   Button,
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  color:#333;
}
footer{  
 
  margin-top: 30px;
  text-align: center;

}

</style>
