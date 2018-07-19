
var schoolTime = new Array(); //日期
var schoolEvent = new Array();//花费信息
var schoolNote = new Array();//备注信息

var xstore = wx.getStorageSync('x')
//读取缓存信息
if (xstore != "") {
  var time = wx.getStorageSync('time')
  var event = wx.getStorageSync('event')
  var note = wx.getStorageSync('snote')
  schoolTime = time
  schoolEvent = event
  schoolNote = note

}
else {
  for (var i = 0; i < 100; i++) {
    schoolTime.push("0");
    //console.log(schoolTime[i]),
    schoolEvent.push(null);
    schoolNote.push(null);
  }
  wx.setStorageSync('time', schoolTime)
  wx.setStorageSync('event', schoolEvent)
  wx.setStorageSync('snote', schoolNote)
}


function SchoolCalendar() {
  //返回输入日期对应的花费信息
  this.school = function (date) {

    var year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();

    if (month < 10) {
      month = "0" + month
    }
    if (day < 10) {
      day = "0" + day
    }

    schoolTime = wx.getStorageSync('time')
    schoolEvent = wx.getStorageSync('event')


    for (let i = 0; i < schoolTime.length; i++) {
      if (schoolTime[i] === year + month + day)
        return schoolEvent[i]
      else
        continue
    }
  }

  //将传入的日期、支出、备注信息存入缓存中
  this.setcost = function (date, x, cost, note) {

    var year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();

    if (month < 10) {
      month = "0" + month
    }
    if (day < 10) {
      day = "0" + day
    }

    //console.log(note)
    if (schoolTime[x - 1] == year + month + day) {
      schoolEvent[x - 1] = cost
      schoolNote[x - 1] = note
    }
    else {
      schoolTime[x] = year + month + day
      schoolEvent[x] = cost
      schoolNote[x] = note
    }

    console.log("schoolTime[" + x + "]:=" + schoolTime[x])
    console.log("schoolEvent[" + x + "]:=" + schoolEvent[x])
    console.log("schoolNote[" + x + "]:=" + schoolNote[x])
    console.log(schoolTime)
    console.log(schoolEvent)
    console.log(schoolNote)
    wx.setStorageSync('time', schoolTime)
    wx.setStorageSync('event', schoolEvent)
    wx.setStorageSync('snote', schoolNote)
    if (schoolTime[x - 1] == year + month + day) {
      return true
    }
    else {
      return false
    }

  }

}




module.exports = {
  SchoolCalendar: SchoolCalendar
}