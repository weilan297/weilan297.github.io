require=function i(t,e,n){function c(a,o){if(!e[a]){if(!t[a]){var h="function"==typeof require&&require;if(!o&&h)return h(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=e[a]={exports:{}};t[a][0].call(l.exports,function(i){var e=t[a][1][i];return c(e||i)},l,l.exports,i,t,e,n)}return e[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)c(n[a]);return c}({Oncollision:[function(i,t,e){"use strict";cc._RF.push(t,"9127f6HtB9KEYsoz8RrSBNT","collision"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){},onCollisionEnter:function(i,t){if("laji"==i.node.group){var e=cc.removeSelf();i.node.runAction(e),i.node.name==laji1?t.node.children[0].active=!0:(i.node.name,laji2,t.node.children[0].active=!0),console.log(i.node.name)}}}),cc._RF.pop()},{}],buttonScript:[function(i,t,e){"use strict";cc._RF.push(t,"3d1a93YOSpMCqfR1tR0Z7jU","buttonScript"),cc.Class({extends:cc.Component,properties:{zhuangshi:[],fuzhuang:[]},onLoad:function(){this.mask=cc.find("Canvas/mask")},loadScene:function(i,t){t-0?"1"==t?(Window.level=1,cc.director.loadScene("game1")):"2"==t?(Window.level=2,cc.director.loadScene("game2")):"3"==t?(Window.level=3,cc.director.loadScene("game3")):"4"==t?(Window.level=4,cc.director.loadScene("game1")):"5"==t?(Window.level=5,cc.director.loadScene("game1")):"6"==t&&(Window.level=6,cc.director.loadScene("game1")):(Window.level=1,cc.director.loadScene(t))},decorateActive:function(i,t){cc.find("Canvas/wupinlan").active=!0,this.mask.active=!0}}),cc._RF.pop()},{}],choose:[function(i,t,e){"use strict";cc._RF.push(t,"f53c8cuxGVFj7LKFm8p9E61","choose"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){Window.level=cc.sys.localStorage.getItem("level")||1,7==Window.level?(cc.sys.localStorage.setItem("level",6),this.level=6):this.level=Window.level,this._levelButtons=cc.find("Canvas/ui/star"),console.log(this.level),this.lightStar()},lightStar:function(){for(var i=0;i<this.level;i++)this._levelButtons.children[i].active=!0}}),cc._RF.pop()},{}],data:[function(i,t,e){"use strict";cc._RF.push(t,"23060eXlilHCbJuV9pcaf2c","data");var n={1:{duihuaneirong:["丽娜，房间里面真是太乱了，妈妈找不到闹钟了。","你能为妈妈找到闹钟吗？","好的，没问题妈妈。"],duihuashunxu:[1,1,2],mubiao:["闹钟 ",1],pos:[cc.p(601,-13.4)]},2:{duihuaneirong:["妈妈，大海真美啊！可是里面为什么有这么多垃圾。","是啊，大海是美丽的，但是海里却被人们丢了很多垃圾。","那我们把海里的垃圾捞起来，大海就会更美丽了，对吗？","是的，我的丽娜。"],duihuashunxu:[2,1,2,1]},3:{duihuaneirong:["妈妈，我老是忘记一些东西。","没事的，我的小丽娜，我们来锻炼一下你的记忆力吧","记住数字相同的两张卡片，并将它们点开。"],duihuashunxu:[2,1,1],mubiao:["西瓜 ",1],pos:[cc.p(601,-13.4)]},4:{duihuaneirong:["丽娜，你到浴室帮妈妈把毛巾拿一下好吗？","妈妈是蓝色的那条毛巾吗？","是的，丽娜"],duihuashunxu:[1,2,1],mubiao:["毛巾 ",1],pos:[cc.p(-259,159)]},5:{duihuaneirong:["丽娜，可以帮妈妈拿一块面包吗？","是上次那样方形的面包吗？","不是的，这次是长形的面包，跟你上次见到的不一样哦。","好的，我会找到它。"],duihuashunxu:[1,2,1,2],mubiao:["面包 ",1],pos:[cc.p(-93,16)]},6:{duihuaneirong:["丽娜你知道蝴蝶长什么样吗？","是的，妈妈，我知道。","那你找出蝴蝶来吧。","好的，妈妈。"],duihuashunxu:[1,2,1,2],mubiao:["蝴蝶 ",1],pos:[cc.p(-294,-15)]}};t.exports=n,cc._RF.pop()},{}],decorate:[function(i,t,e){"use strict";cc._RF.push(t,"5c52cyGNwlGcbEZOQDHMFEK","decorate"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.wupinlan=cc.find("Canvas/wupinlan"),this.mask=cc.find("Canvas/mask")},markbutton:function(){this.wupinlan.active=!1,this.mask.active=!1}}),cc._RF.pop()},{}],game1:[function(i,t,e){"use strict";cc._RF.push(t,"c44e2evBjhBBYZ5TPAWs5uz","game1");var n=i("data");cc.Class({extends:cc.Component,properties:{targetPhoto:[cc.SpriteFrame],targetPrefab:[cc.Prefab],bgTexture:[cc.SpriteFrame]},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this.window=cc.find("Canvas/window"),this.num=0,this.level=Window.level,this.lunci=1,this.bg=cc.find("Canvas/ui/bg"),this.bg.getComponent(cc.Sprite).spriteFrame=this.bgTexture[this.level-1],this.duihuakuang1=cc.find("Canvas/ui/momTalking"),this.duihuakuang2=cc.find("Canvas/ui/renaTalking"),this.mask=cc.find("Canvas/ui/mask"),this.target=cc.find("Canvas/ui/target"),this.targetlabel=cc.find("Canvas/ui/target/targetLabel").getComponent(cc.Label),this.targetPicture=cc.find("Canvas/ui/target/targetPicture"),this.momsTalking=this.duihuakuang1.children[0].getComponent(cc.Label),this.renasTalking=this.duihuakuang2.children[0].getComponent(cc.Label),this.startTalking(),this.finding()},targetBtn:function(i,t){this.node.on(cc.Node.EventType.TOUCH_END,function(e,n){var c=e.getLocation();console.log(i);var s=i.getComponent(cc.BoxCollider).world.points;if(cc.Intersection.pointInPolygon(c,s)){var a=cc.find("Canvas/ui/guoguan");a.active=!0;var o=cc.sys.localStorage.getItem("level");console.log(o),console.log(t),t+1>o&&cc.sys.localStorage.setItem("level",t+1),console.log(a)}})},bgChange:function(){this.bg.getComponent(cc.Sprite).spriteFrame=this.bgTexture[this.level-1],console.log(this.bg.getComponent(cc.Sprite).spriteFrame),console.log(this.bgTexture[this.level-1]),console.log(this.bg.getComponent(cc.Sprite).spriteFrame)},startTalking:function(){1==n[this.level].duihuashunxu[0]?(this.momsTalking.string=n[this.level].duihuaneirong[0],this.duihuakuang1.active=!0,this.mask.active=!0):2==n[this.level].duihuashunxu[0]&&(this.renasTalking.string=n[this.level].duihuaneirong[0],this.duihuakuang2.active=!0,this.mask.active=!0)},talking:function(){if(this.lunci==n[this.level].duihuashunxu.length){this.targetlabel.string=n[this.level].mubiao[0]+"X "+n[this.level].mubiao[1],this.lunci=1,this.target.active=!0,this.duihuakuang2.active=!1,this.duihuakuang1.active=!1,this.mask.active=!1;var i=cc.blink(2,3);this.targetPicture.getComponent(cc.Sprite).spriteFrame=this.targetPhoto[this.level-1],this.targetPicture.runAction(i);var t=cc.instantiate(this.targetPrefab[this.level-1]);t.getComponent(cc.Sprite).spriteFrame=this.targetPhoto[this.level-1],t.parent=this.bg,t.getPosition(n[this.level].pos[0]),this.targetBtn(t,this.level)}else 1==n[this.level].duihuashunxu[this.lunci]?(this.momsTalking.string=n[this.level].duihuaneirong[this.lunci],this.duihuakuang1.active=!0,this.duihuakuang2.active=!1,this.lunci++):2==n[this.level].duihuashunxu[this.lunci]&&(this.renasTalking.string=n[this.level].duihuaneirong[this.lunci],this.duihuakuang2.active=!0,this.duihuakuang1.active=!1,this.lunci++)},startgame:function(){this.target.active=!1},finding:function(){this.node.on(cc.Node.EventType.TOUCH_END,function(i){console.log("错了")})}}),cc._RF.pop()},{data:"data"}],game2:[function(i,t,e){"use strict";cc._RF.push(t,"c18a2jtj5tLCIzvTXgbnBqB","game2");var n=i("data");cc.Class({extends:cc.Component,properties:{passWindow:cc.Node,rubbish:cc.Node,hook:cc.Node,line:cc.Node,player:cc.Node,leftbutton:cc.Node,rightbutton:cc.Node},onLoad:function(){this.level=2,this.lunci=1,this.duihuakuang1=cc.find("Canvas/UI/momTalking"),this.duihuakuang2=cc.find("Canvas/UI/renaTalking"),this.momsTalking=this.duihuakuang1.children[0].getComponent(cc.Label),this.renasTalking=this.duihuakuang2.children[0].getComponent(cc.Label),this.mask=cc.find("Canvas/UI/mask"),this.isMoving=0,this.moveToPos=null,this.speed=2,this.startTalking()},start:function(){this.movebuttonclick()},movebuttonclick:function(){this.node.on("touchstart",function(i,t){var e=i.getLocation(),n=this.leftbutton.getComponent(cc.PolygonCollider).world.points,c=this.rightbutton.getComponent(cc.PolygonCollider).world.points;cc.Intersection.pointInPolygon(e,n)&&(console.log("1"),this.move1=!0),cc.Intersection.pointInPolygon(e,c)&&(console.log("2"),this.move2=!0)},this),this.node.on("touchmove",function(i,t){var e=i.getLocation(),n=this.leftbutton.getComponent(cc.PolygonCollider).world.points,c=this.rightbutton.getComponent(cc.PolygonCollider).world.points;cc.Intersection.pointInPolygon(e,n)?(console.log("3"),this.move1=!0):cc.Intersection.pointInPolygon(e,c)&&(console.log("4"),this.move2=!0)},this),this.node.on("touchend",function(){this.move1&&(console.log("5"),this.move1=!1,this.leftbutton.opacity=100),this.move2&&(console.log("6"),this.move2=!1,this.rightbutton.opacity=100)},this)},startTalking:function(){1==n[this.level].duihuashunxu[0]?(this.momsTalking.string=n[this.level].duihuaneirong[0],this.duihuakuang1.active=!0,this.mask.active=!0):2==n[this.level].duihuashunxu[0]&&(this.renasTalking.string=n[this.level].duihuaneirong[0],this.duihuakuang2.active=!0,this.mask.active=!0)},talking:function(){if(this.lunci==n[this.level].duihuashunxu.length){this.lunci=1,this.duihuakuang2.active=!1,this.duihuakuang1.active=!1,this.mask.active=!1;var i=cc.blink(2,3);this.rubbish.runAction(i)}else 1==n[this.level].duihuashunxu[this.lunci]?(this.momsTalking.string=n[this.level].duihuaneirong[this.lunci],this.duihuakuang1.active=!0,this.duihuakuang2.active=!1,this.lunci++):2==n[this.level].duihuashunxu[this.lunci]&&(this.renasTalking.string=n[this.level].duihuaneirong[this.lunci],this.duihuakuang2.active=!0,this.duihuakuang1.active=!1,this.lunci++)},hookBtn:function(){this.hook1=!0},playermove:function(){if(!0===this.hook1){var i=cc.callFunc(function(){for(var i=0;i<this.player.children[1].children.length;i++)this.player.children[1].children[i].active=!1;if(console.log(this.rubbish.children.length),0==this.rubbish.children.length){this.passWindow.active=!0;var t=cc.sys.localStorage.getItem("level");this.level+1>t&&cc.sys.localStorage.setItem("level",this.level+1),console.log("win")}},this);this.hook1=!1;var t=cc.moveTo(2,cc.p(this.player.children[1].x,-310)),e=cc.moveTo(2,cc.p(this.player.children[1].x,36)),n=cc.sequence(t,e,i);this.player.children[1].runAction(n)}var c=this.player.x;!0===this.move1?(this.leftbutton.opacity=255,c-=this.speed):!1===this.move1&&(c+=0),!0===this.move2?(this.rightbutton.opacity=255,c+=this.speed):!1===this.move2&&(c+=0),this.player.x=c,this.player.x=cc.clampf(this.player.x,-583,583)},update:function(i){this.playermove()}}),cc._RF.pop()},{data:"data"}],game3:[function(i,t,e){"use strict";cc._RF.push(t,"a3c52rNDdxL1aLyxkHXWSYY","game3");var n=i("data");cc.Class({extends:cc.Component,properties:{passWindow:cc.Node,cardUp:cc.Node,cardDown:cc.Node},onLoad:function(){this.level=3,this.lunci=1,this.duihuakuang1=cc.find("Canvas/UI/momTalking"),this.duihuakuang2=cc.find("Canvas/UI/renaTalking"),this.momsTalking=this.duihuakuang1.children[0].getComponent(cc.Label),this.renasTalking=this.duihuakuang2.children[0].getComponent(cc.Label),this.mask=cc.find("Canvas/UI/mask"),this.cardDownNum=0,this.change=0,this.compare=[],this.times=1,this.startTalking(),this.showCardnum()},binkFuc:function(){var i=cc.blink(2,3);this.cardDown.runAction(i)},showCardnum:function(){for(var i=[],t=[0,1,2,3,4,5,6,7],e=0;4!=i.length;e++){var n=Math.floor(10*Math.random());!1===i.includes(n)&&i.push(n)}if(4==i.length)for(var c=0;c<4;c++){var s=i[c],a=Math.floor(Math.random()*t.length);this.cardUp.children[t[a]].children[0].getComponent(cc.Label).string=s,t.splice(a,1),console.log(t.length);var o=Math.floor(Math.random()*t.length);this.cardUp.children[t[o]].children[0].getComponent(cc.Label).string=s,t.splice(o,1)}},startTalking:function(){1==n[this.level].duihuashunxu[0]?(this.momsTalking.string=n[this.level].duihuaneirong[0],this.duihuakuang1.active=!0,this.mask.active=!0):2==n[this.level].duihuashunxu[0]&&(this.renasTalking.string=n[this.level].duihuaneirong[0],this.duihuakuang2.active=!0,this.mask.active=!0)},talking:function(){if(this.lunci==n[this.level].duihuashunxu.length){this.lunci=1,this.duihuakuang2.active=!1,this.duihuakuang1.active=!1,this.mask.active=!1;cc.blink(2,3);this.binkFuc()}else 1==n[this.level].duihuashunxu[this.lunci]?(this.momsTalking.string=n[this.level].duihuaneirong[this.lunci],this.duihuakuang1.active=!0,this.duihuakuang2.active=!1,this.lunci++):2==n[this.level].duihuashunxu[this.lunci]&&(this.renasTalking.string=n[this.level].duihuaneirong[this.lunci],this.duihuakuang2.active=!0,this.duihuakuang1.active=!1,this.lunci++)},TouchFuc:function(i,t){for(var e=0;e<this.cardDown.children.length;e++)0==this.cardDown.children[e].active&&(this.cardDownNum=this.cardDownNum+1,console.log(this.cardDownNum));if(console.log(this.cardDownNum),7!=this.cardDownNum){if(1==this.times){console.log(i),i.target.active=!1;var n=this.cardUp.children[t].children[0].getComponent(cc.Label).string;this.compare.push(n),this.compare.push(i.target.name),this.times=2}else if(2==this.times){i.target.active=!1;var c=this.cardUp.children[t].children[0].getComponent(cc.Label).string;this.compare.push(c),this.times=0,this.compare[0]!=this.compare[2]?(this.change=this.compare[1],setTimeout(function(){this.cardDown.children[this.change].active=!0,i.target.active=!0,this.times=1}.bind(this),500)):this.times=1,this.compare=[]}this.cardDownNum=0}else{i.target.active=!1,this.passWindow.active=!0;var s=cc.sys.localStorage.getItem("level");this.level+1>s&&cc.sys.localStorage.setItem("level",this.level+1)}}}),cc._RF.pop()},{data:"data"}],music:[function(i,t,e){"use strict";cc._RF.push(t,"97ec9FezzdPgLXlfHxdFHWO","music"),cc.Class({extends:cc.Component,properties:{mainmusic:cc.AudioClip},onLoad:function(){if(cc.game.addPersistRootNode(this.node),void 0===Window.audioID){var i=cc.audioEngine.play(this.mainmusic,!0,1);Window.audioID=i}}}),cc._RF.pop()},{}],touch:[function(i,t,e){"use strict";cc._RF.push(t,"b636bWQQuhCpKkYVPwR9Vt4","touch"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.node.on(cc.Node.EventType.TOUCH_END,function(i){var t=cc.find("Canvas/ui/guoguan");t.active=!0,cc.sys.localStorage.setItem("level",2),console.log(t)})}}),cc._RF.pop()},{}]},{},["Oncollision","buttonScript","choose","data","decorate","game1","game2","game3","music","touch"]);