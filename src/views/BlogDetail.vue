<template>
  <div class="bg">
      <!-- 左侧 -->
      <div class="pop-up-menu">
        <left-menu></left-menu>
      </div>
      <div class="main">
        <blog-main></blog-main>
      </div>
  </div>

</template>
<script>
import LeftMenu from "../components/LeftMenu";
import BlogMain from "../components/BlogMain"
export default ({
    name: "blogDetail",
    components: {
      "blog-main": BlogMain,
      "left-menu": LeftMenu
    }
})
</script>
<style scoped src="../assets/css/style.css">

</style>

