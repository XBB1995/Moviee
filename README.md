# smzdm 张大妈APP页面的Vue项目

## 记录 
1. 完成footer的制作和跳转 完成首页的基本布局 制作item组件
2. 通过Easy Mock网站提供自定义的接口 
3. 完成社区页面中的标签页组件的制作，实现增删兴趣项的功能，并使用localStorage实现了状态的存储

## 使用到的插件记录或库
1. vue-awesome-swiper
2. better-scroll
3. JSONPlaceholder
4. Vant
5. ElementUI

## 开发中遇到的问题及思考

### 字体图标通过v-for遍历展示时，使用模板数据展示无效
+ 给元素加上v-html属性，进行转义显示
### 路由高亮的方式 路由重定向后高亮丢失的问题
+ 高亮的两种方式
   1. router自带的router-link-active类，在上面增加样式(注意router-link-exact-active是精确匹配,会导致路由高亮丢失)
   2. 给属性linkActiveClass赋值自定义的样式MyActive
### 过渡与动画效果 只能依赖于元素的插入、更新或销毁吗
### 在localStorage中的数据存入与读取
1. 注意需要通过JSON.stringify转化成字符串来存储
2. 读取时如果数据与计算属性绑定，会报错，因此需要给读出的数据一个默认值（通过||默认值的方式）
