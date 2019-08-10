# smzdm 张大妈APP页面的Vue项目

## 记录 
1. 完成footer的制作和跳转 完成首页的基本布局 制作item组件

## 使用到的插件记录或库
1. vue-awesome-swiper
2. better-scroll
3. JSONPlaceholder

## 开发中遇到的问题及思考

### 字体图标通过v-for遍历展示时，使用模板数据展示无效
+ 给元素加上v-html属性，进行转义显示
### 路由高亮的方式 路由重定向后高亮丢失的问题
+ 高亮的两种方式
   1. router自带的router-link-active类，在上面增加样式(注意router-link-exact-active是精确匹配,会导致路由高亮丢失)
   2. 给属性linkActiveClass赋值自定义的样式MyActive
### 过渡与动画效果 只能依赖于元素的插入、更新或销毁吗