webpackJsonp([0],{"/C9p":function(t,s){},"42Hy":function(t,s,i){"use strict";function a(t){i("/C9p")}var e=i("97NJ"),n=i("6/fH"),c=i("mPyB"),r=a,o=c(e.a,n.a,!1,r,"data-v-63dc80ac",null);s.a=o.exports},"6/fH":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"music"},[i("audio",{ref:"audio",on:{timeupdate:t.musicTimeUpdate,canplay:t.musicCanPlay,ended:t.musicEnded}}),t._v(" "),i("div",{staticClass:"mask-bg",staticStyle:{"background-image":"url(http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg)"}}),t._v(" "),i("header",[i("p",{staticClass:"name"},[t._v(t._s(t.song.name))]),t._v(" "),i("p",{staticClass:"singer"},[t._v(t._s(t.song.singer))])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"cd"},[i("div",{staticClass:"line"},[i("div",{staticClass:"triger",class:t.playStatus?"":"animate"})]),t._v(" "),i("div",{ref:"coverWrap",staticClass:"cover-wrap"},[i("div",{ref:"cover",staticClass:"cover",class:t.playStatus?"animate":""},[i("div",{staticClass:"cd-bg"}),t._v(" "),i("img",{staticClass:"cover-img",attrs:{src:t.song.img}})])])]),t._v(" "),i("div",{staticClass:"souvenir"},[i("p",[t._v("一切都来得刚刚好")]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.time))])])]),t._v(" "),i("footer",[i("div",{staticClass:"range-wrap"},[i("div",{staticClass:"range"},[i("span",{staticClass:"already"},[t._v(t._s(t.pastTime))]),t._v(" "),i("div",{staticClass:"duration"},[i("span",{staticClass:"currentProgress",style:{width:t.progress+"%"}}),t._v(" "),i("span",{staticClass:"ball",style:{left:t.progress+"%"}})]),t._v(" "),i("span",{staticClass:"total"},[t._v(t._s(t.totalTime))])])]),t._v(" "),i("div",{staticClass:"musicCtrl"},[i("i",{staticClass:"playType icon-music-shunxu"}),t._v(" "),i("i",{staticClass:"prev icon-prevdetail",on:{click:function(s){t.switchSong(2)}}}),t._v(" "),i("i",{staticClass:"playPause",class:t.playStatus?"icon-pause-detail":"icon-playdetail",on:{click:t.togglePlay}}),t._v(" "),i("i",{staticClass:"next icon-nextdetail",on:{click:function(s){t.switchSong(1)}}}),t._v(" "),i("i",{staticClass:"menu icon-list-music",on:{click:t.toggleMusicList}})])]),t._v(" "),i("div",{staticClass:"music-list"},[i("transition",{attrs:{name:"sideUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"list-content"},[i("div",{staticClass:"title"},[i("div",{staticClass:"play-type"},[i("i",{staticClass:"icon-music-shunxu"}),t._v(" "),i("span",[t._v("列表循环")]),t._v(" "),i("span",[t._v("(5)")])]),t._v(" "),i("div",{staticClass:"border-1px"})]),t._v(" "),i("ul",{staticClass:"container"},t._l(t.songList,function(s,a){return i("li",{class:{active:t.index==a},on:{click:function(s){t.selectSong(a)}}},[i("i",{staticClass:"playingicon icon-volume-medium"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),i("span",{staticClass:"singer"},[t._v(" - "+t._s(s.singer))]),t._v(" "),i("div",{staticClass:"border-1px"})])}))])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"mask",on:{click:t.toggleMusicList}})])],1),t._v(" "),t.loaded?t._e():i("div",{staticClass:"loading"},[t._m(0)])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box"},[i("div",{staticClass:"line"},[i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("div")])])}],n={render:a,staticRenderFns:e};s.a=n},"97NJ":function(t,s,i){"use strict";var a=[{name:"The Right Path",singer:"Thomas Greenberg",url:"/static/data/Thomas Greenberg - The Right Path.mp3",img:"http://p1.music.126.net/_Nzg2JzIjaBy38rSSdfFig==/851021999952100.jpg?param=300y300"},{name:"刚好遇见你",singer:"李玉刚",url:"/static/data/李玉刚 - 刚好遇见你.mp3",img:"http://p1.music.126.net/lDyytkTaPYVTb1Vpide6AA==/18591642115187138.jpg?param=300y300"},{name:"都选C",singer:"董成鹏",url:"/static/data/大鹏 - 都选C.mp3",img:"http://p1.music.126.net/FCvXiE-OndiMDYUkaXDK1w==/109951163029337837.jpg?param=300y300"},{name:"爱的故事(上)",singer:"孙耀威",url:"/static/data/孙耀威 - 爱的故事(上).mp3",img:"http://p1.music.126.net/xKKcN1WJZwqKk1VBZhtMvA==/67070209310501.jpg?param=300y300"},{name:"追光者",singer:"岑宁儿",url:"/static/data/岑宁儿 - 追光者.mp3",img:"http://p1.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=300y300"},{name:"好想你",singer:"朱主爱",url:"/static/data/朱主爱 - 好想你.mp3",img:"http://p1.music.126.net/8FNnsbZO2R7gTiU1O8oIWw==/3383197285041412.jpg?param=300y300"},{name:"一瞬间",singer:"丽江小倩",url:"/static/data/丽江小倩 - 一瞬间.mp3",img:"http://p1.music.126.net/nMSY-bfEgRMKo020tcZkZA==/31885837220938.jpg?param=300y300"},{name:"追梦赤子心",singer:"GALA",url:"/static/data/GALA - 追梦赤子心.mp3",img:"http://p1.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg?param=300y300"},{name:"十指紧扣",singer:"张智霖",url:"/static/data/张智霖 - 十指紧扣.mp3",img:"http://p1.music.126.net/Bt-48siHvx6KAlWi5N7WBw==/125344325584438.jpg?param=300y300"},{name:"塑料袋",singer:"乔杉",url:"/static/data/乔杉 - 塑料袋.mp3",img:"http://p1.music.126.net/Bw30uQ8MVANtLBn4C-OGWQ==/109951163035595789.jpg?param=300y300"}];s.a={name:"Index",data:function(){return{songList:a,song:{name:"",singer:"",url:"",img:""},playStatus:!1,loaded:!1,index:Math.ceil(Math.random()*(a.length-1)),time:"我们在一起已经"+Math.ceil((Date.now()-Date.parse(" Mar 04,2017"))/864e5)+"天啦~",duration:0,totalTime:"00:00",pastTime:"00:00",progress:0,showList:!1}},computed:{},created:function(){this.$nextTick(function(){this.setSong(),this.loaded=!0})},methods:{musicTimeUpdate:function(){var t=Math.floor(this.$refs.audio.currentTime),s=Math.floor(t/60),i=t%60;this.pastTime=(s<10?"0"+s:s)+":"+(i<10?"0"+i:i),this.progress=t/this.duration*100},musicCanPlay:function(){this.duration=Math.floor(this.$refs.audio.duration);var t=Math.floor(this.duration/60),s=this.duration%60;this.totalTime=(t<10?"0"+t:t)+":"+(s<10?"0"+s:s)},musicEnded:function(){this.switchSong()},setSong:function(){this.song=a[this.index],this.$refs.audio.setAttribute("src",this.song.url),this.$refs.audio.load(),this.playStatus=!1},switchSong:function(t){var s=a.length;t==s-1?this.index==s-1?this.index=0:this.index+=1:0==this.index?this.index=s-1:this.index-=1,this.setSong(),this.togglePlay()},togglePlay:function(){this.playStatus?(this.setTransForm(),this.$refs.audio.pause(),this.playStatus=!1):(this.$refs.audio.play(),this.playStatus=!0)},setTransForm:function(){var t=getComputedStyle(this.$refs.cover).transform,s=getComputedStyle(this.$refs.coverWrap).transform;this.$refs.coverWrap.style.transform="none"===s?t:t.concat("",s)},toggleMusicList:function(){this.showList=!this.showList},selectSong:function(t){if(this.playStatus&&this.index==t)return this.toggleMusicList();this.index=t,this.setSong(),this.togglePlay(),this.toggleMusicList()}}}},"C1l+":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},e=[],n={render:a,staticRenderFns:e};s.a=n},M93x:function(t,s,i){"use strict";function a(t){i("mAKK")}var e=i("dYPY"),n=i("C1l+"),c=i("mPyB"),r=a,o=c(e.a,n.a,!1,r,null,null);s.a=o.exports},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("KEcs"),e=i("M93x"),n=i("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:e.a}})},YaEn:function(t,s,i){"use strict";var a=i("KEcs"),e=i("1eSk"),n=i("42Hy");a.a.use(e.a),s.a=new e.a({routes:[{path:"/",name:"index",component:n.a}]})},dYPY:function(t,s,i){"use strict";s.a={name:"app"}},mAKK:function(t,s){}},["NHnr"]);