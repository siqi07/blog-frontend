<template>
  <div class="bg">
    <!-- 左侧 -->
    <div class="pop-up-menu">
      <left-menu></left-menu>
    </div>
    <div class="main">
      <home-main></home-main>
    </div>
  </div>
</template>

<script>
import LeftMenu from "../components/LeftMenu";
import HomeMain from "../components/HomeMain"; 
export default {
  name: "Home",
  components: {
    "left-menu": LeftMenu,
    "home-main": HomeMain,
  },
};
</script>

<style scoped src="../assets/css/style.css">

</style>
