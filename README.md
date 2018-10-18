rem.js
==== 
移动端适配一直以来都是前端开发中不可或缺的重要组成部分，如果没有了它，那么你做出来的页面极有可能会出现各种意外（写出来的页面与设计稿之间的差别）。
所有我们得找到一种相对来说让人比较满意的解决方案，尽可能地让这种“意外”减到最少。没错今天的主角就是它“rem.js” 。<br>
此方案借鉴了淘宝的flexible.js。<br>

优化的地方如下:<br>
1.此方案删除了dpr，保留rem<br>
2.满屏自适应，要求设计稿为750 * 1334<br>
3.单位换算为1rem = 100px<br>
使用方法<br>
第一种：<br>
    <head>
  <script src="rem.js" type="text/javascript"></script>
    <script>
        new Rem({
            desinWidth:750, //750这个值，根据设计师的psd宽度来修改，是多少就写多少，插件默认750 
            num:100         //100这个值，是1rem = 100px的比例 默认100比1的 可修改自己的比例 计算
        })
    </script>
</head>
第二种npm下载：<br>
 $ npm install --save layout-rem<br>
使用1<br>
  >> import rem from 'layout-rem';<br>
new Rem({<br>
    desinWidth:750, //750这个值，根据设计师的psd宽度来修改，是多少就写多少，插件默认750 <br>
    num:100         //100这个值，是1rem = 100px的比例 默认100比1的 可修改自己的比例 计算<br>
})<br>
使用2<br>
 var rem = require('layout-rem')<br>
  var rem = {<br>
    desinWidth:750, //750这个值，根据设计师的psd宽度来修改，是多少就写多少，插件默认750 <br>
    num:100         //100这个值，是1rem = 100px的比例 默认100比1的 可修改自己的比例 计算<br>
 }<br>
 本人推荐使用第一种方法
