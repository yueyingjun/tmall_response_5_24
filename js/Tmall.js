let pages = document.querySelectorAll(".pagerBox>li");//声明pagers变量通过document整个文档用querySelectorAll选择文档中的标签

let img = document.querySelectorAll(".imgBox>li");//声明pagers变量通过document整个文档用querySelectorAll选择文档中的标签

let banner = document.querySelector(".banner");//声明pagers变量通过document整个文档用querySelectorAll选择文档中的标签

// let flag = false;//声明flag是假，下面有它的条件，如果满足它是false那个条件就会返回false，否则就继续实施下面的程序
pages.forEach(function (ele, index) {//通过已经声明的变量pagers用forEach方法遍历数组用回调函数(对于每个值要进行的操作)
    ele.onclick = function () {//通过ele这个参数用onclick鼠标单击事件用函数表示出来
        // flag = true;//如果点击了flag为真，下面的条件就不满足就不会继续了
        console.log(index);
        now = index;
        for (let i = 0; i < img.length; i++) {//通过for循环声明一个变量i初始值为0，i小于变量imgs的length长度，i循环++
            img[i].classList.remove("active");//变量imgs的（第i个）classList类的集合通过remove移除active这个类
            pages[i].classList.remove("active");//变量pagers的（第i个）classList类的集合通过remove移除active这个类
        }
        img[index].classList.add("active");//变量imgs第index个的class List类的集合用add添加active这个类
        this.classList.add("active");//变量pagers中的class List类的集合用add添加active这个类
    }
});
let now = 0;// 声明一个变量now初始值为0
function move() {//创建move函数
    console.log(1);
    now++;// 变量now在函数中++
    if (now === img.length) {//如果满足条件变量now=变量imgs的长度就让now恢复初始值0
        now = 0;
    }
    if (now === -1) {
        now = img.length - 1;
    }
    for (let i = 0; i < img.length; i++) {//通过for循环声明一个变量i初始值为0，i小于变量imgs的length长度，i循环++
        img[i].classList.remove("active");//变量imgs的（第i个）classList类的集合通过remove移除active这个类
        pages[i].classList.remove("active");//变量pagers的（第i个）classList类的集合通过remove移除active这个类
    }
    img[now].classList.add("active");//变量imgs第index个的class List类的集合用add添加active这个类
    pages[now].classList.add("active");//变量pagers第index个的class List类的集合用add添加active这个类
}

{
    let st = setInterval(move, 3000);//声明一个变量st通过setInterval方法定时3000毫秒调用move函数一次
    banner.onmouseenter = function () {//通过onmouseenter事件在鼠标进入banner这个元素时
        clearInterval(st);//清除定时st
    };
    banner.onmouseleave = function () {//通过onmouseleave事件在鼠标离开banner这个元素时
        // if (flag) {//如果满足flag就返回flag的原值
        //     return;
        // }
        st = setInterval(move, 3000);//变量st通过setInterval方法定时3000毫秒调用move函数一次
    }
}
// let next = document.querySelector(".next");
// let prev = document.querySelector(".prev");
// let flag2 = true;
// next.onclick = function () {
//     if (flag2) {
//         flag2 = false;
//         flag = true;
//         move();
//     }
// };
// prev.onclick = function () {
//     if (flag2) {
//         flag2 = false;
//         now -= 2;
//         flag = true;
//         move();
//     }
// };
// img.forEach(function (ele, index) {
//     ele.addEventListener("transitionend", function () {
//         flag2 = true;
//     })
// });