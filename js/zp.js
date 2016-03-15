var oUl=document.getElementById('ul1');
var aLi=oUl.children;
var ready=true;

var aPos=[];
for(var i=0; i<aLi.length; i++){
	aPos.push({
		left:aLi[i].offsetLeft,
		top:aLi[i].offsetTop,
		width:aLi[i].offsetWidth - 10,
		height:aLi[i].offsetHeight - 10,
		opacity:1
	});

	aLi[i].style.left=aPos[i].left+'px';
	aLi[i].style.top=aPos[i].top+'px';
}

for(var i=0; i<aLi.length; i++){
	aLi[i].style.position="absolute";
	aLi[i].style.margin=0;
}


document.onclick=function(){
	if(!ready) return;
	ready=false;
	down()
};

function down(){
	var i=aLi.length-1;
	var timer=setInterval(function(){
		(function(index){
			move(aLi[i],{left:oUl.offsetWidth/2,top:oUl.offsetHeight,width:10, height:10, opacity:0},{time:700,complete:function(){
				if(index==0){
					console.log(333)
					up();
				}
			}})
			
		})(i)
			i--;
			if(i==-1)
				clearInterval(timer);
	},100)
}


function up(){
console.log(222)
	var i=aLi.length-1;
	var timer=setInterval(function(){
		(function(index){
			console.log(111)
			move(aLi[i],aPos[i],{time:700,complete:function(){
				if(index==0){
					ready=true;
				}
			}})
			
		})(i);
		i--;
		if(i==-1){
			clearInterval(timer)
		}
	},100)
}

