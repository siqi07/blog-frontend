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
                <div v-if="years == null">
                    <p>尚且没有任何博客</p>
                </div>
                <div v-for="value in years" :key="value.yearid" class="years">
                    <div class="year-item">
                        <!-- <img></img> -->
                        <h4>{{ value.yearid }}</h4>
                    </div>
                    <div v-for="value1 in value.months" :key="value1.monthid" class="months">
                        <div class="month">{{ value1.monthid }}月</div>
                        <!-- <div class="month-item">{{ value1.blogTitle }}</div> -->
                        <div class="month-item">
                            <div v-for="value2 in value1.blogTitle" :key="value2" class="item">
                                <a href="#" class="blog-title">{{ value2 }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
import navigation from '../components/navigation.vue'

export default({
    name: "catalogmain",
    // setup() {
		
    // },
    data() {
        return {
            "blogNumber": 3,
            "ok": true,
            "blog": [
                {
                    blogId:1,
                    blogTitle: "第一",
                    subTitle: "one",
                    date: "11/1/2021",
                    tags: ["生活", "学习"]
                },{
                    blogId:1,
                    blogTitle: "第一",
                    subTitle: "one",
                    date: "11/1/2021",
                    tags: ["生活", "学习"]
                }
            ],
            "years": [
                {
                    yearid:"2021",
                    months: [
                        {
                            monthid: '1',
                            blogTitle: ["one", "two", "three", "four"]
                        },{
                            monthid: '2',
                            blogTitle: ["one", "two", "three"]
                        }
                    ]
                },
                {
                    yearid: "2020",
                    months: [
                        {
                            monthid: '1',
                            blogTitle: ["one", "two", "three"]
                        }
                    ]
                }
            ]
        }
    },
    components: {
        'navigation': navigation
    }
})
</script>

<style scoped src="../assets/css/catalog.css">
</style>