Page({
    data: {
        products:[],
        keywords:'',
    },
    getProdcuts:function(keywords){
        var url='http://qhejpxn.cn/api/products?pagesize=100&keywords='+keywords;
        wx.request({
            url,
            success :res=>{
                this.setData({
                    products:res.data.data,
                })
            }
        })
    },
    onLoad: function (options) {
        var keywords=options.keywords
        this.setData({
            keywords,
        });
        this.getProdcuts(keywords)
    }
});