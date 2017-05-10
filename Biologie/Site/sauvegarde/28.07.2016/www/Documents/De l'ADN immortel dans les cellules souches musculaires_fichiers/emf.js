var _eaq=_eaq||[],Emf=Emf||(function(){var expireDateTime,plugins={},documentAlias=document,navigatorAlias=navigator,screenAlias=screen,windowAlias=window,hasLoaded=false,registeredOnLoadHandlers=[],escapeWrapper=windowAlias.encodeURIComponent||escape,unescapeWrapper=windowAlias.decodeURIComponent||unescape,asyncTracker;function isDefined(property){return(property=typeof property)!=="undefined"&&property!=="unknown"}function apply(parameterArray){var f=parameterArray.shift();if(typeof f=="string"){asyncTracker[f].apply(this,parameterArray)}else{f.apply(this,parameterArray)}}function addEventListener(element,eventType,eventHandler,useCapture){if(element.addEventListener){element.addEventListener(eventType,eventHandler,useCapture);return true}if(element.attachEvent){return element.attachEvent("on"+eventType,eventHandler)}element["on"+eventType]=eventHandler}function executePluginMethod(methodName,callback){var result="",i,pluginMethod;for(i in plugins){pluginMethod=plugins[i][methodName];if(typeof pluginMethod==="function"){result+=pluginMethod(callback)}}return result}function beforeUnloadHandler(unloadEvent){executePluginMethod("unload");if(isDefined(expireDateTime)){var now;do{now=new Date()}while(now.getTime()<expireDateTime)}}function loadHandler(loadEvent){if(!hasLoaded){hasLoaded=true;executePluginMethod("load");for(var i=0;i<registeredOnLoadHandlers.length;i++){registeredOnLoadHandlers[i]()}}return true}function addReadyListener(){if(documentAlias.addEventListener){addEventListener(documentAlias,"DOMContentLoaded",function ready(){documentAlias.removeEventListener("DOMContentLoaded",ready,false);loadHandler()})}else{if(documentAlias.attachEvent){documentAlias.attachEvent("onreadystatechange",function ready(){if(documentAlias.readyState==="complete"){documentAlias.detachEvent("onreadystatechange",ready);loadHandler()}});if(documentAlias.documentElement.doScroll&&windowAlias==windowAlias.top){(function ready(){if(!hasLoaded){try{documentAlias.documentElement.doScroll("left")}catch(error){setTimeout(ready,0);return}loadHandler()}}())}}}addEventListener(windowAlias,"load",loadHandler,false)}function getReferrer(){var referrer="";try{referrer=top.document.referrer}catch(e){if(parent){try{referrer=parent.document.referrer}catch(e2){referrer=""}}}if(referrer===""){referrer=documentAlias.referrer}return referrer}function getHostname(url){var e=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),matches=e.exec(url);return matches?matches[1]:url}function getParameter(url,varName){var e=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),matches=e.exec(url),f=new RegExp("(?:^|&)"+varName+"=([^&]*)"),result=matches?f.exec(matches[1]):0;return result?unescapeWrapper(result[1]):""}function urlFixup(hostname,href,referrer){if(hostname=="webcache.googleusercontent.com"||hostname=="cc.bingj.com"||hostname.substr(0,5)=="74.6."){href=documentAlias.links[0].href;hostname=getHostname(href)}else{if(hostname=="translate.googleusercontent.com"){if(referrer===""){referrer=href}href=getParameter(href,"u");hostname=getHostname(href)}}return[hostname,href,referrer]}function Tracker(trackerUrl,siteId){var registeredHooks={},locationArray=urlFixup(windowAlias.location.hostname,windowAlias.location.href,getReferrer()),locationHostnameAlias=locationArray[0],locationHrefAlias=locationArray[1],configReferrerUrl=locationArray[2],configRequestMethod="GET",configTrackerUrl=trackerUrl||"",configTrackerSiteId=siteId||"",configCustomUrl,configTitle=documentAlias.title,configDownloadExtensions="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",configHostsAlias=[locationHostnameAlias],configIgnoreClasses=[],configDownloadClasses=[],configLinkClasses=[],configTrackerPause=500,configCustomData,browserHasCookies="0",pluginMap={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},linkTrackingInstalled=false,clickHeatInstalled=false,clickHeatDocument,clickHeatQuota=100,clickHeatLastIframe=-1,clickHeatTime=0,domainName=false,segmentsBuffer=null;pageIsTracked=false;visitorIdentifierCookieVar="EMF_VID";stringify=function(value){var escapable=new RegExp('[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function f(n){return n<10?"0"+n:n}function str(key,holder){var i,k,v,partial,value=holder[key];if(value===null){return"null"}if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":partial=[];if(value instanceof Array){for(i=0;i<value.length;i++){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":"["+partial.join(",")+"]";return v}if(value instanceof Date){return quote(value.getUTCFullYear()+"-"+f(value.getUTCMonth()+1)+"-"+f(value.getUTCDate())+"T"+f(value.getUTCHours())+":"+f(value.getUTCMinutes())+":"+f(value.getUTCSeconds())+"Z")}for(k in value){v=str(k,value);if(v){partial.push(quote(k)+":"+v)}}v=partial.length===0?"{}":"{"+partial.join(",")+"}";return v}}return str("",{"":value})};function setCookie(cookieName,value,daysToExpire,path,domain,secure){var expiryDate;if(daysToExpire){expiryDate=new Date();expiryDate.setTime(expiryDate.getTime()+daysToExpire*86400000)}documentAlias.cookie=cookieName+"="+escapeWrapper(value)+(daysToExpire?";expires="+expiryDate.toGMTString():"")+";path="+(path?path:"/")+(domain?";domain="+domain:"")+(secure?";secure":"")}function getCookie(cookieName){var cookiePattern=new RegExp("(^|;)[ ]*"+cookieName+"=([^;]*)"),cookieMatch=cookiePattern.exec(documentAlias.cookie);return cookieMatch?unescapeWrapper(cookieMatch[2]):0}function cookieExists(cookieName){return getCookie(cookieName)==0?false:true}function generateUuid(){var chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var uuid=new Array(32),rnd=0,r;for(var i=0;i<32;i++){if(i==8||i==13||i==18||i==23){uuid[i]="-"}else{if(i==14){uuid[i]="4"}else{if(rnd<=2){rnd=33554432+(Math.random()*16777216)|0}r=rnd&15;rnd=rnd>>4;uuid[i]=chars[(i==19)?(r&3)|8:r]}}}return uuid.join("")}function getImage(request){var image=new Image(1,1);image.onLoad=function(){};image.src=configTrackerUrl+"?"+request}function sendXmlHttpRequest(request){try{var xhr=windowAlias.XMLHttpRequest?new windowAlias.XMLHttpRequest():windowAlias.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;xhr.open("POST",configTrackerUrl,true);xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");xhr.setRequestHeader("Content-Length",request.length);xhr.setRequestHeader("Connection","close");xhr.send(request)}catch(e){getImage(request)}}function sendRequest(request,delay){var now=new Date();expireDateTime=now.getTime()+delay;if(configRequestMethod=="POST"){sendXmlHttpRequest(request)}else{getImage(request)}}function detectBrowserPlugins(){var i,mimeType;if(isDefined(navigatorAlias.javaEnabled())&&navigatorAlias.javaEnabled()){pluginMap.java[2]="1"}if(typeof windowAlias.GearsFactory==="function"){pluginMap.gears[2]="1"}if(navigatorAlias.mimeTypes&&navigatorAlias.mimeTypes.length){for(i in pluginMap){mimeType=navigatorAlias.mimeTypes[pluginMap[i][1]];if(mimeType&&mimeType.enabledPlugin){pluginMap[i][2]="1"}}}pluginMap.flash[2]=getSwfVer()}function hasCookies(){var testCookieName="_pk_testcookie";if(!isDefined(navigatorAlias.cookieEnabled)){setCookie(testCookieName,"1");return getCookie(testCookieName)=="1"?"1":"0"}return navigatorAlias.cookieEnabled?"1":"0"}function getSession(){var sess=null;var prefix="EMF_VISIT_";var url_id="emf_id";if(domainName){prefix+="_MD_"}if(!cookieExists(prefix+configTrackerSiteId)){var uuid=getParameter(location,url_id);if(uuid){sess=uuid;setCookie(prefix+configTrackerSiteId,sess,365,"/",domainName)}else{sess=generateUuid();setCookie(prefix+configTrackerSiteId,sess,365,"/",domainName)}}else{sess=getCookie(prefix+configTrackerSiteId)}return sess}function registerVisitorIdentifier(identifier){if(isDefined(identifier)&&(typeof identifier=="string"||typeof identifier=="number")&&identifier.toString().length>0){setCookie(visitorIdentifierCookieVar,identifier,365,"/",domainName)}}function unRegisterVisitorIdentifier(){setCookie(visitorIdentifierCookieVar,"",-1,"/",domainName)}function getVisitorIdentifier(){var result=null;if(cookieExists(visitorIdentifierCookieVar)){result=getCookie(visitorIdentifierCookieVar)}return result}function getRequest(customData,pluginMethod){var now=new Date(),request="idsite="+configTrackerSiteId+"&rand="+Math.random()+"&h="+now.getHours()+"&m="+now.getMinutes()+"&s="+now.getSeconds()+"&url="+escapeWrapper(isDefined(configCustomUrl)?configCustomUrl:locationHrefAlias)+"&sess="+getSession();visitorIdentifier=getVisitorIdentifier();if(visitorIdentifier&&isDefined(visitorIdentifier)&&visitorIdentifier.length>0){request+="&vid="+visitorIdentifier}if(isDefined(configCustomData)&&!isDefined(customData)){customData=configCustomData}if(isDefined(customData)){if(customData!==null){request+="&data="+escapeWrapper(stringify(customData))}}else{if(isDefined(configCustomData)){request+="&data="+escapeWrapper(stringify(configCustomData))}}request+=executePluginMethod(pluginMethod);return request}function logPageView(customTitle,customData){var i,request=getRequest(customData,"log")+"&action_name="+escapeWrapper(isDefined(customTitle)?customTitle:configTitle);for(i in pluginMap){request+="&"+pluginMap[i][0]+"="+pluginMap[i][2]}request+="&urlref="+escapeWrapper(configReferrerUrl)+"&res="+screenAlias.width+"x"+screenAlias.height+"&cookie="+browserHasCookies;request=addSegmentsToRequest(request);sendRequest(request,configTrackerPause)}function logGoal(idGoal,customRevenue,customData){var i,request=getRequest(customData,"goal")+"&idgoal="+idGoal;for(i in pluginMap){request+="&"+pluginMap[i][0]+"="+pluginMap[i][2]}request+="&urlref="+escapeWrapper(configReferrerUrl)+"&res="+screenAlias.width+"x"+screenAlias.height+"&cookie="+browserHasCookies;if(isDefined(customRevenue)&&customRevenue!==null){request+="&revenue="+customRevenue}sendRequest(request,configTrackerPause)}function logLink(url,linkType,customData){var request=getRequest(customData,"click")+"&"+linkType+"="+escapeWrapper(url)+"&redirect=0";sendRequest(request,configTrackerPause)}function logClickHeat(x,y,w){var request=getRequest(null,"clickheat");request+="&x="+x+"&y="+y+"&w="+w;sendRequest(request,configTrackerPause)}function logSegmentBuffer(){if(!pageIsTracked){return}var request=getRequest(null,"segments");request=addSegmentsToRequest(request);if(isDefined(request)){sendRequest(request,configTrackerPause)}}function addSegmentsToRequest(request){if(!isDefined(segmentsBuffer)||segmentsBuffer===null){return request}if(!(segmentsBuffer instanceof Array)){segmentsBuffer=[segmentsBuffer]}for(var i in segmentsBuffer){if(segmentsBuffer[i]&&segmentsBuffer[i].toString().length>0){request+="&segment[]="+segmentsBuffer[i]}}segmentsBuffer=null;return request}function isSiteHostName(hostName){var i,alias,offset;for(i=0;i<configHostsAlias.length;i++){alias=configHostsAlias[i].toLowerCase();if(hostName==alias){return true}if(alias.substr(0,2)=="*."){if((hostName)==alias.substr(2)){return true}offset=hostName.length-alias.length+1;if((offset>0)&&(hostName.substr(offset)==alias.substr(1))){return true}}}return false}function getClassesRegExp(configClasses,defaultClass){var i,classesRegExp="(^| )(emf[_-]"+defaultClass;if(isDefined(configClasses)){for(i=0;i<configClasses.length;i++){classesRegExp+="|"+configClasses[i]}}classesRegExp+=")( |$)";return new RegExp(classesRegExp)}function getLinkType(className,href,isInLink){if(!isInLink){return"link"}var downloadPattern=getClassesRegExp(configDownloadClasses,"download"),linkPattern=getClassesRegExp(configLinkClasses,"link"),downloadExtensionsPattern=new RegExp("\\.("+configDownloadExtensions+")([?&#]|$)","i");return linkPattern.test(className)?"link":(downloadPattern.test(className)||downloadExtensionsPattern.test(href)?"download":0)}function clickHandler(clickEvent){var sourceElement,parentElement,tag,linkType;if(!isDefined(clickEvent)){clickEvent=windowAlias.event}if(isDefined(clickEvent.target)){sourceElement=clickEvent.target}else{if(isDefined(clickEvent.srcElement)){sourceElement=clickEvent.srcElement}else{return}}while((parentElement=sourceElement.parentNode)&&((tag=sourceElement.tagName)!="A"&&tag!="AREA")){sourceElement=parentElement}if(isDefined(sourceElement.href)){var originalSourceHostName=sourceElement.hostname,sourceHostName=originalSourceHostName.toLowerCase(),sourceHref=sourceElement.href.replace(originalSourceHostName,sourceHostName),scriptProtocol=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");if(!scriptProtocol.test(sourceHref)){linkType=getLinkType(sourceElement.className,sourceHref,isSiteHostName(sourceHostName));if(linkType){logLink(sourceHref,linkType)}}}}function heatClickHandler(clickEvent){var c,element;if(!isDefined(clickEvent)){clickEvent=windowAlias.event;c=clickEvent.button;element=clickEvent.srcElement}else{c=clickEvent.which;element=null}if(c!=0){if(clickHeatQuota>0){clickHeatQuota=clickHeatQuota-1;var clickTime=new Date();if(clickTime.getTime()-clickHeatTime>1000){clickHeatTime=clickTime.getTime();if(element!==null&&element.tagName.toLowerCase()==="iframe"){if(element.sourceIndex===clickHeatLastIframe){return}clickHeatLastIframe=element.sourceIndex}else{clickHeatLastIframe=-1}var x=clickEvent.clientX;var y=clickEvent.clientY;var w=clickHeatDocument.clientWidth!==undefined?clickHeatDocument.clientWidth:window.innerWidth;var h=clickHeatDocument.clientHeight!==undefined?clickHeatDocument.clientHeight:window.innerHeight;var scrollx=window.pageXOffset===undefined?clickHeatDocument.scrollLeft:window.pageXOffset;var scrolly=window.pageYOffset===undefined?clickHeatDocument.scrollTop:window.pageYOffset;if(!isNaN(x)&&!isNaN(y)&&!isNaN(w)&&!isNaN(h)&&x>=0&&y>=0&&x<=w&&y<=h){logClickHeat(x+scrollx,y+scrolly,w)}}}}}function addClickListener(element){addEventListener(element,"click",clickHandler,false)}function addClickListeners(){if(!linkTrackingInstalled){linkTrackingInstalled=true;var i,ignorePattern=getClassesRegExp(configIgnoreClasses,"ignore"),linkElements=documentAlias.links;if(linkElements){for(i=0;i<linkElements.length;i++){if(!ignorePattern.test(linkElements[i].className)){addClickListener(linkElements[i])}}}}}function addClickHeatListeners(){if(!clickHeatInstalled){clickHeatInstalled=true;clickHeatDocument=(document.documentElement!==undefined&&document.documentElement.clientHeight!==0)?document.documentElement:document.body;addEventListener(document,"mousedown",heatClickHandler,false);var i,iFrames=document.getElementsByTagName("iframe");for(i=0;i<iFrames.length;i++){addEventListener(iFrames[i],"focus",heatClickHandler,false)}}}function registerHook(hookName,userHook){var hookObj=null;if(typeof hookName=="string"&&!isDefined(registeredHooks[hookName])){if(typeof userHook=="object"){hookObj=userHook}else{if(typeof userHook=="string"){try{eval("hookObj ="+userHook)}catch(e){}}}registeredHooks[hookName]=hookObj}return hookObj}function controlVersion(){var version;var axo;var e;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version=axo.GetVariable("$version")}catch(e){}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version="WIN 6,0,21,0";axo.AllowScriptAccess="always";version=axo.GetVariable("$version")}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version=axo.GetVariable("$version")}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version="WIN 3,0,18,0"}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");version="WIN 2,0,0,11"}catch(e){version=0}}if(version!=0&&version!=-1){var tempArray=version.split(" ");tempArray=tempArray[1];tempArray=tempArray.split(",");version=tempArray[0]+"."+tempArray[1]}return version}function getSwfVer(){var flashVer=0;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;var descArray=flashDescription.split(" ");var tempArrayMajor=descArray[2].split(".");var versionMajor=tempArrayMajor[0];var versionMinor=tempArrayMajor[1];flashVer=versionMajor+"."+versionMinor}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){flashVer=4}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){flashVer=3}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){flashVer=2}else{var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;if(isIE&&isWin&&!isOpera){flashVer=controlVersion()}}}}}return flashVer}browserHasCookies=hasCookies();detectBrowserPlugins();executePluginMethod("run",registerHook);return{getSession:function(){return getSession()},hook:registeredHooks,getHook:function(hookName){return registeredHooks[hookName]},setTrackerUrl:function(trackerUrl){if(isDefined(trackerUrl)){configTrackerUrl=trackerUrl}},setSiteId:function(siteId){if(isDefined(siteId)){configTrackerSiteId=siteId}},setCustomData:function(customData){if(isDefined(customData)){configCustomData=customData}},addCustomData:function(name,value){if(!isDefined(configCustomData)){configCustomData={}}configCustomData[name]=value},setLinkTrackingTimer:function(delay){if(isDefined(delay)){configTrackerPause=delay}},setDownloadExtensions:function(extensions){if(isDefined(extensions)){configDownloadExtensions=extensions}},addDownloadExtensions:function(extensions){if(isDefined(extensions)){configDownloadExtensions+="|"+extensions}},setDomains:function(hostsAlias){if(typeof hostsAlias=="object"&&hostsAlias instanceof Array){configHostsAlias=hostsAlias;configHostsAlias.push(locationHostnameAlias)}else{if(typeof hostsAlias=="string"){configHostsAlias=[hostsAlias,locationHostnameAlias]}}},setIgnoreClasses:function(ignoreClasses){if(typeof ignoreClasses=="object"&&ignoreClasses instanceof Array){configIgnoreClasses=ignoreClasses}else{if(typeof ignoreClasses=="string"){configIgnoreClasses=[ignoreClasses]}}},setRequestMethod:function(method){configRequestMethod=method||"GET"},setReferrerUrl:function(url){if(isDefined(url)){configReferrerUrl=url}},setCustomUrl:function(url){if(isDefined(url)){configCustomUrl=url}},setDocumentTitle:function(title){if(isDefined(title)){configTitle=title}},setDownloadClasses:function(downloadClasses){if(typeof downloadClasses=="object"&&downloadClasses instanceof Array){configDownloadClasses=downloadClasses}else{if(typeof downloadClasses=="string"){configDownloadClasses=[downloadClasses]}}},setDownloadClass:function(className){if(typeof className=="string"){configDownloadClasses=[className]}},setLinkClasses:function(linkClasses){if(typeof linkClasses=="object"&&linkClasses instanceof Array){configLinkClasses=linkClasses}else{if(typeof linkClasses=="string"){configLinkClasses=[linkClasses]}}},setLinkClass:function(className){if(typeof className=="string"){configLinkClasses=[className]}},addListener:function(element){if(isDefined(element)){addClickListener(element)}},enableLinkTracking:function(){if(hasLoaded){addClickListeners()}else{registeredOnLoadHandlers[registeredOnLoadHandlers.length]=function(){addClickListeners()}}},trackGoal:function(idGoal,customRevenue,customData){logGoal(idGoal,customRevenue,customData)},trackRoi:function(idRoi){logGoal(idRoi)},trackLink:function(sourceUrl,linkType,customData){logLink(sourceUrl,linkType,customData)},trackPageView:function(customTitle,customData){logPageView(customTitle,customData);pageIsTracked=true},enableClickHeat:function(){if(hasLoaded){addClickHeatListeners()}else{registeredOnLoadHandlers[registeredOnLoadHandlers.length]=function(){addClickHeatListeners()}}},setDomainName:function(domain){domainName=domain},logSegment:function(segments){segmentsBuffer=segments;logSegmentBuffer()},setVisitorIdentifier:function(identifier){registerVisitorIdentifier(identifier)},unsetVisitorIdentifier:function(){unRegisterVisitorIdentifier()}}}function TrackerProxy(){return{push:apply}}addEventListener(windowAlias,"beforeunload",beforeUnloadHandler,false);addReadyListener();asyncTracker=new Tracker();for(var i=0;i<_eaq.length;i++){apply(_eaq[i])}_eaq=new TrackerProxy();return{addPlugin:function(pluginName,pluginObj){plugins[pluginName]=pluginObj},getTracker:function(emfUrl,siteId){return new Tracker(emfUrl,siteId)}}}());