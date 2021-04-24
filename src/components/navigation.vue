<template>
    <nav>
        <a href="#" class="blog-name">{{webTitle}}</a>
        <div class="search">
            <form>
                <input type="text" placeholder="搜索从这里开始...">
                <button type="submit"></button>
            </form>
        </div>
    </nav>
    <!-- <div class="title">
        <h1>{{title}}</h1>
        <h2>{{subTitle}}</h2>
    </div> -->
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            webTitle: null,
            // title: null,
            // subTitle: null
        }
    },
    created() {
        const instance = axios.create({
            baseURL: 'http://localhost:3000/api',
            timeout: 1000,
        })

        instance.get('/web/find').then(res=>{
        //   console.log(res.data.data)
          this.webTitle = res.data.data[0].webTitle
        //   this.title = res.data.data[0].title
        //   this.subTitle = res.data.data[0].subTitle
        })
    }
}
</script>

<style scoped src="../assets/css/navigation.css">

</style>