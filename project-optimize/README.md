# test

## 设计模式-- 开放封闭原则
   

## 优先使用iconfont，替代图片
   ### iconfont的三种使用形式 [参考文档](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.17&helptype=code)
      1. unicode
         - 兼容性好，
         - 可以按照字体的方式去设置大小和颜色等等
         - 不支持多色（缺点）
         ```
         <i class="iconfont">&#x33;</i>
         ```
      2. fontclass
         - 兼容性好，语义明确明确更加直观，可以很清楚分辨icon是什么
         - 不支持多色图标
         ```
          <i class="iconfont icon-xxx"></i>
         ```
      3. symbol
         - 支持多色，可以像字体那样设置大小和颜色
         - 兼容性差,svg渲染，性能一般
         ```
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-xxx"></use>
           </svg>
         ```
   ### iconfont 优点
      1. 减少http请求
      2. 可以像字体一样修改大小和颜色
      3. 矢量图不失真
      4. 跨平台
    
