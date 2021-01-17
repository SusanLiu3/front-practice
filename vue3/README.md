# 初始化项目

# npm init vite-app myProjectName

# 安装 npm

# npm i
# https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E7%BB%84%E4%BB%B6 
# 一些不兼容

- vue3 

```
import {nextTick} from 'vue'
nextTick(()=>{

      })
```

- vue3 针对 v-for v-if v-else v-else-if 的各项分支 key 将不是必须的，vue 会自动生成唯一的 key
- vue3 template v-for key 设置在 template 上，而非 template 的子节点

```
  <template v-for="i in list" :key="i">
    <div>{{i}}</div>
  </template>
```

- 如果 v-if 和 v-for 同时作用于某一个节点，则 v-if 优先级比 v-for 高

- v-bind 合并顺序

```
<!-- id 在vue3版本结果是yellow -->
<div id="red" v-bind="{id:'yellow'}">v-bind 合并顺序</div>
```

# 普通函数创建组件

```

import { h } from 'vue'
export function testJsx(props, context) {
    return h('h3',{},props.title)
}

testJsx.props = ['title']

import { testJsx } from './components/jsx/index.js';

 components: {
    testJsx,
  },
    <testJsx title="test jsx" />
```
