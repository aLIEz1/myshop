Page({
    data: {
        banners: [
            {url: '/images/banner/banner-1a.png'},
            {url: '/images/banner/banner-2a.png'},
            {url: '/images/banner/banner-3a.png'},
        ],
        products: [],
        message: 'HelloWorld',
        array: [1, 2, 3, 4, 5],
        view: 'HELLO',
        staff1: {firstName: 'zhang', lastName: 'san'},
        staff1: {firstName: 'li', lastName: 'si'},
        staff1: {firstName: 'wang', lastName: 'wu'},

    },
    getBanners: function () {
        var url = 'https://qhejpxn.cn/api/banners/1';
        wx.request({
            url: url,
            success: res => {
                console.log(res);
                this.setData({
                    banners: res.data.items
                });
            }
        })
    },
    getRecentProducts: function () {
        var url = 'http://qhejpxn.cn/api/products/recent?count=6';
        wx.request({
            url: url,
            success: res => {
                console.log(res);
                this.setData({
                    products: res.data
                });
            }
        })
    },
    handleProductsItemTap: function (event) {
        var id = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pages/product/product?id=' + id,
        })
    },
    handleSearch: function (event) {
        // console.log(e.detail.value)
        var keywords = event.detail.value;
        if (keywords === '') {
            wx.showToast({
                title: '未输入关键字！',
                icon: 'success',
                duration: 500
            });
        }
        setTimeout(function () {
            wx.navigateTo({
                url: '/pages/product_search/product_search?keywords=' + keywords,
            })
        },1000)

    },
    onLoad: function (options) {
        this.getBanners();
        this.getRecentProducts();
    }
});