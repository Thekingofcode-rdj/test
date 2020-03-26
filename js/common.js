//设为主页
function setHomePage(obj,siteurl){
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(siteurl);
	}
	catch(e){
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',siteurl);
		}
	}
}

//加入收藏
function addFavorite(sitename,siteurl){
	if(document.all){window.external.addFavorite(siteurl,sitename);}else if(window.sidebar){window.sidebar.addPanel(sitename, siteurl,'');}
}


//返回顶部
function scrolltop(){
	$('body,html').animate({scrollTop:0});
}

//字体大小
function fontZoom(size){
	document.getElementById("showcontent").style.fontSize = size +'px';
}

//返回顶部
function scrollTop() {
	var topArrow = $( '<img alt="Top_arrow" id="top_arrow" src="/images/top_arrow.png" />' );
	topArrow.css( {
		display: 'none',
		cursor: 'pointer',
		border: '0 none',
		bottom: '40px',
		height: 'auto',
		margin: 0,
		opacity: 0.5,
		padding: 0,
		position: 'fixed',
		right: '40px',
		width: '35px'
	} );
	$('body').append( topArrow );

	$(window).scroll(function(){
		$( window ).scrollTop() > 20 ? $( topArrow ).fadeIn( 400 ) : $( topArrow ).fadeOut( 400 );
	});

	$('body,html').scroll(function(){
		$( 'body, html' ).scrollTop() > 20 ? $( topArrow ).fadeIn( 400 ) : $( topArrow ).fadeOut( 400 );
	});

	//当点击跳转链接后，回到页面顶部位置
	$( topArrow ).click(function(){
		$('body,html').animate({scrollTop:0});
		return false;
	});
};

//等比例缩放图片
function AutoResizeImage(maxWidth,maxHeight,objImg){
	var img = new Image();
	img.src = objImg.src;
	var hRatio;
	var wRatio;
	var Ratio = 1;
	var w = img.width;
	var h = img.height;
	wRatio = maxWidth / w;
	hRatio = maxHeight / h;
	if (maxWidth ==0 && maxHeight==0){
		Ratio = 1;
	}else if (maxWidth==0){//
		if (hRatio<1) Ratio = hRatio;
	}else if (maxHeight==0){
		if (wRatio<1) Ratio = wRatio;
	}
	else if (wRatio<1 || hRatio<1){
		Ratio = (wRatio<=hRatio?wRatio:hRatio);
	}
	if (Ratio<1){
		w = w * Ratio;
		h = h * Ratio;
	}
	objImg.height = h;
	objImg.width = w;
}

//信息浏览次数
function getHits(eid,id){
	$(function(){
		$.get("/js/Services.asp?action=hits&id="+ id, function(data){
		  if (eid != "")
		  {
			  $("#"+ eid).text(data);
		  }
		});
	})	
}