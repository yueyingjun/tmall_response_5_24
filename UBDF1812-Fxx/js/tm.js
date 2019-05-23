
window.onload = function(){
	lb();//轮播图程序
	xlb();//小轮播图程序
	cllb("cedh");//侧拉导航内容程序
}

//侧边导航栏	原网页采用了事件委托将事件交给了dl处理省去了for循环	有空改下
function cllb(dhid){
	var oDh = document.getElementById(dhid);
	var aDdd = oDh.children;
	for (var i=1;i<aDdd.length;i++) {
		aDdd[i].ind = i;
		aDdd[i].onmouseenter = function(){
			var index = this.ind;
			oDiv = aDdd[index].children[1];
			oDiv.style.visibility = "visible";
		}
		aDdd[i].onmouseleave = function(){
			var index = this.ind;
			oDiv = aDdd[index].children[1];
			oDiv.style.visibility = "hidden";
		}
	}
}
//侧边导航栏 jq版 委托事件
//轮播图 透明度 层级 display 三种共同作用
//过程描述：
//当前图层 o:1; z:1 d:b; 一秒后 o:0; z:0; d:n;
//操作图层 o:0; z:0; d:n; 一秒内 o:0-1; z:2; d:b;  一秒后 o:1; z:1; d:b;
var t = null;//定时器命名
var h = null;//定时器命名
var n = 0;//标识位置用
var s = 0;
function lb(){
	var lbid = document.getElementById("lb");
	var lbk = lbid.children;//0为轮播图片部分 1为下标部分
	var albdiv = lbk[0].children;//轮播样式设置部分
	var num = albdiv.length;
	s = n;//计算当前正在显示的图片下标
	n = (n+1)%num;//计算当前应该操作的图片下标

	//一秒内操作
	for (var i = 0;i<1000;i++) {
		var op = albdiv[s].style.opacity;
		var op2 = albdiv[n].style.opacity;
		albdiv[s].style.opacity = (Number(op)*1000-1)/1000;
		albdiv[n].style.opacity = (Number(op2)*1000+1)/1000;
	}
	albdiv[n].style.display = "block";
	albdiv[n].style.zIndex = 2;
	albdiv[s].style.display = "none";
	//一秒后操作
	t && clearInterval(t);
	t = setInterval(function(){
		albdiv[s].style.display = "none";
		albdiv[s].style.opacity = 0;
		albdiv[s].style.zIndex = 0;
		albdiv[n].style.zIndex = 1;
		t && clearInterval(t);
        t = null;
	},1000);
    h && clearTimeout(h);
    h=setTimeout(lb,2000);
}
//小轮播图
var o = null;
function xlb(){
//定义大图轮播定时器
	o && clearInterval(o);
	o = setInterval(xlb,3000);
}

