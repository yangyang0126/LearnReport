// pages/all/all.js

wx.cloud.init()
const db = wx.cloud.database(); // 初始化数据库

Page({
  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0, 

    English:[],
    Read:[],
    Art:[],
    Sport:[],   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;    
    db.collection('readAll').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Read: res.data
        })
      }
    })   
    db.collection('englishAll').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          English: res.data
        })
      }
    })
    db.collection('artAll').get({      
      success: res => {
        //console.log(res.data)            
        this.setData({
          Art: res.data
        })
      }
    })
    db.collection('sportAll').get({      
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