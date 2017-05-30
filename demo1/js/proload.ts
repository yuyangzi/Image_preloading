/**
 * Created by wangyiming on 2017/5/30.
 */

class proLoad {
    imgs: [string];
    opts: {};

    constructor(img, options: { each?, all? }) {
        this.imgs = (typeof img === "string") ? [img] : img;
        this.opts = options;
    }

    private disorderlyLoad = () => {
        let img = this.imgs;
        let len: number = img.length;
        let opts: { each?, all? } = this.opts;
        let count: number = 0;
        img.forEach(function (src, index) {
            let imgObj = new Image();
            imgObj.onload = () => {
                count++;
                opts.each(count,len);
                if (count === len) opts.all();

            };
            imgObj.onerror = () => {
                count++;
                opts.each || opts.each();
                if (count === len) opts.all || opts.all();
            };
            imgObj.src = src;
        })
    }
}