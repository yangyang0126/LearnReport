// pages/all/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0, 

    English:[
      {name:"单词",percent:7511/60/2,text:"125.18H"},
      {name:"阅读",percent:2751/60/2,text:"45.85H"},
      {name:"听力",percent:4224/60/2,text:"70.4H"},   
      {name:"口语",percent:89.5/2,text:"89.5H"},    
    ],
    Read:[
      {name:"阅读",percent:513/6,text:"513H"},  
    ],
    Art:[
      {name:"绘画",percent:18,text:"18张"},
      {name:"练字",percent:60/180*100,text:"30H"},
       
    ],
    Sport:[
      {name:"跑步",percent:80/200*100,text:"80km"},
      {name:"运动",percent:391/6,text:"391H"},     
    ],
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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