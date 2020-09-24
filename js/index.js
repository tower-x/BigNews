
(function () {
    $(function () {
        //热点图片
        $.ajax({
            url: bigNew.index_hotpic,
            type: 'get',
            dataType: 'json',
            success: function (backData) {
                // console.log(backData);
                $('.focus_list').html(template('hotPic', backData))
                $('.focus_list>li:eq(0)').addClass('first')
            }
        });
        //导航列表
        $.ajax({
            url: bigNew.index_category,
            type: 'get',
            dataType: 'json',
            success: function (backData) {
                // console.log(backData);
                $('.menu').html(template('nav_list', backData))
            }
        });
        //最新资讯
        $.ajax({
            url: bigNew.index_latest,
            type: 'get',
            dataType: 'json',
            success: function (backData) {
                // console.log(backData);
                //模板渲染
                $('.common_news').html(template('article_list', backData))
            }
        });
        //热门排行
        $.ajax({
            url: bigNew.index_rank,
            type: 'get',
            dataType: 'json',
            success: function (backData) {
                // console.log(backData);
                $('.hotrank_list').html(template('hotRank', backData))
                $('.hotrank_list>li:eq(0)>span').addClass('first')
                $('.hotrank_list>li:eq(1)>span').addClass('second')
                $('.hotrank_list>li:eq(2)>span').addClass('third')
            }
        });
        //最新评论
        $.ajax({
            url: bigNew.index_latest_comment,
            type: 'get',
            dataType: 'json',
            success: function (backData) {
                // console.log(backData);
                $('.comment_list').html(template('latest_comment', backData))

            }
        });
        //焦点关注
        $.ajax({
            url: bigNew.index_attention,
            type: 'get',
            dataType: 'json',
            success: function (backData) {
                console.log(backData);
                $('.guanzhu_list').html(template('attention', backData))
            }
        });
    })
}())