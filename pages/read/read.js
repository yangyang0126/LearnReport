// pages/read/read.js

wx.cloud.init()
const db = wx.cloud.database(); // 初始化数据库

Page({

  /**
   * 页面的初始数据
   */
  data: {
    read:[],
    readNum:0,
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
    var _this = this;   
    db.collection('read').orderBy('time','desc')
    .get({      
      success: res => {
        console.log(res.data)            
        this.setData({
          read: res.data
        })
      }
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
    this.onReady()  
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '笔记刷新中',
      duration: 1000
    })    
    let x = this.data.readNum + 20
    let oldRead = this.data.read
    db.collection('read').orderBy('time','desc').skip(x) 
    // 限制返回数量为 20 条
      .get()
      .then(res => {
      // 利用concat函数连接新数据与旧数据      
        this.setData({
          read: oldRead.concat(res.data),
          readNum: x
        })
        //console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})