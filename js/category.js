/*
* @Author: Marte
* @Date:   2019-03-05 22:03:21
* @Last Modified by:   Marte
* @Last Modified time: 2019-03-06 10:30:17
*/

window.onload =function (){
    // 获取左侧部分
    var ct_cLeft = document.querySelector(".ct_cLeft");
    // 获取ul盒子
    var ulBox = ct_cLeft.querySelector("ul:first-of-type");
    // 获取左侧栏的高度
    var lis = ulBox.querySelectorAll("li");
    var leftHeight = ct_cLeft.offsetHeight;
    // 获取ulBox的高度
    var ulBoxHeight = ulBox.offsetHeight;
    // 声明 touch 事件的三个变量
    var maxTop = 0;
    var minTop = leftHeight - ulBoxHeight;
    var maxBounceTop=maxTop+100;
    var minBounceTop=minTop-100;
    // 最大高度和最小高度
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    // 记录当前top偏移值
    var curentY = 0;
    // 手指刚接触屏幕事件
    ulBox.addEventListener("touchstart", function(e){

       startY = e.targetTouches[0].clientY;

    })

   // 手指接触移动事件
   ulBox.addEventListener("touchmove", function(e){

     moveY = e.targetTouches[0].clientY;
     // 求取上下移动得距离差正好是整个ul top 偏移值
     distanceY = moveY - startY;
     // 清除可能设置的过度效果带来的移动响应
     if (distanceY + curentY > maxBounceTop||distanceY + curentY < minBounceTop) {
        console.log("超出范围了");

        return;
     };
     ulBox.style.transition = "none";
     ulBox.style.top = (distanceY + curentY)+ "px";
   })

   // 手指离开屏幕事件
   ulBox.addEventListener("touchend", function(e){
        curentY += distanceY;
        console.log(curentY);
        if (distanceY + curentY > maxTop) {
            curentY = maxTop;
            ulBox.style.transition = "all 0.5s";
            ulBox.style.top = maxTop +"px";
        }
        else if (distanceY + curentY < minTop) {
               curentY = minTop;
               ulBox.style.transition = "all 0.5s";
               ulBox.style.top = minTop +"px";
        }
   })
   // 给每一个li对象动态添加索引值
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
    };
    // 添加tap事件
   // itcast.tap(ulBox,function(e){
   //  // 移除所有的li标签的active类样式
   //  for (var i = 0; i < lis.length; i++) {
   //      lis[i].classList.remove("active");
   //  };
   //  var li = e.target.parentNode;
   //  var liHeight = li.offsetHeight;
   //  li.classList.add("active");
   //  // 添加自动移动顶部功能
   //  ulBox.transition = "top 0.5s";
   //  if (-li.index*liHeight<minTop) {
   //      ulBox.style.top = minTop +"px";
   //      curentY = minTop;

   //  }else{
   //       ulBox.style.top = -li.index*liHeight +"px";
   //       curentY = -li.index*liHeight;
   //  }

   // })
       if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            /*参数可以是任意的dom元素，如果写document.body，说明会将document.body下面的所的元素都绑定fastclick*/
            FastClick.attach(document.body);
        }, false);
    }
   // 使用fastclick 插件来 绑定touch事件
   ulBox.addEventListener("click", function(e){
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove("active");
    };
    var li = e.target.parentNode;
    var liHeight = li.offsetHeight;
    li.classList.add("active");
    // 添加自动移动顶部功能
    ulBox.style.transition = "top 0.5s";
    if (-li.index*liHeight<minTop) {
        ulBox.style.top = minTop +"px";
        curentY = minTop;

    }else{
         ulBox.style.top = -li.index*liHeight +"px";
         curentY = -li.index*liHeight;
    }
   })
}
