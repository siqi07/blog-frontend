<template>
    <div class="main-bg">
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 标题 -->
        <div class="title">
            <h1>{{title}}</h1>
            <h2>{{subTitle}}</h2>
        </div>
        <!-- 博客内容列表 -->
        <div class="artcle">
            <template v-if="artcles == nnull">
                <div>
                    <p>
                        还没有博客
                    </p>
                </div>
            </template>
            <template v-if="artcles != null">
                <div 
                v-for="artcle in artcles"
                :key="artcle.blogId"
			    id = key>
                    <div class="artcle-item">
                        <div class="item-title">{{ artcle.blogTitle }}</div>
                        <div class="item-date">{{ artcle.uploadTime }}</div>
                        <div class="item-content">{{ artcle.abstract }}</div>
                        <router-link :to="{ path: '/find', query: { blogId:artcle.blogId }}" class="item-button">阅读全文</router-link>
                        <div class="item-tags">
                            <router-link v-for="tag in artcle.tags" :key="tag.id"  :to="{ path: '/tags/tag'+ tag.tagId}" class="tag">{{ tag.tagName }}</router-link>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <!-- <div>
            <template v-if="ok == true">
                <div class="page">
                    <ul class="page-list">
                        <li>
                        <a href>1</a>
                        </li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                    </ul>
                </div>
            </template>
        </div> -->
    </div>
</template>

<script>
import navigation from '../components/navigation.vue'
import axios from 'axios'
// import BlogDetail from '../views/BlogDetail'
export default({
    name: "main",
    data() {
        return {
            artcles: [],
            ok: true,
            title: null,
            subTitle: null
        }
    },
    components: {
        'navigation': navigation
    },
    created() {
        const instance = axios.create({
            baseURL: 'http://localhost:3000/api',
            timeout: 1000,
            // headers: 'Access-Control-Allow-Origin'
        })

        instance.get('/blog/findAll').then(res=>{
            // console.log(res.data)
            for (let key in res.data.data) {
                let v = res.data.data
                // console.log(v[key])
                this.artcles.push(v[key])
            }
            // console.log(this.artcles)
        })
        instance.get('/web/find').then(res=>{
        //   console.log(res.data.data)
        //   this.webTitle = res.data.data[0].webTitle
          this.title = res.data.data[0].title
          this.subTitle = res.data.data[0].subTitle
        })
        // this.blogId = this.$route.query.blogId
    }
})
</script>

<style scoped src="../assets/css/main.css">
</style>