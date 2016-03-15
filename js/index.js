var Person = {
	timer : null,

	init : function(){
		this.render();
	},

	render : function(){
		var _this = this;
		$("#mark a").on("click",function(){
			_this.tab($(this));
		});

		this.intro();
	},

	tab : function(obj){
		var $aAll = $("#mark a");
		var $aDiv = $("#page div");
		var $index;
		var nPage = obj.index();
		if(nPage == 0){
			this.intro();
		}

		for(var k=0; k<$aAll.size(); k++){
			$aDiv.eq(k).css("z-index","0");
			if($aAll.eq(k).hasClass("zIndex")){
				$index = k;
			}
		}

		if(!obj.hasClass("zIndex")){
			$aDiv.eq(obj.index()).css("z-index","3");

			//console.log($aDiv.eq(obj.index()));
			$aDiv.eq($index).animate({top:-731},{complete:function(){
				for(var i=0; i<$aAll.size(); i++){
					$aAll.eq(i).removeClass("zIndex");
					$aDiv.eq(i).removeClass("zIndex-page");
				}
				obj.addClass("zIndex");
				$aDiv.eq(obj.index()).addClass("zIndex-page");
				$aDiv.eq($index).css({top:34});
			}});
		}
	},

	intro : function(){
		var oP=document.getElementById('intro');
		oP.innerHTML = "";
		var str='我的名字叫阚宏, 88年12月出生, 来自安徽合肥的一位女孩, 2014.7-2015.12年在中国讯网,负责日常的公司专题页面制作, 独立完成了网站的总体布局，兼容所有常见浏览器，而且易于开发和维护.负责一些网页特效的编写，页面的重构,配合后台与前端页面进行简单的数据交互.2012.5-2013.7年 在上海智能社培训了Javascript、html、css课程,掌握了前端开发技术，包括：JS、HTML5、CSS3等.学会了移动端的开发.对各种计算机语言及开源项目有浓厚兴趣,希望有机会能接触一些新的技术,提高自身的技能. Tel:13162205237. QQ:576330616. Mail:kanhong2007@126.com.';
		var i = 0;
		clearInterval(this.timer);
		this.timer=setInterval(function(){
			if(i < str.length){
				oP.innerHTML += str.charAt(i);
			} else {
				clearInterval(this.timer);
			}
			i++;	
		},100)
	}
};

Person.init();

var oZp=document.getElementById('zp');
var oList=document.getElementById('list');
var aA=oList.children;
oZp.onclick=function(){
	for(var i=0; i<aA.length; i++){
		move(aA[i],{'opacity':1})
	}
	
}

