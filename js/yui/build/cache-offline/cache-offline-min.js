/*
YUI 3.6.0 (build 5521)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("cache-offline",function(f){function d(){d.superclass.constructor.apply(this,arguments);}var a=null,c=f.JSON;try{a=f.config.win.localStorage;}catch(b){}f.mix(d,{NAME:"cacheOffline",ATTRS:{sandbox:{value:"default",writeOnce:"initOnly"},expires:{value:86400000},max:{value:null,readOnly:true},uniqueKeys:{value:true,readOnly:true,setter:function(){return true;}}},flushAll:function(){var e=a,g;if(e){if(e.clear){e.clear();}else{for(g in e){if(e.hasOwnProperty(g)){e.removeItem(g);delete e[g];}}}}else{}}});f.extend(d,f.Cache,a?{_setMax:function(e){return null;},_getSize:function(){var h=0,g=0,e=a.length;for(;g<e;++g){if(a.key(g).indexOf(this.get("sandbox"))===0){h++;}}return h;},_getEntries:function(){var e=[],j=0,h=a.length,g=this.get("sandbox");for(;j<h;++j){if(a.key(j).indexOf(g)===0){e[j]=c.parse(a.key(j).substring(g.length));}}return e;},_defAddFn:function(l){var k=l.entry,j=k.request,i=k.cached,g=k.expires;k.cached=i.getTime();k.expires=g?g.getTime():g;try{a.setItem(this.get("sandbox")+c.stringify({"request":j}),c.stringify(k));}catch(h){this.fire("error",{error:h});}},_defFlushFn:function(j){var h,g=a.length-1;for(;g>-1;--g){h=a.key(g);if(h.indexOf(this.get("sandbox"))===0){a.removeItem(h);}}},retrieve:function(j){this.fire("request",{request:j});var i,g,h;try{h=this.get("sandbox")+c.stringify({"request":j});try{i=c.parse(a.getItem(h));}catch(l){}}catch(k){}if(i){i.cached=new Date(i.cached);g=i.expires;g=!g?null:new Date(g);i.expires=g;if(this._isMatch(j,i)){this.fire("retrieve",{entry:i});return i;}}return null;}}:{_setMax:function(e){return null;}});f.CacheOffline=d;},"3.6.0",{requires:["cache-base","json"]});