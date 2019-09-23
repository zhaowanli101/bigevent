var user = {

    //管理员登录
    login: function(userName,userPassword,callback){
        $.ajax({
            url: login_url,
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
            url:logInfo_url,
            type:"get",
            success: function(res){
                callback(res);    
            }
        })
    },


    //管理员退出
    logout:function(callback){
        $.ajax({
            url:logout_url,
            type:"post",
            success:function(res){
                callback(res);   
            }
        })
    },
}