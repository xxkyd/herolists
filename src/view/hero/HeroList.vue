<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" :to="{name:'heroadd'}">添加英雄</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
           <tbody>
               <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <!-- <a href="edit.html">edit</a> -->
                  <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>&nbsp;&nbsp;
                  &nbsp;&nbsp;
                  <a href="javascript:" @click="del(item.id)">删除</a>
                </td>
              </tr>
           </tbody>
          </table>
        </div>
      </div>
</template>

<script>
export default {
    data(){
      return{
        list:[]
      }
    },
    mounted() {
      this.getHerosList();
    },
    methods: {
      getHerosList(){
        this.axios
          .get('heroes')
          .then((res) => {
            // console.log(res);
            const {status,data} = res;
            if(status == 200){
              this.list = data;
            }else{
              console.log('查询错误');
            }
          })
          .catch((err)=>{
            console.log('服务器错误'+err);
          })
      },
      del(id){
        this.axios
          .delete(`heroes/${id}`)
          .then((res)=>{
            const status = res.status;
            if(status === 200){
              this.getHerosList();
            }else{
              console.log('删除失败');
            }
          })
          .catch((err)=>{
            console.log("服务器错误"+err);
          })
      }
    },
}
</script>

<style>

</style>
