var nsg={isReady:!1,isInit:!1,hashTenant:!1,src:{css:!1,js:!1},build:{num:"347",ver:"4.0.1-SNAPSHOT",branch:"local"},tlp:{tenant:["NIKE","JORDAN","CONVERSE"],locale:{parent:["en_us","ja_jp","el_gr","ko_kr","pl_pl","ru_ru","th_th","tr_tr","zh_cn","zh_tw"],child:{en_us:["ca_es","da_dk","de_de","en_ca","fr_ca","en_ae","en_as","en_au","en_bg","en_gb","en_eg","en_hk","en_hr","en_il","en_in","en_lu","en_mo","en_nz","en_ra","en_sk","en_vn","en_za","es_ar","es_cl","es_es","es_la","es_mx","es_pr","es_uy","fr_fr","it_it","nl_nl","no_no","pt_br","pt_pt","sv_se","fr_ma"],pl_pl:["cs_cz"],el_gr:["hu_hu"]}},platform:["desktop","mobile"]}};!function(){"use strict";function n(n){window.addEventListener?window.addEventListener("load",n,!1):window.attachEvent&&window.attachEvent("onload",n)}function e(n,e){if(!e||!n||"string"!=typeof n)return!1;e=e.hasOwnProperty("parent")?e.parent:e;for(var t=0;t<e.length;t++)if(e[t]===n)return n;return!1}function t(n){return!!n&&n.replace(/\/$/,"")}function r(n){var e=document.getElementsByTagName("head")[0];e.insertBefore(n,e.firstChild)}function a(){var n=navigator.userAgent,e=!!location.search.match("phone-preview");return e||n.match(/iPhone/i)||n.match(/iPod/i)||n.match(/Android/i)&&n.match(/mobile/i)}function s(n,t){var r=e(n,t.parent),a=!1;if(r)return r;var s="en_us";return Object.keys(t.child).forEach(function(r){e(n,t.child[r])&&(a=!0,s=r)}),!!a&&e(s,t.parent)}function i(n){return n=new RegExp(n,"gi"),!!location.pathname.match(n)}function o(n){var t,r=location.hash.substr(1).split(",");for(var a in r)if(r.hasOwnProperty(a)&&(t=r[a].split(":"),"tenant"===t[0]))return e(t[1],n);return!1}function c(n){var e,t={NIKE:["/launch/c/","/c/launch/"],JORDAN:["/c(/.*)jordan"],CONVERSE:["/c(/.*)converse"]},r=(location.pathname,location.hash.substr(1),o(n));if(r)return nsg.hashTenant=!0,r;for(var a in n){if(e=n[a],!t.hasOwnProperty(e))return!1;for(var s in t[e])if(t[e].hasOwnProperty(s)&&i(t[e][s]))return e}return!1}function l(){for(var n,e,t=["debugClientLibs=true","format=raw"],r=0;r<t.length;r++)if(n=t[r],e=location.search,e.search(n)!==-1)return!0;return!1}function u(n,t,r){n=!!n&&n,t=!!t&&t,r=r?r:[];var i=top.location.href.split("/"),o=document.getElementsByTagName("html")[0].className,c=e(t,r);if(c)return c;switch(o=o?o.split(" "):[],n){case"locale":var l,u,f=s(t,r);if(f)return f;for(var p in o)if(l=s(o[p],r))return l;for(var h in i)if(u=s(i[h],r))return u;return!1;case"platform":return!!a()&&"mobile"}}nsgConfig=nsgConfig||{};var f={HOST:location.protocol+"//"+location.host,BASEPATH:"/styleguide/nsg/",TENANT:"NIKE",LOCALE:"en_us",PLATFORM:"desktop",PLACEMENT:"append"},p={HOST:t(nsgConfig.HOST)||f.HOST,BASEPATH:nsgConfig.BASEPATH||f.BASEPATH,TENANT:u("tenant",nsgConfig.TENANT,nsg.tlp.tenant)||c(nsg.tlp.tenant)||f.TENANT,LOCALE:u("locale",nsgConfig.LOCALE,nsg.tlp.locale)||f.LOCALE,PLATFORM:u("platform",nsgConfig.PLATFORM,nsg.tlp.platform)||f.PLATFORM,PLACEMENT:nsgConfig.PLACEMENT||f.PLACEMENT},h=l()?"nsg.script.dev.js":"nsg.script.js",_=p.TENANT+"/"+p.LOCALE+"/"+p.PLATFORM+"/nsg.style.css";nsg.src.css=p.HOST+p.BASEPATH+_+"?v="+nsg.build.ver,nsg.src.js=p.HOST+p.BASEPATH+"js/"+h+"?v="+nsg.build.ver,nsg.config=p;var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.href=nsg.src.css;var E=document.createElement("script");switch(E.type="text/javascript",E.async=!0,E.defer=!0,E.src=nsg.src.js,"none"!==p.PLACEMENT&&r(g),p.PLACEMENT){case"prepend":r(E);break;case"append":n(function(){document.body.appendChild(E)})}}();
