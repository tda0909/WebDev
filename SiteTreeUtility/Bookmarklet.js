javascript:void(/*github.com/tda0909/WebDev/tree/master/SiteTreeUtility*/(function(){d=document;jcpm={f:function(){jcpm.a="HTML Tree Layout:\r\n";jcpm.b(d.body,0);jcpm.a+="End of HTML Tree";jcpm.c()},b:function(a,c){if("undefined"!==typeof a.tagName){for(var b=0;b<c;b++)jcpm.a+="  :";jcpm.a+="<"+a.tagName.toLowerCase()+">";jcpm.a+="    ";if(0!==a.classList.length)for(b=0;b<a.classList.length;b++)jcpm.a+="."+a.classList[b];jcpm.a+="    ";""!==a.id&&(jcpm.a+="#"+a.id);jcpm.a+="\r\n"}for(b=0;b<a.childNodes.length;b++)jcpm.b(a.childNodes[b],c+1)},c:function(){var a=open("","","width=1200,height=600"),c=d.createElement("TEXTAREA");c.appendChild(d.createTextNode(jcpm.a));c.setAttribute("warp","soft");c.setAttribute("style","margin:0px;border:0px;width:100%;height:100%;");a.document.body.appendChild(c)}};jcpm.f();})());
