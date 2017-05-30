/**
 * Created by wangyiming on 2017/5/30.
 */
var proLoad = (function () {
    function proLoad(img, options) {
        var _this = this;
        this.disorderlyLoad = function () {
            var img = _this.imgs;
            var len = img.length;
            var opts = _this.opts;
            var count = 0;
            img.forEach(function (src, index) {
                var imgObj = new Image();
                imgObj.onload = function () {
                    count++;
                    opts.each(count, len);
                    if (count === len)
                        opts.all();
                };
                imgObj.onerror = function () {
                    count++;
                    opts.each || opts.each();
                    if (count === len)
                        opts.all || opts.all();
                };
                imgObj.src = src;
            });
        };
        this.imgs = (typeof img === "string") ? [img] : img;
        this.opts = options;
    }
    return proLoad;
}());
