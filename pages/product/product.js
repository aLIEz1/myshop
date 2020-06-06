Page({
    data: {
        id: 0,
        product: {},
        index:0,
        counts:[1,2,3,4,5,6,7,8,9,10],
        productCounts:1,//选中的数量
    },
    getProductInfo:function(productId){
      var url='http://qhejpxn.cn/api/product/'+productId;
      wx.request({
          url,
          success:res=>{
              this.setData({
                  product:res.data,
              })
          }
      })
    },
    bindPickerChange:function(e){
        var index=e.detail.value;
        this.setData({
            index,
            productCounts:this.data.counts[index],
        })
    },
    onLoad: function (options) {
        console.log(options);
        var id=options.id;
        this.setData({
            id: options.id,
        });
        this.getProductInfo(id)
    }
});