<template>
  <button @click="onClick()" :style="{background:color}" class="btn">{{text}}</button>
</template>

<script>
export default{
  name:'Button',
  props:{
    text:String,
    color:String
  },
  methods:{
    onClick(){
      // this.$emit('toggle-add-task')
      this.$emit('btn-click')
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
