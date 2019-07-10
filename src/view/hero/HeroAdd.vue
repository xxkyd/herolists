<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" v-model="formData.name" id="name" placeholder="姓名">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <select class="form-control" v-model="formData.gender" id="gender">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
          </div>
          <button type="submit" @click.prevent="addhero" class="btn btn-success">添加</button>
        </form>
      </div>
</template>

<script>
export default {
    data(){
        return{
            formData:{
                txtname: '',
                gender: '男'
            }
        }
    },
    methods:{
        addhero(){
            this.axios
                .post('heroes',this.formData)
                .then((res)=>{
                    const status = res.status;
                    if(status === 201){
                        this.$router.push({name:'hero'});
                    }else{
                        console.log('添加失败');
                    }
                })
                .catch((err)=>{
                    console.log('服务器错误'+err);
                })
        }
    }
}
</script>

<style>

</style>
