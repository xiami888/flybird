/// <reference path="jquery-3.1.1.slim.min.js" />


$(function () {
    var $bird = $("#dbird");//找到小鸟的对象
    var pos = $bird.offset();//获取小鸟的方位
    var birdSize = { width: $bird.width(), height: $bird.height() };//获取小鸟的尺寸；
    var speed = 20;//设置小鸟移动的速度；
    var keyrecord = 39;
    $(document).keydown(function (even) {
        var key = even.keyCode;//得到键盘事件；
        if (key != keyrecord)
        {
            $bird.removeClass().addClass("dir_"+key);
        }
        keyrecord = key;
        switch (key)
        {
            case 37://左
                pos.left -= speed;
                if (pos.left <= -birdSize.width)
                {
                    pos.left = $(window).width();
                }
                break;
            case 38://上
                pos.top -= speed;
                if (pos.top <= -birdSize.height)
                {
                    pos.top = $(window).height();
                }
                break;
            case 39://右
                pos.left += speed;
                if (pos.left >= $(window).width())
                {
                    pos.left = -birdSize.width;
                }
                break;
            case 40://下
                pos.top += speed;
                if (pos.top >=$(window).height())
                {
                    pos.top = -birdSize.height;
                }
                break;
        }
        $bird.offset(pos);

    })

});