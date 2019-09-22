var user = {

    //管理员登录
    login: function(userName,userPassword,callback){
        $.ajax({
            url: "http://localhost:8000/admin/login",
            type: "post",
            data:{user_name: userName , password: userPassword},
            success:function(res){
                callback(res);
            }
        })
    },
    
    //获取管理员信息
    getInfo:function(callback){
        $.ajax({
            url:"http://localhost:8000/admin/getuser",
            type:"get",
            success: function(res){
                callback(res);    
            }
        })
    },


    //管理员退出
    logout:function(callback){
        $.ajax({
            url:"http://localhost:8000/admin/logout",
            type:"post",
            success:function(res){
                callback(res);   
            }
        })
    },
}