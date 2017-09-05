/**
 * 判读鼠标位置，让盒子更换不同的背景图片。
 * @param  {[option]} $ [传入一个对象：包含对象需要调用的数据，json数据数组中的索引值]
 *
 */
(function ($) {
    $.fn.fouceMouse = function( option ){
        var data = option.data||"";
        var i = option.i||0;
        console.log(that);
        var that = $(this);
        var posiX,posiY,myLeft,myTop,resultX,resultY,lt,t,rt,r,rb,b,lb,l,center;
        $("body").mousemove(function (e) {
            posiX = e.pageX;
            posiY = e.pageY;
            myLeft = that.offset().left + that.width()/2;
            myTop = that.offset().top + that.height()/2;
            resultX = myLeft - posiX;
            resultY = myTop - posiY;
            console.log(resultX);
            lt = resultX > that.width()/4 && resultY >that.height()/4;
            t = resultX < that.width()/4 && resultX > -that.width()/4 && resultY >that.height()/4;
            rt = resultX < -that.width()/4 && resultY >that.height()/4;
            r =  resultX < -that.width()/4 && resultY < that.height()/4 && resultY > -that.height()/4
            rb = resultX < -that.width()/4 && resultY < -that.height()/4;
            b = resultX < that.width()/4 && resultX > -that.width()/4 && resultY < -that.height()/4;
            lb = resultX > that.width()/4 && resultY < -that.height()/4;
            l = resultX > that.width()/4 && resultY > -that.height()/4 && resultY < that.height()/4;
            if(lt) {
                that.css("backgroundImage","url("+ data[i].lt +")");
            }else if(t){
                that.css("backgroundImage","url("+ data[i].t +")");
            }else if(rt) {
                that.css("backgroundImage","url("+ data[i].rt +")");
            }else if(r) {
                that.css("backgroundImage","url("+ data[i].r +")");
            }else if(rb) {
                that.css("backgroundImage","url("+ data[i].rb +")");
            }else if(b){
                that.css("backgroundImage","url("+ data[i].b +")");
            }else if(lb) {
                that.css("backgroundImage","url("+ data[i].lb +")");
            }else if(l){
                that.css("backgroundImage","url("+ data[i].l +")");
            }else {
                that.css("backgroundImage","url("+ data[i].center +")");
            }
        });
    }
})(window.jQuery);