/*
* @Author: Marte
* @Date:   2019-03-04 18:18:27
* @Last Modified by:   Marte
* @Last Modified time: 2019-03-05 13:20:08
*/

window.onload = function (){
    var index = 1;
    var timerId;
    searchEffect();

    timeback();

   bannerEffect();
   startTime();
    var banner = document.querySelector(".jd_banner");
    var bannerWidth = banner.offsetWidth;
    console.log(bannerWidth);
    var imgBox = document.querySelector(".jd_bannerImg");
    var startX,moveX,distanceX;
    imgBox.addEventListener("touchstart",function(e){
    console.log(123);
    clearInterval(timerId);
    startX = e.targetTouches[0].clientX;
 })

  imgBox.addEventListener("touchmove", function(e){
    moveX = e.targetTouches[0].clientX;
    distanceX = moveX - startX;
    imgBox.style.left = -index*bannerWidth + distanceX;
 })
}
// 头部的js效果
 function searchEffect() {
      var banners = document.querySelector(".jd_banner");
      var bannerHeight = banners.offsetHeight;
      // console.log(bannerHeight);
      var search = document.querySelector(".jd_search");
     window.onscroll = function(){
        var offsetTop = document.documentElement.scrollTop;
        if (bannerHeight>=offsetTop) {
            var opacity = offsetTop/bannerHeight;

            search.style.background = "rgba(233,35,34,"+opacity+")";
        };
    }
 }

  // 倒计时效果
  function  timeback (){
    var span = document.querySelector(".timeB").querySelectorAll("span");
    var totleTime = 3700;
     var timerId=setInterval(function(){
        totleTime--;
        if (totleTime<0) {
            clearInterval(timerId);
            return;
        };
        var hour =  Math.floor(totleTime/3600);
        var minute = Math.floor(totleTime%3600/60);
        var second = Math.floor(totleTime%3600%60);
        span[0].innerHTML = Math.floor(hour/10);
        span[1].innerHTML = Math.floor(hour%10);
        span[3].innerHTML = Math.floor(minute/10);
        span[4].innerHTML = Math.floor(minute%10);
        span[6].innerHTML = Math.floor(second/10);
        span[7].innerHTML = Math.floor(second%10);
     }, 1000)
  }

 // 轮播图

  function bannerEffect(){
     var imgBox = document.querySelector(".jd_bannerImg");
     var first = imgBox.querySelector("li:first-of-type");
     var last  = imgBox.querySelector("li:last-of-type");
     var banner = document.querySelector(".jd_banner");
     imgBox.appendChild(first.cloneNode(true));
     imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);
     // 设置对应的样式
              var lis = imgBox.querySelectorAll("li");
         var count = lis.length;
          // 获取当前屏幕下banner的宽度
        var bannerWidth = banner.offsetWidth;
        // 设置整个imgBox 的宽度动态生成
        imgBox.style.width = bannerWidth*count + "px";
        // 设置每一个li的宽度
        for (var i = 0; i < count; i++) {
             lis[i].style.width = bannerWidth + "px";
      };
       // 动态生成left的偏移值
     imgBox.style.left = -bannerWidth +"px" ;
     window.onresize=function(){
        var bannerWidth = banner.offsetWidth;
        // 设置整个imgBox 的宽度动态生成
        imgBox.style.width = bannerWidth*count + "px";
        // 设置每一个li的宽度
        for (var i = 0; i < count; i++) {
             lis[i].style.width = bannerWidth + "px";
      };
       // 动态生成left的偏移值
       imgBox.style.left = -bannerWidth +"px" ;
     }
  }
 // 实现自动轮播
  var index =1;
  function startTime (){

    var imgBox = document.querySelector(".jd_bannerImg");
    var banner = document.querySelector(".jd_banner");
    var bannerWidth = banner.offsetWidth;

        timerId=setInterval(function(){
       index++;
       imgBox.style.transition = "all 0.5s ease-in-out";
       imgBox.style.left = -bannerWidth*index +"px";
       setInterval(function(){
        if (index==9) {
         imgBox.style.transition="none";
         index=1;
         imgBox.style.left = -bannerWidth*index +"px";
       };
       }, 500)
    }, 2000)
  }

