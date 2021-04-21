<template>
    <div class="main-bg">
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 标题 -->
        <!-- <div class="title">
            <h1>title</h1>
            <h2>subtitle</h2>
        </div> -->
        <div class="detail-bg">
            <div class="markdown-body">
                <component :is="fileMD"></component>
            </div>
                <!-- <file-md :key="key"></file-md> -->
        </div>
    </div>
</template>
<script>
// import fileMD from "../assets/source/_post/第一个博客.md"
// import vueMarkdown from 'vue-markdown-loader'
import Navigation from "./navigation"
import 'github-markdown-css'
import axios from 'axios'
// import markdownLoader from 'markdown-loader'

export default({
    name: "blogMain",
    data() {
        return {
            blogTitle: null,
            fileMD: null,
            // key: 0
        }
    },
    components: {
      "navigation": Navigation,
    //   fileMD
    //   vueMarkdown
    //   "file-md": this.fileMD
    },
    created() {
        // console.log(this.$route)
        const instance = axios.create({
            baseURL: 'http://localhost:3000/api',
            timeout: 3000,
        })
        
        const blogId = this.$route.query.blogId
        // const blogId = this.$route.query.blogId
        // console.log(blogId)
        instance.get('/blog/find',{
            params: {
                blogId: blogId
            }
        }).then(res => {
            // console.log(res.data)
            this.blogTitle = res.data.data.blogTitle
            // const vueMarkdown = null
            // console.log(this.blogTitle)
            // const path = "../assets/source/_post/" + this.blogTitle + ".md"
            // this.fileMD = require(path)
            // console.log(this.fileMD)
        }).then(()=> {
            // this.showMD()
            // this.$options.components[registerName] = require(`@/assets/source/_post/${this.blogTitle}.md`).default
            this.fileMD = require(`@/assets/source/_post/${this.blogTitle}.md`).default
        })
    },
    // methods: {
    //     async showMD() {
    //         var str =this.blogTitle + ".md"

    //         this.fileMD = await import('@/assets/source/_post/' + str)
    //         // .then(res=>{
    //         //     this.fileMD = res
    //         // })
    //         this.key += 1
    //         console.log(this.fileMD)
    //     }
    //     // this.fileMD = require("../assets/source/_post/" + this.blogTitle + ".md")
    // }

})
</script>

<style scoped src="../assets/css/blog.css">

</style>