window.onscroll= function(){
	var height = document.documentElement.scrollTop || document.body.scrollTop;
    var topnav = document.getElementsByClassName( "top-nav" );
    if (height>20) {
    	topnav[0].setAttribute("class","top-nav landing-top");
    }else{
    	topnav[0].setAttribute("class","top-nav");
    }
}

var diaName=new Array("meeting-dia","quest-dia","notice-dia");
var diaVir=new Array(1,1,1);

function diaInit(className){
	var dia=document.getElementsByClassName(className);
	var width=dia[0].offsetWidth;
	var height=dia[0].offsetHeight;
	var x=(window.innerWidth-width)/2;
	var y=(window.innerHeight-height)/2;
	dia[0].style.marginTop=y+"px";
	dia[0].style.marginLeft=x+"px";

	var header=dia[0].getElementsByClassName("dia-header");
	header[0].style.width=width+"px";

	var footer=dia[0].getElementsByClassName("dia-footer");
	var finish=footer[0].getElementsByClassName("finish");
	var cancel=footer[0].getElementsByClassName("cancel");
	finish[0].style.width=width/2 +"px";
	cancel[0].style.width=width/2 +"px";
	// alert(width+" "+height);
}

function diaOpen(){
	for(var i=0;i<diaVir.length;i++){
		if(diaVir[i]==1){
			diaInit(diaName[i]);
		}
	}
}


function diaClose(){
	for(var i=0;i<diaVir.length;i++){
		if(diaVir[i]==1){
			diaOff(diaName[i]);
		}
	}
}
function diaOn(className){
	diaClose();
	var dia=document.getElementsByClassName(className);
	dia[0].style.opacity=1;
	dia[0].setAttribute("class",className+ " showing-dia");
	diaInit( "showing-dia" );
}
function diaOff(className){
	var dia=document.getElementsByClassName(className);
	dia[0].style.opacity=0;
	dia[0].setAttribute("class",className+" hidden-dia");
}
function ballShow () {
	// body...
	var fly= document.getElementsByClassName('ball-hidden');
	fly[0].setAttribute("class","ball");
}
function init () {
	// body...
	ballShow();
}
window.onload=function(){
	init();
	login();
	diaOpen();
	diaClose();
}

window.onresize=function(){
	diaInit( "showing-dia" );
}


var flag=1;
function modalOn(){
  alert(2);
	var mod=document.getElementsByClassName("modal");
	mod[0].style.display="block";
	// var fly=document.getElementsByClassName("fly");
	// for(var i=0;i<4;i++){
	// 	fly[i].setAttribute("class","fly fly-show");
	// }
	flag=0;
}

function modalOff(){
  alert(2);
	var mod=document.getElementsByClassName("modal");
	mod[0].style.display="none";
	// var fly=document.getElementsByClassName("fly");
	// for(var i=0;i<4;i++){
	// 	fly[i].setAttribute("class","fly");
	// }
	diaClose();
	flag=1;
}
function show(){
	if(flag==1){
		modalOn();
	}else{
		modalOff();
	}
}
