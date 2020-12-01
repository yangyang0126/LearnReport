// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    widthImg:0,
    heightImg:0,

    name:"赵静怡",
    spell:"Zhao Jingyi",
    job:"脉冲序列工程师",
    exp:"3年工作经验",
    tel:"139****1139",
    nickname:"洋阳",
    address:"上海",
    birth:"1992-01-26",
    email:"zhaojingyi0126@163.com",



    Code:[
      {name:"C++",percent:10,text:"0H"},
      {name:"Matlab",percent:10,text:"0H"},
      {name:"Python",percent:10,text:"0H"},   
      {name:"Wechat",percent:100,text:"8H"},
      {name:"SQL",percent:75.59,text:"6H"},        
    ],
    English:[
      {name:"单词",percent:70.55,text:"70.55H"},
      {name:"阅读",percent:20.9,text:"20.9H"},
      {name:"听力",percent:14,text:"9.7H"},   
      {name:"口语",percent:89.5,text:"89.5H"},    
    ],
    Skill:[
      {name:"PPT",percent:42,text:"1H"},
      {name:"摄影",percent:100,text:"3H"},   
    ],
    Art:[
      {name:"绘画",percent:18/52*100,text:"18张"},
      {name:"练字",percent:60/180*100,text:"60天"},
      {name:"阅读",percent:100,text:"216H"},   
    ],
    Sport:[
      {name:"跑步",percent:80,text:"80km"},
      {name:"运动",percent:67.55,text:"67.55H"},     
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