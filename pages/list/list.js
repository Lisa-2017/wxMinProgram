// pages/list/list.js
// 引入datas中的用数据-----commonjs规范
let datas = require('../../datas/list-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [] // 保存引入的list-data文件中的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //将引入的js文件中的数据设置给datas变量， 此时data中的datas和外部文件data-list.js中的数据就绑定到了一起
    this.setData({
      datas:datas.list_data 
    })
    // console.log(datas)
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