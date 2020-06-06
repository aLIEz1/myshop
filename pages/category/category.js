Page({
    data: {
        categories: [],//所有的类别信息
        currentMenuIndex: 0,//当前选中的项
        categoryInfo: {}
    },

    //获取类别信息
    getCategorys: function () {
        var url = 'http://qhejpxn.cn/api/categories';
        wx.request({
            url: url,
            success: res => {
                console.log(res)
                var categoryData = res.data;
                this.setData({
                    categories: res.data
                });
                if (categoryData.length > 0) {
                    this.getProductsByCategory(categoryData[0].id)
                }
            }
        })
    },
    changeCategory: function (event) {
        // console.log(event);
        var index = event.currentTarget.dataset.index;
        this.setData({
            currentMenuIndex: index
        });
    },
    getProductsByCategory: function (id) {
        var url = 'http://qhejpxn.cn/api/categories/' + id;
        var index = this.data.currentMenuIndex;
        var categoryData = this.data.categories;
        wx.request({
            url,
            success: res => {
                console.log(res)
                var dataObj = {
                    topImgUrl: categoryData[index].img.url,
                    title: categoryData[index].name,
                    products: res.data.products,

                };
                this.setData({
                    categoryInfo:dataObj,
                });
            }
        })
    },
    onLoad: function (options) {
        this.getCategorys();
    }
});