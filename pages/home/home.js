Page({
    data: {
        banners: [
            {url: '/images/banner/banner-1a.png'},
            {url: '/images/banner/banner-2a.png'},
            {url: '/images/banner/banner-3a.png'},
        ],
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
            success: res=> {
                console.log(res);
                this.setData({
                    banners:res.data.items
                });
            }
        })
    },
    onLoad: function (options) {
        this.getBanners();
    }
});