//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    showAll: true,
    items: [
      { name: 'male', value: '男' },
      { name: 'female', value: '女', checked: 'true' },
    ],
    array1: ['145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200'],
    array2: [ '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'],
    array3: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
    array4: ['久坐不动的（一点点运动或者没有运动）', '少量运动（每周1-3天轻量运动）', '中等运动量（每周3-5天中等程度运动）', ' 高运动量（每周6 - 7天高强度运动）','超强度运动'],
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    caloriedata: '',
    gender: '',
    hight:'',
    weight:'',
    age:''
  },
  onLoad: function () {
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      gender: e.detail.value
    })
  },

//两个组件绑定
  bindPickerChange1(e) {
    console.log('bindPickerChange1发生change事件，携带value值为：', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
    var hight = this.data.array1[e.detail.value]
    console.log('输出为', hight)
  },


  bindPickerChange2(e) {
    console.log('bindPickerChange2发生change事件，携带value值为：', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
    var weight = this.data.array2[e.detail.value]
    console.log('输出为', weight)
  },

  bindPickerChange3(e) {
    console.log('bindPickerChange3发生change事件，携带value值为：', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
    var age = this.data.array3[e.detail.value]
    console.log('输出为', age)
  },

  bindPickerChange4(e) {
    console.log('bindPickerChange3发生change事件，携带value值为：', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
    var fre = e.detail.value
    console.log('输出为', fre)
  },

  calculate: function () {
    var bmr ;
    var calorie;
    var a=this.data.gender  //性别
    var b = this.data.array1[this.data.index1]  //身高
    var c = this.data.array2[this.data.index2]  //体重
    var d = this.data.array3[this.data.index3]  //年龄
    var e = this.data.index4  //运动频次
    if(a == 'male'){
      bmr = 10*c+6.25*b-5*d+5;
      if(e == 0){
        calorie = bmr*1.2;
        this.setData({
          caloriedata: parseInt(calorie)//取整数
        })
      }
      else if(e == 1){
        calorie = bmr * 1.375;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else if (e == 2) {
        calorie = bmr * 1.55;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else if (e == 3) {
        calorie = bmr * 1.725;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else{
        calorie = bmr * 1.9;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
    }
    else{
      bmr = 10 * c + 6.25 * b - 5 * d - 161;
      if (e == 0) {
        calorie = bmr * 1.2;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else if (e == 1) {
        calorie = bmr * 1.375;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else if (e == 2) {
        calorie = bmr * 1.55;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else if (e == 3) {
        calorie = bmr * 1.725;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
      else {
        calorie = bmr * 1.9;
        this.setData({
          caloriedata: parseInt(calorie)
        })
      }
    }
   console.log('结果',b,c,d,e)
   wx.setStorage({
     key: "totalcalorie",
     data: this.data.caloriedata,
   })
  }
})