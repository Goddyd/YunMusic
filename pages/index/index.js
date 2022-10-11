// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: "初始化数据",
        aaa: "啊啊啊啊",
        bbb: "八八八八",
        ccc: "踩踩踩"
        
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

     

})