<template>
  <div class="menu">
      <div>
        <div  class="head-portrait">
          <img src="https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/avatar.jpg">
        </div>
        <span>{{nickName}}</span>
        <br/>
        <span class="introduce">{{introduce}}</span>
        <!-- <div>
          <div>
            <a href="/" class="rad">链接</a>
            <a href="/about" class="rad">链接</a>
          </div>
          <div>
            <a href="Home" class="rad">button3</a>
            <a href="Home" class="rad">button4</a>
          </div>
        </div> -->
      </div>
      <!-- <div class="statistics">
        <ul>
          <li>
            <a class="total-link">hebi</a> 
          </li>
          <li>
            <a class="total-link">yy</a>
          </li>
          <li>
            <a class="total-link">zz</a>
          </li>
        </ul>
      </div> -->
      <div>
        <a href="/" class="label">主页</a>
        <a href="Catalog" class="label">归档</a>
        <a href="Think" class="label">思考</a>
        <a href="About" class="label">关于</a>
        <!-- <a href="#" class="list-group-item"></a> -->
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default({
  data() {
    return {
      nickName: null,
      introduce: null
    }
  },
  created() {
        const instance = axios.create({
            baseURL: 'http://localhost:3000/api',
            timeout: 1000,
        })

        instance.get('/user/find').then(res=>{
          // console.log(res.data.data)
          this.nickName = res.data.data[0].nickName
          this.introduce = res.data.data[0].introduce
        })
    }
})
</script>

<style scoped src="../assets/css/popUpMenu.css">

</style>

