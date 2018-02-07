// pages/setup.js

const black="#000"
const pink_selected = "#c38"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo_src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518590447&di=074a2c2003a8b5f6a96ca06e3f5d40e6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131221%2F20131221132201-535787346.jpg",
    button: "ENTER",
    avatars:
    [
      [{ name: "zaiga", selected: true, color: "#c38" }, { name: "zaiga", selected: false, color: "#000" }, { name: "zaiga", selected: false, color: "#000"}],
      [{ name: "zaiga", selected: false, color: "#000" }, { name: "zaiga", selected: false, color: "#000" }, { name: "zaiga", selected: false, color: "#000" }],
      [{ name: "zaiga", selected: false, color: "#000" }, { name: "zaiga", selected: false, color: "#000" }, { name: "zaiga", selected: false, color: "#000" }]
    ],
    hideSetting: true,
    lastRow: 0,
    lastColumn: 0
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
    console.log("onReady")
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

  },
  enter_submit: function (e) {
    console.log("submit:" + e.detail.value.UserName)
  },
  setting: function () {
    var hide = this.data.hideSetting

    if (hide == undefined)
      hide = true
    console.log(hide)
    this.setData({
      hideSetting: !hide
    })
  },

  select_avatar: function (e) {
    console.log(e.currentTarget.dataset.name)
    var row = e.currentTarget.dataset.row
    var column = e.currentTarget.dataset.column
    var lastRow = this.data.lastRow
    var lastColumn = this.data.lastColumn
    var array = this.data.avatars
    array[row][column].selected = true
    array[row][column].color = pink_selected
    array[lastRow][lastColumn].selected = false
    array[lastRow][lastColumn].color = black

    this.setData({
      avatars: array,
      lastRow: row,
      lastColumn: column,
    })
  }






})