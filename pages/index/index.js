// pages/index/index.js
wx.cloud.init()
const db = wx.cloud.database(); // 初始化数据库
const util = require('../../utils/util.js')  // 控制倒计时


Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0,

    Code:[],
    Language:[],    
    Art:[],
    Sport:[],

    datetimeTo: "2022/1/1 00:00:00 GMT+0800", // 开始时间
    timeLeft: "",   // 剩下的时间（天时分秒）
    time:"",
    timeData: {},
  
  },


  onChange(event) {
    console.log(event.detail);
    this.setData({
      hand1:event.detail,
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this;   
    db.collection('codeYear').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Code: res.data
        })
      }
    })
    db.collection('languageYear').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Language: res.data
        })
      }
    })
    db.collection('artYear').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Art: res.data
        })
      }
    })
    db.collection('sportYear').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Sport: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    }) 
    this.setData({
      widthImg:width/3.3,
      heightImg:height/3.3
    }) 

    // 计算倒计时
    this.data.timer = setInterval(() =>{ 
      this.setData({
        timeLeft: util.getTimeLeft(this.data.datetimeTo)
      });
      

    }, 1000);
  },

  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})