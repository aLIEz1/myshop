Page({
    data: {
        products:[],
        keywords:'',
        page:1, //当前是第几页
        totalPages:0 //总的页数
    },
    getProdcuts:function(keywords,page=1,isRefresh=false){
        var url='http://qhejpxn.cn/api/products?pagesize=8&keywords='+keywords+'&page='+page;
        wx.request({
            url,
            success :res=>{
                this.setData({
                    products:this.data.products.concat(res.data.data),
                    page:res.data.current_page,
                    totalPages:res.data.last_page,
                });
                if (isRefresh){
                    wx.stopPullDownRefresh(); //停止下拉刷新
                }
            }
        })
    },
    onLoad: function (options) {
        var keywords=options.keywords
        this.setData({
            keywords,
        });
        this.getProdcuts(keywords)
    },
    onReachBottom:function () {
        if (this.data.page<this.data.totalPages){
            this.getProdcuts(this.data.keywords,this.data.page+1,false)
        }else {
            wx.showToast({
                title:'我是有底线的',
                icon:'success',
                duration:500,
            });
        }
    },
    onPullDownRefresh:function () {
        this.setData({
            products:[]
        });
        this.getProdcuts(this.data.keywords,1,true)
    }

});