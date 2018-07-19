var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      costt:0,
      caloriedataa:0,
      left:0
  },
  onNewItem: function(){
    wx.navigateTo({
      url: '../select_type/select_type',
    })
  },
  onShow: function (e) {
    console.log('onShow')

    var cost = Number(wx.getStorageSync('cost'))
    if (cost == "") {
      this.setData({ costt: 0 })
    }
    else {
      this.setData({ costt: cost})
    }
    var caloriedata = Number(wx.getStorageSync('totalcalorie'))
    if (caloriedata == "") {
      this.setData({ caloriedataa: 0 })
    }
    else {
      this.setData({ caloriedataa: caloriedata })
    }
    this.setData({ left: caloriedata - cost })
  }
})
