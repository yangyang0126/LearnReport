// pages/art/art.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0,
    Img:[      
      "https://s3.ax1x.com/2020/11/27/Dr9WSP.png",
      "https://s3.ax1x.com/2020/11/27/Dr9gJI.png",
      "https://s3.ax1x.com/2020/11/27/Dr9cFA.png",
      "https://s3.ax1x.com/2020/11/27/Dr9fQf.png",
      "https://s3.ax1x.com/2020/11/27/Dr9az6.png",
      "https://s3.ax1x.com/2020/11/27/Dr9yod.png",
      "https://s3.ax1x.com/2020/11/27/Dr9sdH.png",
      "https://s3.ax1x.com/2020/11/27/Dr9BLD.png",
      "https://s3.ax1x.com/2020/11/27/Dr9NJ1.png",
      "https://s3.ax1x.com/2020/11/27/Dr9Jo9.png",
      "https://s3.ax1x.com/2020/11/27/Dr9wQK.png",
      "https://s3.ax1x.com/2020/11/27/Dr9tiR.png",
      "https://s3.ax1x.com/2020/11/27/Dr9GdJ.png",
      "https://s3.ax1x.com/2020/11/27/Dr9QMT.png",
      "https://s3.ax1x.com/2020/11/27/Dr9URx.png",
      "https://s3.ax1x.com/2020/11/27/Dr91LF.png",
      "https://s3.ax1x.com/2020/11/27/Dr9lsU.png",

          ]

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