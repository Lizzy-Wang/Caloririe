Page({
  data: {
    imgUrls: [
      '../../image/4.jpg',
      '../../image/5.jpg',
      '../../image/6.jpg',
    ],
  },
  first :function(){
    wx.navigateTo({
      url: '../components/recommend/recommend',
    })
  },
  second : function () {
    wx.navigateTo({
      url: '../components/recommend1/recommend',
    })
  },
  third : function () {
    wx.navigateTo({
      url: '../components/recommend2/recommend',
    })
  },
  forth : function () {
    wx.navigateTo({
      url: '../components/recommend3/recommend',
    })
  },
  fifth : function () {
    wx.navigateTo({
      url: '../components/specific/specific',
    })
  },
   sixth: function () {
     wx.navigateTo({
       url: '../components/specific1/specific',
     })
   },
   onShow: function(){
   }
})
