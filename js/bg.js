
var w = document.documentElement.clientWidth-80;
var h = document.documentElement.clientHeight-50;
//for(var n=1;n<=20;n++){
	for(var i=0;i<cdata.length;i++){
		var wr = Math.floor(Math.random() * ( w + 1));
		var hr = Math.floor(Math.random() * ( h + 1));
		var fsize = parseInt(Math.random()*21+20);
		var color = getC();	
		//document.write("<span style='color:"+color+";font-size:"+fsize+"px;font-family:微软雅黑;position:absolute;left:"+wr+"px;top:"+hr+"px;z-index:"+n+i+"'>"+cdata[i]+"</span>");
		document.write("<span style='color:"+color+";font-size:"+fsize+"px;font-family:微软雅黑;position:absolute;left:"+wr+"px;top:"+hr+"px;z-index:"+i+"'><a href='"+cdata[i].url+"' target='_blank'>"+cdata[i].name+"</a></span>");
	}
	//alert(str);
//}	
function getC(){ 
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
   return "#"+r.toString(16)+g.toString(16)+b.toString(16);
}

