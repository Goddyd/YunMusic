// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: "初始化数据",
        userInfo : {}
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //console.log(this.data.dddd["hhh"]);
       /* for(let x in this.data){
            console.log(this.data[x]);
        }
        this.setData({
            msg: "修改好后的数据"
        })*/
    },

   toLogs(){
        wx.redirectTo({

            url: '/pages/logs/logs'
        });
    },

    //获取用户信息的回调
    handleGetUserInfo(res){
        console.log (res);
        if(res.detail.userInfo){
        //修改userInfo的状态数据
            this.setData({
                userInfo : res.detail.userInfo
            })
        }
    },
     

})