<template>
    <div class="main-bg">
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 标题 -->
        <div class="title">
            <h1>title</h1>
            <h2>subtitle</h2>
        </div>
        <div class="detail-bg">
            <div class="markdown-body">
              <file-md></file-md>
            </div>
        </div>
    </div>
</template>
<script>
import fileMD from "../assets/source/_post/第一个博客.md"
import Navigation from "./navigation"
import 'github-markdown-css'

export default({
    name: "blogMain",
    components: {
      "navigation": Navigation,
      "file-md": fileMD
    },
})
</script>

<style scoped src="../assets/css/blog.css">

</style>