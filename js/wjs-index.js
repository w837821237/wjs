$(function () {
    // 获取所有的div
    $('[data-toggle="tooltip"]').tooltip();
    var items = $(".carousel-inner .item");
    $(window).on("resize",function () {
      var width = $(window).width();
      // 遍历每一个div 根据 屏幕的宽度追加元素
      items.each(function (index,value) {

      });
        if (width < 768) {
            items.each(function (index,value) {
              var item =$(this);
              var src = item.data("smallImage");
              // console.log(src);
              item.html("<a href='javascript:;' class='mobileImg' > <img src='"+src+"' ></a>");
            })
        }
            else{
                items.each(function (index,value) {
                    var item = $(this);
                    var imgsrc = item.data("largeImage");
                    item.html($("<a href='javascript:;' class='pcImg '></a>").css("backgroundImage","url('"+imgsrc+"')"));
                })
      }
    }).trigger("resize");
      var ul=$(".wjs_product .nav-tabs");
      var lis = ul.find("li");
      var totalWidth=0;
      $(lis).each(function (index,value) {
          var width = $(value).innerWidth();
          totalWidth += width;
          console.log(totalWidth);
      })
     ul.width(totalWidth);
    var myScroll = new IScroll('.wrapper',{
        scrollX:true,
        scrollY:false
    })
});