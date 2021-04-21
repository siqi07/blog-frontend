<template>
    <div class="main-bg">
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 标题 -->
        <div class="title">
            <h1>title</h1>
            <h2>subtitle</h2>
        </div>
        <div class="catalog-bg">
            <div v-if="years != null" class="total-catalog">
                <!-- 图标 -->
                <!-- <img src="" alt=""> -->
                <h3>目前共有{{ blogNumber }}篇博文</h3>
            </div>
            <template v-if="ok" class="catalog-detail">
                <div v-if="blog == null">
                    <p>尚且没有任何博客</p>
                </div>
                <div v-for="value in blog" :key="value.yearid" class="years">
                    <div class="year-item">
                        <!-- <img></img> -->
                        <h4>{{ value.yearId }}</h4>
                    </div>
                    <div v-for="value1 in value.months" :key="value1.monthId" class="months">
                        <div class="month">{{ value1.monthId }}月</div>
                        <!-- <div class="month-item">{{ value1.blogTitle }}</div> -->
                        <div class="month-item">
                            <div v-for="value2 in value1.blog" :key="value2" class="item">
                                <router-link :to="{ path: '/find', query: { blogId:value2.blogId }}" class="blog-title">{{ value2.blogTitle }}</router-link>
                                <!-- <a href="value2.blogId" class="blog-title">{{ value2.blogTitle }}</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import navigation from '../components/navigation.vue'

export default({
    name: "catalogmain",
    // setup() {
		
    // },
    data() {
        return {
            "blogNumber": null,
            "ok": true,
            "blog": []
        }
    },
    created() {
        const instance = axios.create({
            baseURL: 'http://localhost:3000/api',
            timeout: 3000,
        })

        instance.get('/blog/countAll').then(res => {
            this.blogNumber = res.data.data
        })

        instance.get('/blog/catalog').then(res => {
            // console.log(res.data.data)
            this.blog = res.data.data
        })
    },
    components: {
        'navigation': navigation
    }
})
</script>

<style scoped src="../assets/css/catalog.css">
</style>