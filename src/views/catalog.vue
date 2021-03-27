<template>
  <div class="bg">
    <!-- 左侧 -->
    <div class="pop-up-menu">
      <left-menu></left-menu>
    </div>
    <div class="main">
      <catalog-main></catalog-main>
    </div>
  </div>
</template>
<script>
import LeftMenu from "../components/LeftMenu";
import CatalogMain from "../components/CatalogMain"; 
export default {
  name: "Catalog",
  components: {
    "left-menu": LeftMenu,
    "catalog-main": CatalogMain,
  },
};
</script>

<style scoped src="../assets/css/style.css">

</style>