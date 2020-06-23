<template>
  <div>
    <h4>params参数:keyword={{$route.params.keyword}}</h4>
    <h4>query参数:keyword2={{$route.query.keyword2}}</h4>
    <h4>params参数=>props:keyword3={{keyword3}}</h4>
    <h4>query参数=>props:keyword4={{keyword4}}</h4>
  </div>
  <!-- <div>Search</div> -->
</template>

<script>
export default {
    name:'Search',
    props:['keyword3','keyword4']
}
</script>

<style>

</style>