<template>
    <div class="main-bg">
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 标题 -->
        <div class="title">
            <h1>title</h1>
            <h2>subtitle</h2>
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
                :key="artcle.id"
			    id = key>
                    <div class="artcle-item">
                        <div class="item-title">{{ artcle.title }}</div>
                        <div class="item-date">{{ artcle.date }}</div>
                        <div class="item-content">{{ artcle.content }}</div>
                        <a href="#" class="item-button">阅读全文</a>
                        <div class="item-tags">
                            <a v-for="tag in artcle.tags" :key="tag.id" href="tag.id" class="tag">{{ tag.tag }}</a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div>
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
        </div>
    </div>
</template>

<script>
import navigation from '../components/navigation.vue'

export default({
    name: "main",
    data() {
        return {
            artcles: [
                {
                    id: 1,
                    title: "title1",
                    date: "12/1/2021",
                    content: "Hello world!",
                    tags: [
						{
							id: 1,
							tag:"生活"
						},{
							id: 2,
							tag: "随笔"
						}
					]
                },{
					id: 2,
                    title: "title2",
                    date: "10-1-2021",
                    content: "Hello world.",
                    tags: [
						{
							id: 1,
							tag:"生活"
						},{
							id: 2,
							tag: "随笔"
						}
					]
				},{
					id: 2,
                    title: "title2",
                    date: "10-1-2021",
                    content: "Hello world.",
                    tags: [
						{
							id: 1,
							tag:"生活"
						},{
							id: 2,
							tag: "随笔"
						}
					]
				}
            ],
            ok: true
        }
    },
    components: {
        'navigation': navigation
    }
})
</script>

<style scoped src="../assets/css/main.css">
</style>