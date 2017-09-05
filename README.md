#	fouceMouse.jquery.js

## 功能

- 简单的基于jQ插件
- 可以让盒子按照鼠标位于自己不同方位更改背景图片（当然不限于此）

## 用法

1. 引入jq包
2. 引入fouceMouse.jquery.js插件
3. 调用

```js
$(".box").fouceMouse({
                data:data,
});
```

4. data需要你传入9个不同方向的图片路径（上下左右、左上左下右上右下、中心）

   - 参数：lt,t,rt,r,rb,b,lb,l,center
   - 最好写一个data

   ```js
   var data = [
                   {
                       lt:"images/team-bg.jpg",
                       t :"images/partners-bg.jpg",
                       rt:"images/info-about-value1.jpg",
                       r :"images/info-about-value2.jpg",
                       rb:"images/info-about-value3.jpg",
                       b :"images/mission.png",
                       lb:"images/video.png",
                       l:"images/map.jpg",
                       center:"images/link_us.jpg",
                   }
               ]
   ```

   5. 此插件一共两个参数：data，i
      - i是用于如果你需要多个图片效果的时候，分别数据用的，默认是0；
   6. 其他请参考demo.html的内容