# 
# css 选择器
    标签(div),id(#box),类(.box),伪类(.box:hover),后代(.box div),组选择器(.box1,.box2)
# 优先级 
    !important>行类>id>类>标签>通用(*,>,+)
# 居中方法
    1.margin:0 auto;
    2.display:inline-block;verticle-align:middle;
    3.(父)display:flex;(子)align-self:center;
    4.position:relative;top:50%;transform:translateY(-50%);
# px,em,rem 区别
    px:像素;em:相对父元素;rem:相对于根元素(html)
# 弹性盒布局
    1.设置 display:flex;(子元素float、clear和vertical-align属性将失效)；
    2.主轴方向 flex-direction: row/row-reverse/column/column-reverse;
    3.换行  flex-wrap: nowrap/wrap/wrap-reserve;        flex-flow(flex-direction + flex-wrap);
    4.主轴对其  justify-content:flex-start | flex-end | center | space-between | space-around;
    5.侧轴对齐  align-items:flex-start | flex-end | center | baseline | stretch（默认值）;
# 浮动塌陷问题解决方法是什么？
    父元素 定高，浮动，clear:both,overflow:hidden;
# position属性的值有哪些？各个值是什么含义？
    1.static:静态定位(默认) top等属性无效
    2.relative:相对定位 相对自己之前的位置
    3.absolute:绝对定位  相对父元素的左上角
    4.flex: 绝对定位   相对浏览器

