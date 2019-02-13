<template>
  <div class="bodywrap">
    <Interval></Interval>
    <Bodypart></Bodypart>
    <Interval></Interval>
    <Footpart></Footpart>
  </div>
</template>

<script>
  import Bodypart from "../body/bodypart";
  import Interval from "../interval/interval";
  import Footpart from  "../foot/footpart"
  
  export default {
        name: "index",
        components:{
        Bodypart,Interval,Footpart
    }
    }
</script>

<style scoped>
  .bodywrap{
    width:1140px;
    margin:0 auto;
  }
</style>
