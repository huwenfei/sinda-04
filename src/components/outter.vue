<template>
  <div >
      <h3>这是系统外部</h3>
      <ohead></ohead>
      <router-view/>
  </div>
</template>

<script>
import ohead from './ohead'
export default {
  data () {
    return {
      
    }
  },
  components:{ohead}
}
</script>

<style scoped lang="less">
    @color:red;
    div{
        color:@color;
        font-size: 20px;
    }
</style>
