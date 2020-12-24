// pages/year/year.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    width:0,
    height:0,
    widthImg:0,
    heightImg:0,

    Code:[
      {name:"C++",percent:10,text:"0",goal:"播放器"},
      
    ],
    English:[
      {name:"英语",percent:10,text:"0",goal:"200H"},
      {name:"日语",percent:10,text:"0",goal:"205课"},
    ],    
    Art:[
      {name:"绘画",percent:10,text:"0",goal:"100张"},
      {name:"练字",percent:10,text:"0",goal:"150天"},
      {name:"阅读",percent:10,text:"0",goal:"20本"},   
    ],
    Sport:[
      {name:"跑步",percent:10,text:"0",goal:"200km"},
      {name:"运动",percent:10,text:"0",goal:"200H"},     
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