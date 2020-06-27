<template>
  <div>
    <!-- Home -->
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
import Rank from './Rank/Rank'
export default {
    name:'Home',
    components:{
      ListContainer,
      TodayRecommend,
      Rank,
    }
}
</script>

<style>

</style>